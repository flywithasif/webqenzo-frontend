import { useEffect, useState } from "react";
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
} from "lucide-react";

import {
  createTeamMember,
  deleteTeamMember,
  getTeamMembers,
  updateTeamMember,
} from "../utils/adminApi";

const PERMISSIONS = [
  {
    key: "quotes:read",
    label: "View Assigned Leads",
  },
  {
    key: "quotes:create",
    label: "Create Leads",
  },
  {
    key: "quotes:update",
    label: "Update Leads",
  },
  {
    key: "quotes:delete",
    label: "Delete Leads",
  },
  {
    key: "contacts:read",
    label: "View Contacts",
  },
  {
    key: "contacts:update",
    label: "Update Contacts",
  },
  {
    key: "contacts:delete",
    label: "Delete Contacts",
  },
];

const emptyForm = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  permissions: [
    "quotes:read",
    "quotes:create",
    "quotes:update",
  ],
};

const AdminTeam = () => {
  const [members, setMembers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingMember, setEditingMember] =
    useState(null);

  const [form, setForm] = useState(emptyForm);

  const [saving, setSaving] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const loadTeam = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await getTeamMembers();

      setMembers(
        response?.data || []
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeam();
  }, []);

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
      permissions:
        member.permissions || [],
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

  const togglePermission = (
    permission
  ) => {
    setForm((current) => {
      const exists =
        current.permissions.includes(
          permission
        );

      return {
        ...current,
        permissions: exists
          ? current.permissions.filter(
              (item) =>
                item !== permission
            )
          : [
              ...current.permissions,
              permission,
            ],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSaving(true);

    try {
      if (editingMember) {
        await updateTeamMember(
          editingMember._id,
          {
            name: form.name,
            mobile: form.mobile,
            password: form.password,
            permissions:
              form.permissions,
          }
        );
      } else {
        await createTeamMember({
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          password: form.password,
          permissions:
            form.permissions,
        });
      }

      await loadTeam();

      closeModal();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive =
    async (member) => {
      try {
        await updateTeamMember(
          member._id,
          {
            isActive:
              !member.isActive,
          }
        );

        setMembers((current) =>
          current.map((item) =>
            item._id === member._id
              ? {
                  ...item,
                  isActive:
                    !item.isActive,
                }
              : item
          )
        );
      } catch (err) {
        setError(err.message);
      }
    };

  const handleDelete =
    async (id) => {
      const confirmed =
        window.confirm(
          "Delete this team member?"
        );

      if (!confirmed) return;

      try {
        await deleteTeamMember(id);

        setMembers((current) =>
          current.filter(
            (member) =>
              member._id !== id
          )
        );
      } catch (err) {
        setError(err.message);
      }
    };

  return (
    <>
      <div className="space-y-6 pb-10">
        {/* =====================================================
            PAGE HEADER
        ====================================================== */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
          <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-blue-50/80 blur-3xl" />

          <div className="relative flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-7">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Access Control
              </div>

              <h1 className="text-2xl font-bold tracking-[-0.035em] text-slate-950 sm:text-3xl">
                Team Members
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Manage team accounts, access permissions,
                contact details and account security.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={loadTeam}
                disabled={loading}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 disabled:opacity-60"
              >
                <RefreshCw
                  size={16}
                  className={
                    loading
                      ? "animate-spin"
                      : ""
                  }
                />
                Refresh
              </button>

              <button
                type="button"
                onClick={openCreate}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-600 active:scale-[0.98]"
              >
                <Plus size={17} />
                Add Member
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            ERROR
        ====================================================== */}
        {error && !showModal && (
          <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-600">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />

            <span className="font-medium">
              {error}
            </span>
          </div>
        )}

        {/* =====================================================
            TEAM TABLE
        ====================================================== */}
        <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_6px_25px_rgba(15,23,42,0.04)]">
          {loading ? (
            <div className="p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <RefreshCw
                  size={21}
                  className="animate-spin"
                />
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-800">
                Loading team
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Fetching team accounts...
              </p>
            </div>
          ) : members.length === 0 ? (
            <div className="p-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <UserRound size={24} />
              </div>

              <p className="mt-5 font-bold text-slate-900">
                No team members
              </p>

              <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-slate-400">
                Create your first team account to
                start managing CRM access.
              </p>

              <button
                type="button"
                onClick={openCreate}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                <Plus size={16} />
                Add Member
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px] text-left">
                <thead className="border-b border-slate-200 bg-slate-50/80">
                  <tr>
                    <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                      Member
                    </th>

                    <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                      Contact
                    </th>

                    <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                      Permissions
                    </th>

                    <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                      Status
                    </th>

                    <th className="px-5 py-4 text-right text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {members.map(
                    (member) => (
                      <tr
                        key={member._id}
                        className="group transition-colors hover:bg-slate-50/70"
                      >
                        {/* MEMBER */}
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white shadow-sm">
                              {member.name
                                ?.charAt(0)
                                ?.toUpperCase()}
                            </div>

                            <div className="min-w-0">
                              <p className="truncate text-sm font-bold text-slate-900">
                                {member.name}
                              </p>

                              <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                                <Mail size={11} />
                                {member.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* CONTACT */}
                        <td className="px-5 py-4">
                          {member.mobile ? (
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                                <Phone size={14} />
                              </span>

                              {member.mobile}
                            </div>
                          ) : (
                            <span className="text-xs text-slate-400">
                              No mobile added
                            </span>
                          )}
                        </td>

                        {/* PERMISSIONS */}
                        <td className="px-5 py-4">
                          <div className="flex max-w-lg flex-wrap gap-1.5">
                            {(
                              member.permissions ||
                              []
                            ).map(
                              (
                                permission
                              ) => (
                                <span
                                  key={
                                    permission
                                  }
                                  className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700"
                                >
                                  {permission}
                                </span>
                              )
                            )}
                          </div>
                        </td>

                        {/* STATUS */}
                        <td className="px-5 py-4">
                          <button
                            type="button"
                            onClick={() =>
                              handleToggleActive(
                                member
                              )
                            }
                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide transition ${
                              member.isActive
                                ? "border-emerald-100 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                                : "border-red-100 bg-red-50 text-red-600 hover:bg-red-100"
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                member.isActive
                                  ? "bg-emerald-500"
                                  : "bg-red-500"
                              }`}
                            />

                            {member.isActive
                              ? "Active"
                              : "Disabled"}
                          </button>
                        </td>

                        {/* ACTIONS */}
                        <td className="px-5 py-4 text-right">
                          <div className="flex justify-end gap-1.5">
                            <button
                              type="button"
                              onClick={() =>
                                openEdit(
                                  member
                                )
                              }
                              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            >
                              <UserCog
                                size={14}
                              />
                              Manage
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                handleDelete(
                                  member._id
                                )
                              }
                              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                            >
                              <Trash2
                                size={16}
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

      {/* =====================================================
          CREATE / EDIT MODAL
      ====================================================== */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm sm:p-5">
          <div className="my-5 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.3)]">
            {/* MODAL HEADER */}
            <div className="relative overflow-hidden border-b border-slate-100 px-5 py-5 sm:px-7">
              <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-blue-50 blur-3xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {editingMember ? (
                      <UserCog size={19} />
                    ) : (
                      <Plus size={19} />
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {editingMember
                        ? "Manage Team Member"
                        : "Create Team Member"}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {editingMember
                        ? "Update profile, mobile number, password and access."
                        : "Create a secure CRM account with controlled access."}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-h-[75vh] space-y-6 overflow-y-auto bg-slate-50/60 p-4 sm:p-6"
            >
              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />

                  <span className="font-medium">
                    {error}
                  </span>
                </div>
              )}

              {/* =================================================
                  BASIC PROFILE
              ================================================== */}
              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <UserRound size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Profile Details
                      </p>

                      <p className="text-[11px] text-slate-400">
                        Basic team member information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-4 sm:grid-cols-2">
                  {/* NAME */}
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
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
                          setForm({
                            ...form,
                            name: e.target.value,
                          })
                        }
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder="Enter team member name"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
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
                          setForm({
                            ...form,
                            email: e.target.value,
                          })
                        }
                        required={!editingMember}
                        disabled={Boolean(
                          editingMember
                        )}
                        placeholder="name@company.com"
                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                      />
                    </div>

                    {editingMember && (
                      <p className="mt-1.5 text-[10px] text-slate-400">
                        Email is kept unchanged for this account.
                      </p>
                    )}
                  </div>

                  {/* MOBILE */}
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
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
                          setForm({
                            ...form,
                            mobile:
                              e.target.value,
                          })
                        }
                        placeholder="+91 98765 43210"
                        maxLength={20}
                        className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                    <p className="mt-1.5 text-[10px] text-slate-400">
                      Can be updated later from this panel.
                    </p>
                  </div>
                </div>
              </section>

              {/* =================================================
                  SECURITY
              ================================================== */}
              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                      <LockKeyhole size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Account Security
                      </p>

                      <p className="text-[11px] text-slate-400">
                        Set or update the account password.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                    {editingMember
                      ? "New Password"
                      : "Password"}
                  </label>

                  <div className="relative mt-2">
                    <LockKeyhole
                      size={15}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={form.password}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          password:
                            e.target.value,
                        })
                      }
                      required={!editingMember}
                      minLength={8}
                      placeholder={
                        editingMember
                          ? "Leave blank to keep current password"
                          : "Minimum 8 characters"
                      }
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-11 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (current) =>
                            !current
                        )
                      }
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>

                  <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-100 bg-amber-50/60 p-3">
                    <ShieldCheck
                      size={15}
                      className="mt-0.5 shrink-0 text-amber-600"
                    />

                    <p className="text-[11px] leading-5 text-amber-700">
                      {editingMember
                        ? "Enter a password only when you want to change the member's current password."
                        : "Use a strong password with at least 8 characters."}
                    </p>
                  </div>
                </div>
              </section>

              {/* =================================================
                  PERMISSIONS
              ================================================== */}
              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <ShieldCheck size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Permissions
                      </p>

                      <p className="text-[11px] text-slate-400">
                        Choose exactly what this member can manage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2 p-4 sm:grid-cols-2">
                  {PERMISSIONS.map(
                    (permission) => {
                      const checked =
                        form.permissions.includes(
                          permission.key
                        );

                      return (
                        <label
                          key={
                            permission.key
                          }
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition ${
                            checked
                              ? "border-blue-200 bg-blue-50/50"
                              : "border-slate-200 bg-white hover:bg-slate-50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() =>
                              togglePermission(
                                permission.key
                              )
                            }
                            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                          />

                          <span className="flex-1 text-sm font-medium text-slate-700">
                            {
                              permission.label
                            }
                          </span>

                          {checked && (
                            <CheckCircle2
                              size={15}
                              className="text-blue-600"
                            />
                          )}
                        </label>
                      );
                    }
                  )}
                </div>
              </section>

              {/* =================================================
                  FOOTER
              ================================================== */}
              <div className="flex flex-col-reverse gap-2 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end sm:gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="h-11 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving && (
                    <RefreshCw
                      size={15}
                      className="animate-spin"
                    />
                  )}

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
    </>
  );
};

export default AdminTeam;
