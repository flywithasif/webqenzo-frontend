import { useEffect, useMemo, useState } from "react";
import {
  RefreshCw,
  Search,
  X,
  Pencil,
  Clock3,
  MessageSquare,
  Phone,
  Mail,
  CalendarDays,
  UserRound,
  ChevronRight,
  Flame,
  CircleDot,
  Snowflake,
  CheckCircle2,
  AlertCircle,
  UserPlus,
} from "lucide-react";

import {
  getContacts,
  getTeamMembers,
  updateContactCRM,
  assignContact,
} from "../utils/adminApi";

const formatDateTime = (value) => {
  if (!value) return "—";

  return new Date(value).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const qualityClass = {
  HOT: "text-red-500",
  WARM: "text-amber-500",
  COLD: "text-sky-500",
};

const qualityConfig = {
  HOT: {
    icon: Flame,
    label: "Hot",
    className:
      "border-red-100 bg-red-50 text-red-600",
  },
  WARM: {
    icon: CircleDot,
    label: "Warm",
    className:
      "border-amber-100 bg-amber-50 text-amber-600",
  },
  COLD: {
    icon: Snowflake,
    label: "Cold",
    className:
      "border-sky-100 bg-sky-50 text-sky-600",
  },
};

const statusConfig = {
  ACTIVE: {
    label: "Active",
    className:
      "border-blue-100 bg-blue-50 text-blue-600",
  },
  SUCCESSFUL: {
    label: "Successful",
    className:
      "border-emerald-100 bg-emerald-50 text-emerald-600",
  },
  COLD: {
    label: "Cold",
    className:
      "border-slate-200 bg-slate-100 text-slate-600",
  },
};

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [team, setTeam] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [quality, setQuality] = useState("ALL");

  const [selected, setSelected] = useState(null);
  const [historyOpen, setHistoryOpen] = useState(false);

  const [crm, setCrm] = useState({
    leadType: "",
    leadQuality: "WARM",
    leadStatus: "ACTIVE",
    nextFollowUpDate: "",
    nextFollowUpTime: "",
    doNotFollowUp: false,
    coldReason: "",
    comment: "",
  });

  const admin = useMemo(() => {
    try {
      return JSON.parse(
        localStorage.getItem("webqenzo_admin") || "{}"
      );
    } catch {
      return {};
    }
  }, []);

  const isSuperAdmin = admin?.role === "SUPER_ADMIN";

  const loadContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getContacts();

      setContacts(response?.data || []);

      if (isSuperAdmin) {
        const teamResponse = await getTeamMembers();

        setTeam(teamResponse?.data || []);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const filteredContacts = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return contacts.filter((contact) => {
      const matchesSearch =
        !searchValue ||
        contact.name?.toLowerCase().includes(searchValue) ||
        contact.mobile?.toLowerCase().includes(searchValue) ||
        contact.email?.toLowerCase().includes(searchValue) ||
        contact.subject?.toLowerCase().includes(searchValue);

      const matchesQuality =
        quality === "ALL" ||
        contact.leadQuality === quality;

      return matchesSearch && matchesQuality;
    });
  }, [contacts, search, quality]);

  const openLead = (contact) => {
    setSelected(contact);

    setCrm({
      leadType: contact.leadType || "",
      leadQuality: contact.leadQuality || "WARM",
      leadStatus: contact.leadStatus || "ACTIVE",
      nextFollowUpDate: contact.nextFollowUpDate || "",
      nextFollowUpTime: contact.nextFollowUpTime || "",
      doNotFollowUp: Boolean(contact.doNotFollowUp),
      coldReason: contact.coldReason || "",
      comment: "",
    });
  };

  const updateField = (field, value) => {
    setCrm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const saveLead = async () => {
    if (!selected) return;

    if (
      crm.leadStatus === "COLD" &&
      !crm.coldReason.trim()
    ) {
      setError("Cold reason is required.");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const response = await updateContactCRM(
        selected._id,
        crm
      );

      const updated = response?.data;

      setContacts((current) =>
        current.map((item) =>
          item._id === updated?._id
            ? updated
            : item
        )
      );

      if (updated?.leadStatus === "COLD") {
        setSelected(null);
      } else {
        setSelected(updated);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleAssignment = async (
    contactId,
    assignedTo
  ) => {
    try {
      setSaving(true);
      setError("");

      const response = await assignContact(
        contactId,
        assignedTo || undefined
      );

      const updated = response?.data;

      setContacts((current) =>
        current.map((item) =>
          item._id === updated?._id
            ? updated
            : item
        )
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  const hotCount = contacts.filter(
    (item) => item.leadQuality === "HOT"
  ).length;

  const warmCount = contacts.filter(
    (item) => item.leadQuality === "WARM"
  ).length;

  const coldCount = contacts.filter(
    (item) => item.leadQuality === "COLD"
  ).length;

  return (
    <div className="space-y-6 pb-8">
      {/* =========================================
          PAGE HEADER
      ========================================== */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
        <div className="absolute -right-20 -top-28 h-64 w-64 rounded-full bg-blue-50/80 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-48 w-48 rounded-full bg-slate-100/70 blur-3xl" />

        <div className="relative flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-7">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              CRM Workspace
            </div>

            <h1 className="text-2xl font-bold tracking-[-0.03em] text-slate-950 sm:text-3xl">
              My Leads
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Manage website enquiries, lead quality, assignments
              and follow-ups from one workspace.
            </p>
          </div>

          <button
            type="button"
            onClick={loadContacts}
            disabled={loading}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              size={16}
              className={loading ? "animate-spin" : ""}
            />
            Refresh Leads
          </button>
        </div>

        {/* Quick Stats */}
        <div className="relative grid grid-cols-2 border-t border-slate-100 sm:grid-cols-4">
          <div className="border-b border-slate-100 px-5 py-4 sm:border-b-0 sm:border-r">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
              Total Leads
            </p>
            <p className="mt-1 text-xl font-bold tracking-tight text-slate-950">
              {contacts.length}
            </p>
          </div>

          <div className="border-b border-slate-100 px-5 py-4 sm:border-b-0 sm:border-r">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-red-400">
              Hot
            </p>
            <p className="mt-1 text-xl font-bold tracking-tight text-slate-950">
              {hotCount}
            </p>
          </div>

          <div className="border-r-0 px-5 py-4 sm:border-r sm:border-slate-100">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-500">
              Warm
            </p>
            <p className="mt-1 text-xl font-bold tracking-tight text-slate-950">
              {warmCount}
            </p>
          </div>

          <div className="border-t border-slate-100 px-5 py-4 sm:border-t-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-sky-500">
              Cold
            </p>
            <p className="mt-1 text-xl font-bold tracking-tight text-slate-950">
              {coldCount}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          ERROR
      ========================================== */}
      {error && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-600 shadow-sm">
          <AlertCircle
            size={18}
            className="mt-0.5 shrink-0"
          />

          <span className="font-medium">
            {error}
          </span>
        </div>
      )}

      {/* =========================================
          FILTER BAR
      ========================================== */}
      <section className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-[0_4px_20px_rgba(15,23,42,0.035)] sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={17}
              strokeWidth={1.8}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search by name, mobile, email or subject..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/5"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Quality */}
          <div className="relative lg:w-[190px]">
            <select
              value={quality}
              onChange={(e) =>
                setQuality(e.target.value)
              }
              className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 pr-9 text-sm font-semibold text-slate-700 outline-none transition-all focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/5"
            >
              <option value="ALL">
                All Lead Quality
              </option>

              <option value="HOT">
                Hot Leads
              </option>

              <option value="WARM">
                Warm Leads
              </option>

              <option value="COLD">
                Cold Leads
              </option>
            </select>

            <ChevronRight
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rotate-90 text-slate-400"
            />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <p className="text-xs font-medium text-slate-400">
            Showing{" "}
            <span className="font-bold text-slate-700">
              {filteredContacts.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-700">
              {contacts.length}
            </span>{" "}
            leads
          </p>

          {(search || quality !== "ALL") && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setQuality("ALL");
              }}
              className="text-xs font-semibold text-blue-600 hover:text-blue-700"
            >
              Clear filters
            </button>
          )}
        </div>
      </section>

      {/* =========================================
          LEADS TABLE
      ========================================== */}
      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_6px_25px_rgba(15,23,42,0.04)]">
        {loading ? (
          <div className="p-12">
            <div className="mx-auto max-w-md space-y-4">
              <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />
              <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
            </div>

            <p className="mt-5 text-center text-xs font-medium text-slate-400">
              Loading leads...
            </p>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <MessageSquare size={24} />
            </div>

            <p className="mt-5 text-base font-bold text-slate-800">
              No leads found
            </p>

            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-400">
              Try changing your search or quality filter to
              find the leads you're looking for.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px] text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80">
                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Lead
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Type
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Latest Activity
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Quality
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Follow-up
                  </th>

                  {isSuperAdmin && (
                    <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      Assigned To
                    </th>
                  )}

                  <th className="px-5 py-4 text-right text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredContacts.map((contact) => {
                  const comments =
                    contact.conversationHistory || [];

                  const lastComment =
                    comments[comments.length - 1];

                  const currentQuality =
                    contact.leadQuality || "WARM";

                  const QualityIcon =
                    qualityConfig[currentQuality]?.icon ||
                    CircleDot;

                  return (
                    <tr
                      key={contact._id}
                      className="group transition-colors duration-150 hover:bg-slate-50/70"
                    >
                      {/* Lead */}
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() =>
                            openLead(contact)
                          }
                          className="flex max-w-[270px] items-center gap-3 text-left"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold uppercase text-slate-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                            {contact.name
                              ?.charAt(0)
                              ?.toUpperCase() || "?"}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                              {contact.name}
                            </p>

                            <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-400">
                              <Phone size={11} />
                              <span className="truncate">
                                {contact.mobile}
                              </span>
                            </div>

                            <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400">
                              <Mail size={11} />
                              <span className="truncate">
                                {contact.email}
                              </span>
                            </div>
                          </div>
                        </button>
                      </td>

                      {/* Type */}
                      <td className="px-5 py-4">
                        {contact.leadType ? (
                          <span className="inline-flex max-w-[150px] truncate rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600">
                            {contact.leadType}
                          </span>
                        ) : (
                          <span className="text-sm text-slate-300">
                            —
                          </span>
                        )}
                      </td>

                      {/* Activity */}
                      <td className="max-w-[280px] px-5 py-4">
                        {lastComment ? (
                          <div>
                            <div className="flex items-center gap-2">
                              <MessageSquare
                                size={13}
                                className="shrink-0 text-slate-400"
                              />

                              <p className="truncate text-sm font-medium text-slate-700">
                                {lastComment.message}
                              </p>
                            </div>

                            <p className="mt-1 pl-5 text-[11px] text-slate-400">
                              {formatDateTime(
                                lastComment.createdAt
                              )}
                            </p>
                          </div>
                        ) : (
                          <span className="text-xs font-medium text-slate-400">
                            No activity yet
                          </span>
                        )}
                      </td>

                      {/* Quality */}
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] ${
                            qualityConfig[
                              currentQuality
                            ]?.className ||
                            "border-slate-200 bg-slate-50 text-slate-500"
                          }`}
                        >
                          <QualityIcon size={12} />
                          {currentQuality}
                        </span>
                      </td>

                      {/* Follow-up */}
                      <td className="px-5 py-4">
                        {contact.doNotFollowUp ? (
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                              <X size={13} />
                            </div>

                            <span className="text-xs font-semibold text-slate-400">
                              No follow-up
                            </span>
                          </div>
                        ) : contact.nextFollowUpDate ? (
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                              <CalendarDays size={14} />
                            </div>

                            <div>
                              <p className="text-xs font-bold text-slate-700">
                                {contact.nextFollowUpDate}
                              </p>

                              <p className="mt-0.5 text-[10px] font-medium text-slate-400">
                                {contact.nextFollowUpTime ||
                                  "Time not set"}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <span className="text-xs font-medium text-slate-400">
                            Not scheduled
                          </span>
                        )}
                      </td>

                      {/* Assignment */}
                      {isSuperAdmin && (
                        <td className="px-5 py-4">
                          <div className="relative">
                            <UserPlus
                              size={13}
                              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <select
                              value={
                                contact.assignedTo?._id || ""
                              }
                              onChange={(e) =>
                                handleAssignment(
                                  contact._id,
                                  e.target.value
                                )
                              }
                              disabled={saving}
                              className="h-9 w-[155px] appearance-none rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-xs font-semibold text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/5 disabled:opacity-60"
                            >
                              <option value="">
                                Unassigned
                              </option>

                              {team.map((member) => (
                                <option
                                  key={member._id}
                                  value={member._id}
                                >
                                  {member.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </td>
                      )}

                      {/* Action */}
                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            openLead(contact)
                          }
                          className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-bold text-slate-600 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Pencil size={13} />
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* =========================================
          EDIT LEAD MODAL
      ========================================== */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm sm:p-5">
          <div className="my-4 flex max-h-[calc(100vh-32px)] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:my-6">
            {/* Modal Header */}
            <div className="relative shrink-0 border-b border-slate-100 bg-white px-5 py-5 sm:px-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">
                    {selected.name
                      ?.charAt(0)
                      ?.toUpperCase() || "?"}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-lg font-bold tracking-[-0.02em] text-slate-950">
                        {selected.name}
                      </h2>

                      <span
                        className={`rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase ${
                          qualityConfig[
                            selected.leadQuality || "WARM"
                          ]?.className ||
                          "border-slate-200 bg-slate-50 text-slate-500"
                        }`}
                      >
                        {selected.leadQuality ||
                          "WARM"}
                      </span>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Phone size={11} />
                        {selected.mobile}
                      </span>

                      <span className="hidden text-slate-200 sm:inline">
                        •
                      </span>

                      <span className="flex min-w-0 items-center gap-1 truncate">
                        <Mail size={11} />
                        {selected.email}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelected(null)
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto bg-[#f8fafc] p-4 sm:p-6">
              <div className="space-y-4">
                {/* Customer Message */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <MessageSquare size={15} />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Customer Message
                      </p>

                      <p className="text-[10px] text-slate-400">
                        Original enquiry
                      </p>
                    </div>
                  </div>

                  <div className="px-4 py-4">
                    <p className="whitespace-pre-wrap text-sm leading-6 text-slate-600">
                      {selected.message || "—"}
                    </p>
                  </div>
                </div>

                {/* CRM Controls */}
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-800">
                      Lead Management
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Update the current CRM status and next action.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Lead Type */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        Lead Type
                      </label>

                      <input
                        value={crm.leadType}
                        onChange={(e) =>
                          updateField(
                            "leadType",
                            e.target.value
                          )
                        }
                        placeholder="e.g. Website / SEO / Renewal"
                        className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/5"
                      />
                    </div>

                    {/* Lead Quality */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        Lead Quality
                      </label>

                      <select
                        value={crm.leadQuality}
                        onChange={(e) =>
                          updateField(
                            "leadQuality",
                            e.target.value
                          )
                        }
                        className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/5"
                      >
                        <option value="HOT">
                          HOT
                        </option>

                        <option value="WARM">
                          WARM
                        </option>

                        <option value="COLD">
                          COLD
                        </option>
                      </select>
                    </div>

                    {/* Lead Result */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        Lead Result
                      </label>

                      <select
                        value={crm.leadStatus}
                        onChange={(e) =>
                          updateField(
                            "leadStatus",
                            e.target.value
                          )
                        }
                        className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/5"
                      >
                        <option value="ACTIVE">
                          ACTIVE
                        </option>

                        <option value="SUCCESSFUL">
                          SUCCESSFUL
                        </option>

                        <option value="COLD">
                          COLD
                        </option>
                      </select>
                    </div>

                    {/* Follow-up Date */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        Follow-up Date
                      </label>

                      <input
                        type="date"
                        disabled={crm.doNotFollowUp}
                        value={crm.nextFollowUpDate}
                        onChange={(e) =>
                          updateField(
                            "nextFollowUpDate",
                            e.target.value
                          )
                        }
                        className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/5 disabled:cursor-not-allowed disabled:bg-slate-100"
                      />
                    </div>

                    {/* Follow-up Time */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        Follow-up Time
                      </label>

                      <input
                        type="time"
                        disabled={crm.doNotFollowUp}
                        value={crm.nextFollowUpTime}
                        onChange={(e) =>
                          updateField(
                            "nextFollowUpTime",
                            e.target.value
                          )
                        }
                        className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/5 disabled:cursor-not-allowed disabled:bg-slate-100"
                      />
                    </div>
                  </div>

                  {/* No Follow-up */}
                  <label className="mt-4 flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 transition hover:border-slate-300 hover:bg-slate-100/70">
                    <input
                      type="checkbox"
                      checked={crm.doNotFollowUp}
                      onChange={(e) =>
                        updateField(
                          "doNotFollowUp",
                          e.target.checked
                        )
                      }
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />

                    <div>
                      <p className="text-xs font-bold text-slate-700">
                        Don't add follow-up
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-400">
                        Disable the next follow-up date and time.
                      </p>
                    </div>
                  </label>

                  {/* Cold Reason */}
                  {crm.leadStatus === "COLD" && (
                    <div className="mt-4 rounded-xl border border-red-100 bg-red-50/50 p-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-red-500">
                        Cold Reason *
                      </label>

                      <textarea
                        rows={3}
                        value={crm.coldReason}
                        onChange={(e) =>
                          updateField(
                            "coldReason",
                            e.target.value
                          )
                        }
                        placeholder="Why is this lead cold?"
                        className="mt-2 w-full resize-none rounded-xl border border-red-200 bg-white px-3.5 py-3 text-sm text-slate-700 outline-none transition focus:border-red-400 focus:ring-4 focus:ring-red-500/5"
                      />
                    </div>
                  )}

                  {/* Comment */}
                  <div className="mt-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                      New Comment
                    </label>

                    <textarea
                      rows={4}
                      value={crm.comment}
                      onChange={(e) =>
                        updateField(
                          "comment",
                          e.target.value
                        )
                      }
                      placeholder="Add customer conversation, call note or follow-up update..."
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/5"
                    />
                  </div>

                  {/* History */}
                  <button
                    type="button"
                    onClick={() =>
                      setHistoryOpen(true)
                    }
                    className="mt-4 inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-xs font-bold text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Clock3 size={15} />
                    View Complete History
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex shrink-0 flex-col-reverse gap-2 border-t border-slate-100 bg-white px-4 py-4 sm:flex-row sm:justify-end sm:px-6">
              <button
                type="button"
                onClick={() =>
                  setSelected(null)
                }
                className="h-11 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={saveLead}
                disabled={saving}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving && (
                  <RefreshCw
                    size={15}
                    className="animate-spin"
                  />
                )}

                {saving
                  ? "Updating..."
                  : "Update Lead"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          HISTORY MODAL
      ========================================== */}
      {historyOpen && selected && (
        <HistoryModal
          title={selected.name}
          contact={selected}
          onClose={() =>
            setHistoryOpen(false)
          }
        />
      )}
    </div>
  );
};

const HistoryModal = ({
  title,
  contact,
  onClose,
}) => {
  const history = [
    ...(contact.conversationHistory || []),
    ...(contact.statusHistory || []),
    ...(contact.assignmentHistory || []),
  ].sort(
    (a, b) =>
      new Date(b.createdAt) -
      new Date(a.createdAt)
  );

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-5">
      <div className="flex max-h-[calc(100vh-30px)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Clock3 size={17} />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-600">
                Complete History
              </p>

              <h3 className="mt-1 truncate text-base font-bold text-slate-950">
                {title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={18} />
          </button>
        </div>

        {/* Timeline */}
        <div className="flex-1 overflow-y-auto bg-[#f8fafc] p-5 sm:p-6">
          {history.length === 0 ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <Clock3 size={20} />
              </div>

              <p className="mt-4 text-sm font-bold text-slate-700">
                No history yet
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Lead activity will appear here.
              </p>
            </div>
          ) : (
            <div className="relative ml-2 space-y-6 border-l border-slate-200 pl-6">
              {history.map((item) => (
                <div
                  key={
                    item._id ||
                    `${item.createdAt}-${item.message}`
                  }
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-white bg-blue-500 shadow-sm" />

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[10px] font-semibold text-slate-400">
                        {formatDateTime(
                          item.createdAt
                        )}
                      </p>

                      <span className="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-slate-500">
                        {item.action?.replaceAll(
                          "_",
                          " "
                        )}
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-bold capitalize text-slate-800">
                      {item.action?.replaceAll(
                        "_",
                        " "
                      )}
                    </p>

                    <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                      {item.message}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 border-t border-slate-100 pt-3 text-[10px] font-medium text-slate-400">
                      <UserRound size={11} />
                      By {item.adminName || "System"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminContacts;
