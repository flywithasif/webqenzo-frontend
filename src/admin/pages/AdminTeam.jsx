import { useEffect, useMemo, useState } from "react";
import {
  Plus,
  RefreshCw,
  Trash2,
  UserRound,
  X,
  Phone,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  UserCog,
  Search,
  Users,
  UserCheck,
  UserX,
  KeyRound,
  ChevronDown,
  Check,
} from "lucide-react";

import {
  createTeamMember,
  deleteTeamMember,
  getTeamMembers,
  updateTeamMember,
} from "../utils/adminApi";

/* =========================================================
   SUPER ADMIN — TEAM ACCESS CONTROL
   UI/UX ONLY
   Existing API functions are preserved.
========================================================= */

const PERMISSIONS = [
  {
    key: "quotes:read",
    label: "View Assigned Leads",
    group: "Leads",
    description: "View leads assigned to the member.",
  },
  {
    key: "quotes:create",
    label: "Create Leads",
    group: "Leads",
    description: "Create new CRM leads.",
  },
  {
    key: "quotes:update",
    label: "Update Leads",
    group: "Leads",
    description: "Update lead status and follow-ups.",
  },
  {
    key: "quotes:delete",
    label: "Delete Leads",
    group: "Leads",
    description: "Delete leads from the CRM.",
  },
  {
    key: "contacts:read",
    label: "View Contacts",
    group: "Contacts",
    description: "View website contact enquiries.",
  },
  {
    key: "contacts:update",
    label: "Update Contacts",
    group: "Contacts",
    description: "Update contact CRM information.",
  },
  {
    key: "contacts:delete",
    label: "Delete Contacts",
    group: "Contacts",
    description: "Delete contact records.",
  },
];

const emptyForm = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  permissions: ["quotes:read", "quotes:create", "quotes:update"],
};

const initialToast = {
  visible: false,
  type: "success",
  title: "",
  message: "",
};

const getInitials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("") || "U";

const permissionLabel = (key) =>
  PERMISSIONS.find((item) => item.key === key)?.label || key;

