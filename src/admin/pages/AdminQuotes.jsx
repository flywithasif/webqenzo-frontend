import { useEffect, useMemo, useState } from "react";
import {
  RefreshCw,
  Search,
  X,
  Pencil,
  Clock3,
  FileText,
  UserRound,
  Building2,
  Phone,
  Mail,
  CalendarClock,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

import {
  getQuotes,
  getTeamMembers,
  updateQuoteCRM,
  assignQuote,
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
    label: "HOT",
    dot: "bg-red-500",
    text: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  WARM: {
    label: "WARM",
    dot: "bg-amber-500",
    text: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  COLD: {
    label: "COLD",
    dot: "bg-sky-500",
    text: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
};

const AdminQuotes = () => {
  const [quotes, setQuotes] = useState([]);
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

  const loadQuotes = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getQuotes();

      setQuotes(response?.data || []);

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
    loadQuotes();
  }, []);

  const filteredQuotes = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return quotes.filter((quote) => {
      const matchesSearch =
        !searchValue ||
        quote.fullName
          ?.toLowerCase()
          .includes(searchValue) ||
        quote.phone
          ?.toLowerCase()
          .includes(searchValue) ||
        quote.email
          ?.toLowerCase()
          .includes(searchValue) ||
        quote.company
          ?.toLowerCase()
          .includes(searchValue) ||
        quote.service
          ?.toLowerCase()
          .includes(searchValue);

      const matchesQuality =
        quality === "ALL" ||
        quote.leadQuality === quality;

      return matchesSearch && matchesQuality;
    });
  }, [quotes, search, quality]);

  const openQuote = (quote) => {
    setSelected(quote);

    setCrm({
      leadType: quote.leadType || "",
      leadQuality: quote.leadQuality || "WARM",
      leadStatus: quote.leadStatus || "ACTIVE",
      nextFollowUpDate:
        quote.nextFollowUpDate || "",
      nextFollowUpTime:
        quote.nextFollowUpTime || "",
      doNotFollowUp:
        Boolean(quote.doNotFollowUp),
      coldReason: quote.coldReason || "",
      comment: "",
    });
  };

  const updateField = (field, value) => {
    setCrm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const saveQuote = async () => {
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

      const response = await updateQuoteCRM(
        selected._id,
        crm
      );

      const updated = response?.data;

      setQuotes((current) =>
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
    quoteId,
    assignedTo
  ) => {
    try {
      setSaving(true);
      setError("");

      const response = await assignQuote(
        quoteId,
        assignedTo || undefined
      );

      const updated = response?.data;

      setQuotes((current) =>
        current.map((item) =>
          item._id === updated?._id
            ? updated
            : item
        )
      );

      if (selected?._id === updated?._id) {
        setSelected(updated);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 pb-10">
      {/* =========================================================
          PAGE HEADER
      ========================================================== */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
        <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-blue-50/80 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-56 w-56 rounded-full bg-slate-100/70 blur-3xl" />

        <div className="relative flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-7">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              CRM · Quote Pipeline
            </div>

            <h1 className="text-2xl font-bold tracking-[-0.035em] text-slate-950 sm:text-3xl">
              My Quotes
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Manage website quote requests, lead quality,
              assignments and customer follow-ups from one
              workspace.
            </p>
          </div>

          <button
            type="button"
            onClick={loadQuotes}
            disabled={loading}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              size={16}
              strokeWidth={1.9}
              className={loading ? "animate-spin" : ""}
            />
            Refresh Quotes
          </button>
        </div>
      </section>

      {/* =========================================================
          ERROR
      ========================================================== */}
      {error && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-600 shadow-sm">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />

          <span className="font-medium">
            {error}
          </span>

          <button
            type="button"
            onClick={() => setError("")}
            className="ml-auto rounded-lg p-1 text-red-400 transition hover:bg-red-100 hover:text-red-600"
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* =========================================================
          FILTER / SEARCH BAR
      ========================================================== */}
      <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_6px_25px_rgba(15,23,42,0.04)]">
        <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Pipeline Controls
            </p>

            <h2 className="text-sm font-bold text-slate-900">
              Find and filter quotes
            </h2>
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-[1fr_190px]">
          <div className="relative">
            <Search
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search name, mobile, email, company or service"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
            />
          </div>

          <select
            value={quality}
            onChange={(e) =>
              setQuality(e.target.value)
            }
            className="h-11 rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm font-medium text-slate-700 outline-none transition-all focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
          >
            <option value="ALL">
              All Quality
            </option>

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

        <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 px-5 py-3 sm:px-6">
          <span className="text-xs font-medium text-slate-400">
            Showing
          </span>

          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
            {filteredQuotes.length}
          </span>

          <span className="text-xs text-slate-400">
            of {quotes.length} quotes
          </span>

          {quality !== "ALL" && (
            <span className="ml-auto rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600">
              {quality} filter
            </span>
          )}
        </div>
      </section>

      {/* =========================================================
          QUOTES TABLE
      ========================================================== */}
      <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_6px_25px_rgba(15,23,42,0.04)]">
        {loading ? (
          <div className="p-12">
            <div className="mx-auto max-w-sm text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <RefreshCw
                  size={21}
                  className="animate-spin"
                />
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-800">
                Loading quotes
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Fetching your latest CRM enquiries...
              </p>
            </div>
          </div>
        ) : filteredQuotes.length === 0 ? (
          <div className="p-14 text-center sm:p-20">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <FileText size={25} />
            </div>

            <p className="mt-5 font-bold text-slate-900">
              No quotes found
            </p>

            <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-slate-400">
              Try changing your search term or quality
              filter to find another quote.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1400px] text-left">
              <thead className="border-b border-slate-200 bg-slate-50/80">
                <tr>
                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Customer
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Service
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Budget
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Lead Type
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Latest Comment
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Quality
                  </th>

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Follow-up
                  </th>

                  {isSuperAdmin && (
                    <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                      Assigned To
                    </th>
                  )}

                  <th className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredQuotes.map((quote) => {
                  const comments =
                    quote.conversationHistory || [];

                  const lastComment =
                    comments[
                      comments.length - 1
                    ];

                  const currentQuality =
                    qualityConfig[
                      quote.leadQuality
                    ] || {
                      label:
                        quote.leadQuality || "WARM",
                      dot: "bg-slate-400",
                      text: "text-slate-600",
                      bg: "bg-slate-50",
                      border: "border-slate-200",
                    };

                  return (
                    <tr
                      key={quote._id}
                      className="group transition-colors duration-150 hover:bg-slate-50/70"
                    >
                      {/* CUSTOMER */}
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() =>
                            openQuote(quote)
                          }
                          className="text-left"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                              <UserRound size={17} />
                            </div>

                            <div className="min-w-0">
                              <p className="max-w-[190px] truncate text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                                {quote.fullName}
                              </p>

                              <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                                <Phone size={11} />
                                {quote.phone}
                              </p>

                              <p className="mt-0.5 flex max-w-[190px] items-center gap-1 truncate text-xs text-slate-400">
                                <Mail size={11} />
                                {quote.email}
                              </p>

                              {quote.company && (
                                <p className="mt-1.5 flex max-w-[190px] items-center gap-1 truncate text-[11px] font-semibold text-slate-500">
                                  <Building2 size={11} />
                                  {quote.company}
                                </p>
                              )}
                            </div>
                          </div>
                        </button>
                      </td>

                      {/* SERVICE */}
                      <td className="px-5 py-4">
                        <span className="inline-flex max-w-[150px] rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700">
                          {quote.service || "—"}
                        </span>
                      </td>

                      {/* BUDGET */}
                      <td className="px-5 py-4">
                        <p className="text-sm font-bold text-slate-800">
                          {quote.budget || "—"}
                        </p>
                      </td>

                      {/* LEAD TYPE */}
                      <td className="px-5 py-4">
                        <p className="max-w-[130px] text-sm font-medium text-slate-600">
                          {quote.leadType || "—"}
                        </p>
                      </td>

                      {/* LATEST COMMENT */}
                      <td className="max-w-[280px] px-5 py-4">
                        {lastComment ? (
                          <div className="max-w-[260px]">
                            <div className="flex items-start gap-2">
                              <MessageSquare
                                size={14}
                                className="mt-0.5 shrink-0 text-slate-400"
                              />

                              <p className="truncate text-sm font-medium text-slate-700">
                                {lastComment.message}
                              </p>
                            </div>

                            <p className="mt-1.5 pl-5 text-[11px] text-slate-400">
                              {formatDateTime(
                                lastComment.createdAt
                              )}
                            </p>
                          </div>
                        ) : (
                          <span className="text-xs font-medium text-slate-400">
                            No comments yet
                          </span>
                        )}
                      </td>

                      {/* QUALITY */}
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 text-[10px] font-bold tracking-wide ${currentQuality.bg} ${currentQuality.border} ${currentQuality.text}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${currentQuality.dot}`}
                          />
                          {currentQuality.label}
                        </span>
                      </td>

                      {/* FOLLOW-UP */}
                      <td className="px-5 py-4">
                        {quote.doNotFollowUp ? (
                          <span className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-500">
                            Don't follow-up
                          </span>
                        ) : quote.nextFollowUpDate ? (
                          <div>
                            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                              <CalendarClock
                                size={14}
                                className="text-blue-500"
                              />
                              {quote.nextFollowUpDate}
                            </div>

                            <p className="mt-1 pl-5 text-[11px] text-slate-400">
                              {quote.nextFollowUpTime ||
                                "Time not set"}
                            </p>
                          </div>
                        ) : (
                          <span className="text-xs font-medium text-slate-400">
                            Not scheduled
                          </span>
                        )}
                      </td>

                      {/* ASSIGNED TO */}
                      {isSuperAdmin && (
                        <td className="px-5 py-4">
                          <select
                            value={
                              quote.assignedTo?._id ||
                              ""
                            }
                            onChange={(e) =>
                              handleAssignment(
                                quote._id,
                                e.target.value
                              )
                            }
                            disabled={saving}
                            className="h-9 min-w-[145px] rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
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
                        </td>
                      )}

                      {/* ACTION */}
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() =>
                            openQuote(quote)
                          }
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-[0.98]"
                        >
                          <Pencil size={14} />
                          Edit
                          <ChevronRight size={13} />
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

      {/* =========================================================
          EDIT MODAL
      ========================================================== */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm sm:p-5">
          <div className="my-5 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.28)]">
            {/* MODAL HEADER */}
            <div className="relative overflow-hidden border-b border-slate-100 bg-white px-5 py-5 sm:px-7">
              <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-blue-50 blur-3xl" />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <UserRound size={19} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="truncate text-lg font-bold text-slate-950 sm:text-xl">
                        {selected.fullName}
                      </h2>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${
                          (
                            qualityConfig[
                              crm.leadQuality
                            ] || qualityConfig.WARM
                          ).bg
                        } ${
                          (
                            qualityConfig[
                              crm.leadQuality
                            ] || qualityConfig.WARM
                          ).border
                        } ${
                          (
                            qualityConfig[
                              crm.leadQuality
                            ] || qualityConfig.WARM
                          ).text
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            (
                              qualityConfig[
                                crm.leadQuality
                              ] || qualityConfig.WARM
                            ).dot
                          }`}
                        />
                        {crm.leadQuality}
                      </span>
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Phone size={11} />
                        {selected.phone}
                      </span>

                      <span className="hidden text-slate-200 sm:inline">
                        •
                      </span>

                      <span className="flex items-center gap-1">
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
                  <X size={19} />
                </button>
              </div>
            </div>

            {/* MODAL BODY */}
            <div className="max-h-[72vh] space-y-6 overflow-y-auto bg-slate-50/60 p-4 sm:p-6">
              {/* ORIGINAL QUOTE DATA */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Quote Information
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <Info
                    label="Company"
                    value={selected.company}
                  />

                  <Info
                    label="Service"
                    value={selected.service}
                  />

                  <Info
                    label="Budget"
                    value={selected.budget}
                  />

                  <Info
                    label="Timeline"
                    value={selected.timeline}
                  />

                  <Info
                    label="Existing Website"
                    value={
                      selected.existingWebsite
                    }
                  />

                  <Info
                    label="Pipeline Status"
                    value={selected.status}
                  />
                </div>
              </div>

              {/* PROJECT DESCRIPTION */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-4 py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    Project Description
                  </p>
                </div>

                <div className="p-4">
                  <p className="whitespace-pre-wrap text-sm leading-7 text-slate-600">
                    {selected.projectDescription ||
                      "—"}
                  </p>
                </div>
              </div>

              {/* CRM */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <FileText size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        CRM Management
                      </p>

                      <p className="text-[11px] text-slate-400">
                        Update lead status and follow-up
                        information.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-4 sm:grid-cols-2">
                  {/* LEAD TYPE */}
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
                      placeholder="e.g. Website / SEO / Ecommerce"
                      className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* LEAD QUALITY */}
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
                      className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
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

                  {/* LEAD RESULT */}
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
                      className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
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

                  {/* FOLLOW-UP DATE */}
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
                      className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 disabled:bg-slate-100 disabled:text-slate-400"
                    />
                  </div>

                  {/* FOLLOW-UP TIME */}
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
                      className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 disabled:bg-slate-100 disabled:text-slate-400"
                    />
                  </div>
                </div>

                {/* DO NOT FOLLOW UP */}
                <div className="px-4 pb-4">
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-slate-300 hover:bg-slate-50">
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
                      <span className="block text-sm font-semibold text-slate-700">
                        Don't add follow-up
                      </span>

                      <span className="mt-0.5 block text-[11px] text-slate-400">
                        Disable scheduled follow-up for
                        this lead.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* COLD REASON */}
              {crm.leadStatus === "COLD" && (
                <div className="rounded-2xl border border-red-100 bg-red-50/50 p-4">
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
                    placeholder="Why is this quote cold?"
                    className="mt-2 w-full rounded-xl border border-red-200 bg-white px-3.5 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-4 focus:ring-red-50"
                  />
                </div>
              )}

              {/* NEW COMMENT */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare
                      size={15}
                      className="text-blue-500"
                    />

                    <label className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                      New Comment
                    </label>
                  </div>
                </div>

                <div className="p-4">
                  <textarea
                    rows={4}
                    value={crm.comment}
                    onChange={(e) =>
                      updateField(
                        "comment",
                        e.target.value
                      )
                    }
                    placeholder="Customer conversation / follow-up note..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>

              {/* HISTORY BUTTON */}
              <button
                type="button"
                onClick={() =>
                  setHistoryOpen(true)
                }
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 active:scale-[0.98]"
              >
                <Clock3 size={16} />
                View Complete History
                <ChevronRight size={14} />
              </button>
            </div>

            {/* MODAL FOOTER */}
            <div className="flex flex-col-reverse gap-2 border-t border-slate-100 bg-white px-4 py-4 sm:flex-row sm:justify-end sm:gap-3 sm:px-6">
              <button
                type="button"
                onClick={() =>
                  setSelected(null)
                }
                className="h-11 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={saveQuote}
                disabled={saving}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {saving && (
                  <RefreshCw
                    size={15}
                    className="animate-spin"
                  />
                )}

                {saving
                  ? "Updating..."
                  : "Update Quote"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          HISTORY
      ========================================================== */}
      {historyOpen && selected && (
        <HistoryModal
          title={selected.fullName}
          quote={selected}
          onClose={() =>
            setHistoryOpen(false)
          }
        />
      )}
    </div>
  );
};

/* ===============================================================
   HISTORY MODAL
=============================================================== */

const HistoryModal = ({
  title,
  quote,
  onClose,
}) => {
  const history = [
    ...(quote.conversationHistory || []),
    ...(quote.statusHistory || []),
    ...(quote.assignmentHistory || []),
  ].sort(
    (a, b) =>
      new Date(b.createdAt) -
      new Date(a.createdAt)
  );

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-5">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.3)]">
        {/* HEADER */}
        <div className="relative overflow-hidden border-b border-slate-100 px-5 py-5 sm:px-6">
          <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-blue-50 blur-3xl" />

          <div className="relative flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Clock3 size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  Complete History
                </p>

                <h3 className="mt-1 truncate text-lg font-bold text-slate-950">
                  {title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={19} />
            </button>
          </div>
        </div>

        {/* HISTORY */}
        <div className="max-h-[65vh] overflow-y-auto bg-slate-50/50 p-5 sm:p-6">
          {history.length === 0 ? (
            <div className="py-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <Clock3 size={20} />
              </div>

              <p className="mt-4 text-sm font-semibold text-slate-700">
                No history yet.
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Activity will appear here as the quote
                is updated.
              </p>
            </div>
          ) : (
            <div className="relative space-y-5">
              <div className="absolute bottom-4 left-[7px] top-4 w-px bg-slate-200" />

              {history.map((item) => (
                <div
                  key={
                    item._id ||
                    `${item.createdAt}-${item.message}`
                  }
                  className="relative pl-7"
                >
                  <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-500" />

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-bold capitalize text-slate-800">
                          {item.action?.replaceAll(
                            "_",
                            " "
                          )}
                        </p>

                        <p className="mt-0.5 text-[11px] text-slate-400">
                          By {item.adminName || "System"}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-lg bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-400">
                        {formatDateTime(
                          item.createdAt
                        )}
                      </span>
                    </div>

                    <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                      {item.message}
                    </p>
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

/* ===============================================================
   INFO ITEM
=============================================================== */

const Info = ({ label, value }) => (
  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
    <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-slate-400">
      {label}
    </p>

    <p className="mt-1.5 break-words text-sm font-semibold text-slate-800">
      {value || "—"}
    </p>
  </div>
);

export default AdminQuotes;