const AdminTeam = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [permissionFilter, setPermissionFilter] = useState("ALL");

  const [toast, setToast] = useState(initialToast);

  const showToast = (type, title, message) => {
    setToast({ visible: true, type, title, message });
    window.setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 3200);
  };

  const loadTeam = async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      setError("");

      const response = await getTeamMembers();
      setMembers(response?.data || []);
    } catch (err) {
      const message = err?.message || "Unable to load team members.";
      setError(message);

      if (silent) {
        showToast("error", "Unable to refresh", message);
      }
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    loadTeam();
  }, []);

  const stats = useMemo(() => {
    const total = members.length;
    const active = members.filter((member) => member.isActive).length;
    const disabled = total - active;
    const withLeadAccess = members.filter((member) =>
      (member.permissions || []).some((item) => item.startsWith("quotes:"))
    ).length;

    return {
      total,
      active,
      disabled,
      withLeadAccess,
    };
  }, [members]);

  const filteredMembers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return members.filter((member) => {
      const matchesSearch =
        !query ||
        member.name?.toLowerCase().includes(query) ||
        member.email?.toLowerCase().includes(query) ||
        member.mobile?.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "ALL" ||
        (statusFilter === "ACTIVE" && member.isActive) ||
        (statusFilter === "DISABLED" && !member.isActive);

      const matchesPermission =
        permissionFilter === "ALL" ||
        (member.permissions || []).includes(permissionFilter);

      return matchesSearch && matchesStatus && matchesPermission;
    });
  }, [members, search, statusFilter, permissionFilter]);

  const openCreate = () => {
    setEditingMember(null);
    setForm({
      ...emptyForm,
      permissions: [
        "quotes:read",
        "quotes:create",
        "quotes:update",
      ],
    });
    setShowPassword(false);
    setError("");
    setShowModal(true);
  };

  const openEdit = (member) => {
    setEditingMember(member);
    setForm({
      name: member.name || "",
      email: member.email || "",
      mobile: member.mobile || "",
      password: "",
      permissions: member.permissions || [],
    });
    setShowPassword(false);
    setError("");
    setShowModal(true);
  };

  const closeModal = () => {
    if (saving) return;

    setShowModal(false);
    setEditingMember(null);
    setForm(emptyForm);
    setShowPassword(false);
  };

  const togglePermission = (permission) => {
    setForm((current) => {
      const exists = current.permissions.includes(permission);

      return {
        ...current,
        permissions: exists
          ? current.permissions.filter((item) => item !== permission)
          : [...current.permissions, permission],
      };
    });
  };

  const togglePermissionGroup = (group) => {
    const groupKeys = PERMISSIONS.filter((item) => item.group === group).map(
      (item) => item.key
    );

    setForm((current) => {
      const hasAll = groupKeys.every((key) =>
        current.permissions.includes(key)
      );

      return {
        ...current,
        permissions: hasAll
          ? current.permissions.filter((key) => !groupKeys.includes(key))
          : Array.from(new Set([...current.permissions, ...groupKeys])),
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.name.trim()) {
      setError("Please enter the team member name.");
      return;
    }

    if (!editingMember && !form.email.trim()) {
      setError("Email address is required.");
      return;
    }

    if (!editingMember && form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.permissions.length === 0) {
      setError("Select at least one permission.");
      return;
    }

    setSaving(true);

    try {
      if (editingMember) {
        await updateTeamMember(editingMember._id, {
          name: form.name,
          mobile: form.mobile,
          password: form.password,
          permissions: form.permissions,
        });

        await loadTeam(true);
        closeModal();

        showToast(
          "success",
          "Team member updated",
          `${form.name} access details were updated successfully.`
        );
      } else {
        await createTeamMember({
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          password: form.password,
          permissions: form.permissions,
        });

        await loadTeam(true);
        closeModal();

        showToast(
          "success",
          "Team member created",
          `${form.name} has been added to the WebQenzo team.`
        );
      }
    } catch (err) {
      const message = err?.message || "Something went wrong.";
      setError(message);
      showToast("error", "Action failed", message);
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (member) => {
    try {
      setError("");

      await updateTeamMember(member._id, {
        isActive: !member.isActive,
      });

      setMembers((current) =>
        current.map((item) =>
          item._id === member._id
            ? { ...item, isActive: !item.isActive }
            : item
        )
      );

      showToast(
        "success",
        member.isActive ? "Member disabled" : "Member activated",
        `${member.name} is now ${
          member.isActive ? "disabled" : "active"
        }.`
      );
    } catch (err) {
      const message = err?.message || "Unable to update member status.";
      setError(message);
      showToast("error", "Status update failed", message);
    }
  };

  const handleDelete = async (member) => {
    const confirmed = window.confirm(
      `Delete ${member.name || "this team member"}? This action cannot be undone.`
    );

    if (!confirmed) return;

    try {
      setError("");

      await deleteTeamMember(member._id);

      setMembers((current) =>
        current.filter((item) => item._id !== member._id)
      );

      showToast(
        "success",
        "Team member deleted",
        `${member.name || "Team member"} was removed successfully.`
      );
    } catch (err) {
      const message = err?.message || "Unable to delete team member.";
      setError(message);
      showToast("error", "Delete failed", message);
    }
  };

  const renderPermissionSummary = (member) => {
    const permissions = member.permissions || [];

    if (!permissions.length) {
      return (
        <span className="text-xs font-medium text-slate-400">
          No permissions
        </span>
      );
    }

    return (
      <div className="flex max-w-[420px] flex-wrap gap-1.5">
        {permissions.slice(0, 3).map((permission) => (
          <span
            key={permission}
            className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-[10px] font-bold text-cyan-700"
          >
            {permissionLabel(permission)}
          </span>
        ))}

        {permissions.length > 3 && (
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-bold text-slate-500">
            +{permissions.length - 3} more
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="min-h-full bg-[#f5f7fa] pb-8">
        {/* =====================================================
            COMPACT CRM HEADER
        ====================================================== */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  <span>Workspace</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-cyan-600">Team</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#071225] text-cyan-300">
                    <Users size={19} />
                  </div>

                  <div className="min-w-0">
                    <h1 className="truncate text-xl font-extrabold tracking-[-0.03em] text-[#071225] sm:text-2xl">
                      Team Members
                    </h1>
                    <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                      Manage team access, CRM permissions and account status.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => loadTeam()}
                  disabled={loading}
                  className="inline-flex h-10 items-center justify-center gap-2 border border-slate-200 bg-white px-3.5 text-xs font-extrabold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-60 sm:px-4 sm:text-sm"
                >
                  <RefreshCw
                    size={15}
                    className={loading ? "animate-spin" : ""}
                  />
                  <span>Refresh</span>
                </button>

                <button
                  type="button"
                  onClick={openCreate}
                  className="inline-flex h-10 items-center justify-center gap-2 bg-[#071225] px-4 text-xs font-extrabold text-white transition hover:bg-cyan-600 sm:px-5 sm:text-sm"
                >
                  <Plus size={16} />
                  Add Member
                </button>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-[1600px] space-y-4 px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
          {/* =====================================================
              KPI STRIP
          ====================================================== */}
          <section className="grid grid-cols-2 border border-slate-200 bg-white lg:grid-cols-4">
            {[
              {
                label: "Total Members",
                value: stats.total,
                icon: Users,
                iconClass: "bg-cyan-50 text-cyan-600",
                valueClass: "text-[#071225]",
              },
              {
                label: "Active",
                value: stats.active,
                icon: UserCheck,
                iconClass: "bg-emerald-50 text-emerald-600",
                valueClass: "text-emerald-600",
              },
              {
                label: "Disabled",
                value: stats.disabled,
                icon: UserX,
                iconClass: "bg-rose-50 text-rose-600",
                valueClass: "text-rose-600",
              },
              {
                label: "Lead Access",
                value: stats.withLeadAccess,
                icon: ShieldCheck,
                iconClass: "bg-violet-50 text-violet-600",
                valueClass: "text-violet-600",
              },
            ].map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`flex min-w-0 items-center justify-between gap-3 px-4 py-4 sm:px-5 ${
                    index < 2 ? "border-b border-slate-200 lg:border-b-0" : ""
                  } ${
                    index % 2 === 0 ? "border-r border-slate-200" : ""
                  } ${
                    index !== 3 ? "lg:border-r lg:border-slate-200" : ""
                  }`}
                >
                  <div className="min-w-0">
                    <p className="truncate text-[9px] font-extrabold uppercase tracking-[0.13em] text-slate-400 sm:text-[10px]">
                      {stat.label}
                    </p>
                    <p
                      className={`mt-1 text-xl font-extrabold tracking-tight sm:text-2xl ${stat.valueClass}`}
                    >
                      {stat.value}
                    </p>
                  </div>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center ${stat.iconClass}`}
                  >
                    <Icon size={17} />
                  </span>
                </div>
              );
            })}
          </section>

          {/* =====================================================
              ERROR
          ====================================================== */}
          {error && !showModal && (
            <div className="flex items-start gap-3 border border-rose-200 bg-rose-50 px-4 py-3 text-xs text-rose-700 sm:text-sm">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
              <span className="font-semibold">{error}</span>

              <button
                type="button"
                onClick={() => setError("")}
                className="ml-auto text-rose-500 hover:text-rose-700"
              >
                <X size={15} />
              </button>
            </div>
          )}

          {/* =====================================================
              FILTER BAR
          ====================================================== */}
          <section className="border border-slate-200 bg-white">
            <div className="flex flex-col gap-2 p-3 md:flex-row">
              <div className="relative min-w-0 flex-1">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name, email or mobile..."
                  className="h-10 w-full border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-xs font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                />
              </div>

              <div className="relative w-full md:w-44 lg:w-48">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="h-10 w-full appearance-none border border-slate-200 bg-white px-3.5 pr-9 text-xs font-bold text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                >
                  <option value="ALL">All Status</option>
                  <option value="ACTIVE">Active</option>
                  <option value="DISABLED">Disabled</option>
                </select>
                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>

              <div className="relative w-full md:w-52 lg:w-56">
                <select
                  value={permissionFilter}
                  onChange={(e) => setPermissionFilter(e.target.value)}
                  className="h-10 w-full appearance-none border border-slate-200 bg-white px-3.5 pr-9 text-xs font-bold text-slate-700 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-50 sm:text-sm"
                >
                  <option value="ALL">All Permissions</option>
                  {PERMISSIONS.map((permission) => (
                    <option key={permission.key} value={permission.key}>
                      {permission.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 px-3.5 py-2.5 sm:px-4">
              <p className="text-[11px] font-medium text-slate-500 sm:text-xs">
                Showing{" "}
                <span className="font-extrabold text-slate-800">
                  {filteredMembers.length}
                </span>{" "}
                of{" "}
                <span className="font-extrabold text-slate-800">
                  {members.length}
                </span>{" "}
                members
              </p>

              {(search || statusFilter !== "ALL" || permissionFilter !== "ALL") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setStatusFilter("ALL");
                    setPermissionFilter("ALL");
                  }}
                  className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-cyan-600 hover:text-cyan-800"
                >
                  Clear filters
                </button>
              )}
            </div>
          </section>

          {/* =====================================================
              TEAM TABLE
          ====================================================== */}
          <section className="overflow-hidden border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3.5 sm:px-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center bg-slate-100 text-slate-600">
                  <UserCog size={15} />
                </div>
                <div>
                  <h2 className="text-sm font-extrabold text-[#071225] sm:text-base">
                    Team Access
                  </h2>
                  <p className="hidden text-[10px] text-slate-400 sm:block">
                    Accounts and permissions
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live status
              </div>
            </div>

            {loading ? (
              <div className="flex min-h-[260px] flex-col items-center justify-center px-5 text-center">
                <div className="flex h-10 w-10 items-center justify-center bg-cyan-50 text-cyan-600">
                  <RefreshCw size={18} className="animate-spin" />
                </div>
                <p className="mt-3 text-sm font-extrabold text-slate-800">
                  Loading team...
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Fetching secure accounts.
                </p>
              </div>
            ) : filteredMembers.length === 0 ? (
              <div className="flex min-h-[260px] flex-col items-center justify-center px-5 text-center">
                <div className="flex h-12 w-12 items-center justify-center bg-slate-100 text-slate-400">
                  <Users size={21} />
                </div>

                <p className="mt-4 text-sm font-extrabold text-slate-900">
                  {members.length === 0
                    ? "No team members yet"
                    : "No matching members"}
                </p>

                <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">
                  {members.length === 0
                    ? "Create the first team account to start managing CRM access."
                    : "Try another search term or clear the current filters."}
                </p>

                {members.length === 0 && (
                  <button
                    type="button"
                    onClick={openCreate}
                    className="mt-4 inline-flex h-9 items-center gap-2 bg-[#071225] px-4 text-xs font-extrabold text-white transition hover:bg-cyan-600"
                  >
                    <Plus size={15} />
                    Add Team Member
                  </button>
                )}
              </div>
            ) : (
              <>
                {/* Desktop */}
                <div className="hidden overflow-x-auto lg:block">
                  <table className="w-full min-w-[1000px] text-left">
                    <thead className="border-b border-slate-200 bg-slate-50/80">
                      <tr>
                        <th className="px-5 py-3.5 text-[9px] font-extrabold uppercase tracking-[0.13em] text-slate-400">
                          Member
                        </th>
                        <th className="px-5 py-3.5 text-[9px] font-extrabold uppercase tracking-[0.13em] text-slate-400">
                          Contact
                        </th>
                        <th className="px-5 py-3.5 text-[9px] font-extrabold uppercase tracking-[0.13em] text-slate-400">
                          Access
                        </th>
                        <th className="px-5 py-3.5 text-[9px] font-extrabold uppercase tracking-[0.13em] text-slate-400">
                          Status
                        </th>
                        <th className="px-5 py-3.5 text-right text-[9px] font-extrabold uppercase tracking-[0.13em] text-slate-400">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                      {filteredMembers.map((member) => (
                        <tr
                          key={member._id}
                          className="transition-colors hover:bg-slate-50/70"
                        >
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#071225] text-xs font-extrabold text-white">
                                {getInitials(member.name)}
                              </div>

                              <div className="min-w-0">
                                <p className="truncate text-sm font-extrabold text-slate-900">
                                  {member.name || "Unnamed member"}
                                </p>
                                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
                                  CRM Team Member
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-5 py-4">
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                <Mail size={12} className="text-slate-400" />
                                <span>{member.email || "No email"}</span>
                              </div>

                              <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
                                <Phone size={12} className="text-slate-400" />
                                <span>{member.mobile || "No mobile added"}</span>
                              </div>
                            </div>
                          </td>

                          <td className="px-5 py-4">
                            {renderPermissionSummary(member)}
                          </td>

                          <td className="px-5 py-4">
                            <button
                              type="button"
                              onClick={() => handleToggleActive(member)}
                              className={`inline-flex items-center gap-2 border px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.08em] transition ${
                                member.isActive
                                  ? "border-emerald-100 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                  : "border-rose-100 bg-rose-50 text-rose-600 hover:bg-rose-100"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  member.isActive
                                    ? "bg-emerald-500"
                                    : "bg-rose-500"
                                }`}
                              />
                              {member.isActive ? "Active" : "Disabled"}
                            </button>
                          </td>

                          <td className="px-5 py-4">
                            <div className="flex justify-end gap-1.5">
                              <button
                                type="button"
                                onClick={() => openEdit(member)}
                                className="inline-flex h-8 items-center gap-1.5 border border-slate-200 bg-white px-2.5 text-[10px] font-extrabold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                              >
                                <UserCog size={13} />
                                Manage
                              </button>

                              <button
                                type="button"
                                onClick={() => handleDelete(member)}
                                className="flex h-8 w-8 items-center justify-center border border-transparent text-slate-400 transition hover:border-rose-100 hover:bg-rose-50 hover:text-rose-600"
                                title="Delete member"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile / Tablet */}
                <div className="divide-y divide-slate-100 lg:hidden">
                  {filteredMembers.map((member) => (
                    <article key={member._id} className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#071225] text-xs font-extrabold text-white">
                          {getInitials(member.name)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="truncate text-sm font-extrabold text-slate-900">
                              {member.name || "Unnamed member"}
                            </h3>

                            <span
                              className={`inline-flex items-center gap-1.5 border px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.08em] ${
                                member.isActive
                                  ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                                  : "border-rose-100 bg-rose-50 text-rose-600"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  member.isActive
                                    ? "bg-emerald-500"
                                    : "bg-rose-500"
                                }`}
                              />
                              {member.isActive ? "Active" : "Disabled"}
                            </span>
                          </div>

                          <div className="mt-2 space-y-1.5">
                            <p className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
                              <Mail size={12} className="shrink-0 text-slate-400" />
                              <span className="truncate">
                                {member.email || "No email"}
                              </span>
                            </p>

                            <p className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
                              <Phone size={12} className="shrink-0 text-slate-400" />
                              <span>{member.mobile || "No mobile added"}</span>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 border-t border-slate-100 pt-3">
                        <div className="mb-2 flex items-center justify-between">
                          <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-slate-400">
                            Access Permissions
                          </p>

                          <span className="text-[9px] font-bold text-slate-400">
                            {(member.permissions || []).length} enabled
                          </span>
                        </div>

                        {renderPermissionSummary(member)}
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => openEdit(member)}
                          className="inline-flex h-9 items-center justify-center gap-2 border border-slate-200 bg-white text-[11px] font-extrabold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                        >
                          <UserCog size={13} />
                          Manage
                        </button>

                        <button
                          type="button"
                          onClick={() => handleToggleActive(member)}
                          className={`inline-flex h-9 items-center justify-center gap-2 border text-[11px] font-extrabold transition ${
                            member.isActive
                              ? "border-rose-100 bg-rose-50 text-rose-600"
                              : "border-emerald-100 bg-emerald-50 text-emerald-700"
                          }`}
                        >
                          {member.isActive ? (
                            <UserX size={13} />
                          ) : (
                            <UserCheck size={13} />
                          )}
                          {member.isActive ? "Disable" : "Activate"}
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDelete(member)}
                        className="mt-1.5 flex h-8 w-full items-center justify-center gap-2 text-[10px] font-bold text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                      >
                        <Trash2 size={13} />
                        Delete Team Member
                      </button>
                    </article>
                  ))}
                </div>
              </>
            )}
          </section>
        </main>
      </div>


      {/* =========================================================
          CREATE / EDIT MODAL
          0 RADIUS — PREMIUM CRM STYLE
      ========================================================== */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020817]/75 p-0 backdrop-blur-md sm:p-4">
          <div className="flex h-full w-full flex-col overflow-hidden bg-white shadow-[0_30px_100px_rgba(2,8,23,0.35)] sm:h-auto sm:max-h-[94vh] sm:max-w-3xl">
            {/* Header */}
            <div className="shrink-0 border-b border-slate-200 bg-[#071225] px-4 py-4 text-white sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cyan-500 text-white">
                    {editingMember ? (
                      <UserCog size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-cyan-300">
                      Super Admin · Team Access
                    </p>

                    <h2 className="mt-1 truncate text-lg font-extrabold tracking-tight sm:text-xl">
                      {editingMember
                        ? "Manage Team Member"
                        : "Create Team Member"}
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="min-h-0 flex-1 overflow-y-auto bg-[#f7f9fc]"
            >
              <div className="space-y-4 p-4 sm:p-6">
                {error && (
                  <div className="flex items-start gap-3 border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                    <span className="font-semibold">{error}</span>
                  </div>
                )}

                {/* Profile */}
                <section className="border border-slate-200 bg-white">
                  <div className="border-b border-slate-100 px-4 py-4 sm:px-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center bg-cyan-50 text-cyan-600">
                        <UserRound size={16} />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-slate-900">
                          Profile Details
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-400">
                          Basic team member information.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
                    <div className="sm:col-span-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                        Full Name
                      </label>

                      <div className="relative mt-2">
                        <UserRound
                          size={15}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          required
                          minLength={2}
                          maxLength={100}
                          placeholder="Enter team member name"
                          className="h-11 w-full border border-slate-200 bg-slate-50/60 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                        Email Address
                      </label>

                      <div className="relative mt-2">
                        <Mail
                          size={15}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          required={!editingMember}
                          disabled={Boolean(editingMember)}
                          placeholder="name@company.com"
                          className="h-11 w-full border border-slate-200 bg-slate-50/60 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-50 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                        />
                      </div>

                      {editingMember && (
                        <p className="mt-1.5 text-[10px] text-slate-400">
                          Email is kept unchanged for this account.
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                        Mobile Number
                      </label>

                      <div className="relative mt-2">
                        <Phone
                          size={15}
                          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          type="tel"
                          value={form.mobile}
                          onChange={(e) =>
                            setForm({ ...form, mobile: e.target.value })
                          }
                          maxLength={20}
                          placeholder="+91 98765 43210"
                          className="h-11 w-full border border-slate-200 bg-slate-50/60 pl-10 pr-4 text-sm font-medium text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-50"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Security */}
                <section className="border border-slate-200 bg-white">
                  <div className="border-b border-slate-100 px-4 py-4 sm:px-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center bg-amber-50 text-amber-600">
                        <KeyRound size={16} />
                      </div>

                      <div>
                        <p className="text-sm font-extrabold text-slate-900">
                          Account Security
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-400">
                          Set or update the account password securely.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <label className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
                      {editingMember ? "New Password" : "Password"}
                    </label>

                    <div className="relative mt-2">
                      <LockKeyhole
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                        required={!editingMember}
                        minLength={editingMember ? 0 : 8}
                        placeholder={
                          editingMember
                            ? "Leave blank to keep current password"
                            : "Minimum 8 characters"
                        }
                        className="h-11 w-full border border-slate-200 bg-slate-50/60 pl-10 pr-11 text-sm font-medium text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-50"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>

                    <div className="mt-3 flex items-start gap-2 border border-amber-100 bg-amber-50/60 p-3">
                      <ShieldCheck
                        size={15}
                        className="mt-0.5 shrink-0 text-amber-600"
                      />
                      <p className="text-[11px] leading-5 text-amber-700">
                        {editingMember
                          ? "Only enter a password when you want to change the member's current password."
                          : "Use a strong password with at least 8 characters."}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Permissions */}
                <section className="border border-slate-200 bg-white">
                  <div className="border-b border-slate-100 px-4 py-4 sm:px-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center bg-cyan-50 text-cyan-600">
                          <ShieldCheck size={16} />
                        </div>

                        <div>
                          <p className="text-sm font-extrabold text-slate-900">
                            Permissions & Access
                          </p>
                          <p className="mt-0.5 text-[11px] text-slate-400">
                            Control exactly what this member can manage.
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex w-fit items-center border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-[10px] font-extrabold text-cyan-700">
                        {form.permissions.length} selected
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 p-4 sm:p-5">
                    {["Leads", "Contacts"].map((group) => {
                      const groupPermissions = PERMISSIONS.filter(
                        (item) => item.group === group
                      );

                      const allSelected = groupPermissions.every((item) =>
                        form.permissions.includes(item.key)
                      );

                      return (
                        <div
                          key={group}
                          className="border border-slate-200 bg-slate-50/50"
                        >
                          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                            <div>
                              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-700">
                                {group}
                              </p>
                              <p className="mt-0.5 text-[10px] text-slate-400">
                                {group === "Leads"
                                  ? "CRM lead access"
                                  : "Website contact access"}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => togglePermissionGroup(group)}
                              className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-cyan-700 hover:text-cyan-900"
                            >
                              {allSelected ? "Clear group" : "Select group"}
                            </button>
                          </div>

                          <div className="grid gap-2 p-3 sm:grid-cols-2">
                            {groupPermissions.map((permission) => {
                              const checked = form.permissions.includes(
                                permission.key
                              );

                              return (
                                <label
                                  key={permission.key}
                                  className={`flex cursor-pointer items-start gap-3 border p-3 transition ${
                                    checked
                                      ? "border-cyan-200 bg-cyan-50/70"
                                      : "border-slate-200 bg-white hover:border-slate-300"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={checked}
                                    onChange={() =>
                                      togglePermission(permission.key)
                                    }
                                    className="sr-only"
                                  />

                                  <span
                                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border ${
                                      checked
                                        ? "border-cyan-600 bg-cyan-600 text-white"
                                        : "border-slate-300 bg-white"
                                    }`}
                                  >
                                    {checked && <Check size={11} strokeWidth={3} />}
                                  </span>

                                  <span className="min-w-0 flex-1">
                                    <span className="block text-xs font-extrabold text-slate-800">
                                      {permission.label}
                                    </span>
                                    <span className="mt-1 block text-[10px] leading-4 text-slate-400">
                                      {permission.description}
                                    </span>
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 flex shrink-0 flex-col-reverse gap-2 border-t border-slate-200 bg-white p-4 sm:flex-row sm:justify-end sm:px-6">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={saving}
                  className="h-11 border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex h-11 items-center justify-center gap-2 bg-[#071225] px-6 text-sm font-extrabold text-white shadow-sm transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && <RefreshCw size={15} className="animate-spin" />}
                  {saving
                    ? "Saving..."
                    : editingMember
                    ? "Save Changes"
                    : "Create Member"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================
          TOAST
      ========================================================== */}
      {toast.visible && (
        <div className="fixed right-4 top-4 z-[200] w-[calc(100%-2rem)] max-w-sm sm:right-6 sm:top-6">
          <div
            className={`flex items-start gap-3 border bg-white px-4 py-3.5 shadow-[0_18px_50px_rgba(2,8,23,0.18)] ${
              toast.type === "success"
                ? "border-emerald-200"
                : "border-rose-200"
            }`}
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center ${
                toast.type === "success"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-rose-50 text-rose-600"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 size={18} />
              ) : (
                <X size={18} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-extrabold text-slate-900">
                {toast.title}
              </p>
              <p className="mt-0.5 text-xs leading-5 text-slate-500">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setToast((current) => ({ ...current, visible: false }))
              }
              className="text-slate-400 transition hover:text-slate-700"
            >
              <X size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminTeam;
