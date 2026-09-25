import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Search,
  RefreshCw,
  X,
  Phone,
  Mail,
  CalendarClock,
  UserRoundCheck,
  MessageSquare,
  Save,
} from "lucide-react";

import {
  getMyLeads,
  updateLeadCRM,
  addLeadComment,
} from "../utils/adminApi";

const qualityClass = {
  HOT: "bg-red-50 text-red-600 border-red-100",
  WARM: "bg-amber-50 text-amber-600 border-amber-100",
  COLD: "bg-sky-50 text-sky-600 border-sky-100",
};

const statusClass = {
  ACTIVE:
    "bg-blue-50 text-blue-600 border-blue-100",
  SUCCESSFUL:
    "bg-emerald-50 text-emerald-600 border-emerald-100",
  COLD:
    "bg-slate-100 text-slate-500 border-slate-200",
};

const formatDate = (value) => {
  if (!value) return "—";

  try {
    return new Date(
      value
    ).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "—";
  }
};

const AdminMyLeads = () => {
  const [leads, setLeads] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [quality, setQuality] =
    useState("ALL");

  const [status, setStatus] =
    useState("ALL");

  const [selected, setSelected] =
    useState(null);

  const [saving, setSaving] =
    useState(false);

  const [commentSaving, setCommentSaving] =
    useState(false);

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

  const loadLeads = async (
    isRefresh = false
  ) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const response =
        await getMyLeads();

      setLeads(
        Array.isArray(response?.data)
          ? response.data
          : []
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const filteredLeads = useMemo(() => {
    const searchValue =
      search.trim().toLowerCase();

    return leads.filter((lead) => {
      const matchesSearch =
        !searchValue ||
        lead.name
          ?.toLowerCase()
          .includes(searchValue) ||
        lead.mobile
          ?.toLowerCase()
          .includes(searchValue) ||
        lead.email
          ?.toLowerCase()
          .includes(searchValue) ||
        lead.leadType
          ?.toLowerCase()
          .includes(searchValue);

      const matchesQuality =
        quality === "ALL" ||
        lead.leadQuality === quality;

      const matchesStatus =
        status === "ALL" ||
        lead.leadStatus === status;

      return (
        matchesSearch &&
        matchesQuality &&
        matchesStatus
      );
    });
  }, [
    leads,
    search,
    quality,
    status,
  ]);

  const openLead = (lead) => {
    setSelected(lead);

    setCrm({
      leadType:
        lead.leadType || "",
      leadQuality:
        lead.leadQuality || "WARM",
      leadStatus:
        lead.leadStatus || "ACTIVE",
      nextFollowUpDate:
        lead.nextFollowUpDate || "",
      nextFollowUpTime:
        lead.nextFollowUpTime || "",
      doNotFollowUp:
        Boolean(
          lead.doNotFollowUp
        ),
      coldReason:
        lead.coldReason || "",
      comment: "",
    });
  };

  const closeLead = () => {
    if (saving || commentSaving) return;

    setSelected(null);
  };

  const handleCRMChange = (
    field,
    value
  ) => {
    setCrm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveCRM = async () => {
    if (!selected?._id) return;

    try {
      setSaving(true);
      setError("");

      const response =
        await updateLeadCRM(
          selected._id,
          {
            leadType:
              crm.leadType,
            leadQuality:
              crm.leadQuality,
            leadStatus:
              crm.leadStatus,
            nextFollowUpDate:
              crm.nextFollowUpDate ||
              null,
            nextFollowUpTime:
              crm.nextFollowUpTime ||
              null,
            doNotFollowUp:
              crm.doNotFollowUp,
            coldReason:
              crm.coldReason,
          }
        );

      const updated =
        response?.data;

      setLeads((prev) =>
        prev.map((lead) =>
          lead._id === selected._id
            ? {
                ...lead,
                ...(updated || {}),
                leadType:
                  crm.leadType,
                leadQuality:
                  crm.leadQuality,
                leadStatus:
                  crm.leadStatus,
                nextFollowUpDate:
                  crm.nextFollowUpDate,
                nextFollowUpTime:
                  crm.nextFollowUpTime,
                doNotFollowUp:
                  crm.doNotFollowUp,
                coldReason:
                  crm.coldReason,
              }
            : lead
        )
      );

      setSelected((prev) =>
        prev
          ? {
              ...prev,
              ...(updated || {}),
              leadType:
                crm.leadType,
              leadQuality:
                crm.leadQuality,
              leadStatus:
                crm.leadStatus,
              nextFollowUpDate:
                crm.nextFollowUpDate,
              nextFollowUpTime:
                crm.nextFollowUpTime,
              doNotFollowUp:
                crm.doNotFollowUp,
              coldReason:
                crm.coldReason,
            }
          : prev
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const saveComment = async () => {
    if (
      !selected?._id ||
      !crm.comment.trim()
    ) {
      return;
    }

    try {
      setCommentSaving(true);
      setError("");

      await addLeadComment(
        selected._id,
        crm.comment.trim()
      );

      setCrm((prev) => ({
        ...prev,
        comment: "",
      }));

      await loadLeads(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setCommentSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* =========================================
          HEADER
      ========================================= */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <UserRoundCheck size={18} />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Assigned Leads
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
              My Leads
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Only leads assigned to your account
              are shown here.
            </p>
          </div>

          <button
            type="button"
            onClick={() => loadLeads(true)}
            disabled={refreshing}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-50"
          >
            <RefreshCw
              size={16}
              className={
                refreshing
                  ? "animate-spin"
                  : ""
              }
            />

            Refresh
          </button>
        </div>
      </div>

      {/* =========================================
          ERROR
      ========================================= */}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      {/* =========================================
          FILTER BAR
      ========================================= */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 lg:grid-cols-[1fr_180px_180px]">
          <div className="relative">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search name, mobile, email..."
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <select
            value={quality}
            onChange={(e) =>
              setQuality(e.target.value)
            }
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none focus:border-blue-500"
          >
            <option value="ALL">
              All Quality
            </option>

            <option value="HOT">
              Hot
            </option>

            <option value="WARM">
              Warm
            </option>

            <option value="COLD">
              Cold
            </option>
          </select>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-600 outline-none focus:border-blue-500"
          >
            <option value="ALL">
              All Status
            </option>

            <option value="ACTIVE">
              Active
            </option>

            <option value="SUCCESSFUL">
              Successful
            </option>

            <option value="COLD">
              Cold
            </option>
          </select>
        </div>
      </div>

      {/* =========================================
          LEADS
      ========================================= */}

      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 md:px-6">
          <div>
            <p className="text-sm font-bold text-slate-900">
              Assigned Leads
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {filteredLeads.length} lead
              {filteredLeads.length === 1
                ? ""
                : "s"} found
            </p>
          </div>
        </div>

        {loading ? (
          <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map(
              (item) => (
                <div
                  key={item}
                  className="h-44 animate-pulse rounded-2xl bg-slate-100"
                />
              )
            )}
          </div>
        ) : filteredLeads.length ===
          0 ? (
          <div className="px-6 py-20 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <UserRoundCheck
                size={24}
              />
            </div>

            <h3 className="mt-5 text-base font-bold text-slate-800">
              No assigned leads
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
              When the Super Admin assigns
              leads to you, they will appear
              here.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredLeads.map(
              (lead) => (
                <button
                  type="button"
                  key={lead._id}
                  onClick={() =>
                    openLead(lead)
                  }
                  className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold text-slate-900">
                        {lead.name ||
                          "Unnamed Lead"}
                      </h3>

                      <p className="mt-1 truncate text-xs text-slate-400">
                        {lead.leadType ||
                          "Lead"}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold ${
                        qualityClass[
                          lead.leadQuality
                        ] ||
                        qualityClass.WARM
                      }`}
                    >
                      {lead.leadQuality ||
                        "WARM"}
                    </span>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    {lead.mobile && (
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Phone
                          size={14}
                        />
                        {lead.mobile}
                      </div>
                    )}

                    {lead.email && (
                      <div className="flex items-center gap-2 truncate text-xs text-slate-500">
                        <Mail
                          size={14}
                        />
                        <span className="truncate">
                          {lead.email}
                        </span>
                      </div>
                    )}

                    {lead.nextFollowUpDate && (
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <CalendarClock
                          size={14}
                        />
                        {formatDate(
                          lead.nextFollowUpDate
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${
                        statusClass[
                          lead.leadStatus
                        ] ||
                        statusClass.ACTIVE
                      }`}
                    >
                      {lead.leadStatus ||
                        "ACTIVE"}
                    </span>

                    <span className="text-xs font-semibold text-blue-600 opacity-0 transition group-hover:opacity-100">
                      Open →
                    </span>
                  </div>
                </button>
              )
            )}
          </div>
        )}
      </div>

      {/* =========================================
          DETAIL DRAWER
      ========================================= */}

      {selected && (
        <div className="fixed inset-0 z-[100]">
          <button
            type="button"
            onClick={closeLead}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
            aria-label="Close lead"
          />

          <aside className="absolute right-0 top-0 flex h-full w-full max-w-[560px] flex-col bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                  Lead Details
                </p>

                <h2 className="mt-1 truncate text-xl font-bold text-slate-950">
                  {selected.name ||
                    "Unnamed Lead"}
                </h2>
              </div>

              <button
                type="button"
                onClick={closeLead}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Contact info */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Mobile
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {selected.mobile ||
                        "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                      {selected.email ||
                        "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Source
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {selected.source ||
                        "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Created
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-800">
                      {formatDate(
                        selected.createdAt
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* CRM */}
              <div className="mt-6">
                <div className="mb-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    CRM Management
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Update the lead after every
                    conversation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-600">
                      Lead Type
                    </label>

                    <input
                      value={crm.leadType}
                      onChange={(e) =>
                        handleCRMChange(
                          "leadType",
                          e.target.value
                        )
                      }
                      className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-600">
                        Quality
                      </label>

                      <select
                        value={
                          crm.leadQuality
                        }
                        onChange={(e) =>
                          handleCRMChange(
                            "leadQuality",
                            e.target.value
                          )
                        }
                        className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
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

                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-600">
                        Status
                      </label>

                      <select
                        value={
                          crm.leadStatus
                        }
                        onChange={(e) =>
                          handleCRMChange(
                            "leadStatus",
                            e.target.value
                          )
                        }
                        className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
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
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-600">
                        Follow-up Date
                      </label>

                      <input
                        type="date"
                        value={
                          crm.nextFollowUpDate
                        }
                        onChange={(e) =>
                          handleCRMChange(
                            "nextFollowUpDate",
                            e.target.value
                          )
                        }
                        className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-600">
                        Follow-up Time
                      </label>

                      <input
                        type="time"
                        value={
                          crm.nextFollowUpTime
                        }
                        onChange={(e) =>
                          handleCRMChange(
                            "nextFollowUpTime",
                            e.target.value
                          )
                        }
                        className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-3">
                    <input
                      type="checkbox"
                      checked={
                        crm.doNotFollowUp
                      }
                      onChange={(e) =>
                        handleCRMChange(
                          "doNotFollowUp",
                          e.target.checked
                        )
                      }
                      className="h-4 w-4 rounded border-slate-300 text-blue-600"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      Do not follow up
                    </span>
                  </label>

                  {crm.leadStatus ===
                    "COLD" && (
                    <div>
                      <label className="mb-2 block text-xs font-bold text-slate-600">
                        Cold Reason
                      </label>

                      <textarea
                        value={
                          crm.coldReason
                        }
                        onChange={(e) =>
                          handleCRMChange(
                            "coldReason",
                            e.target.value
                          )
                        }
                        rows={3}
                        className="w-full resize-none rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-blue-500"
                      />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={saveCRM}
                    disabled={saving}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:opacity-50"
                  >
                    <Save size={16} />

                    {saving
                      ? "Saving..."
                      : "Save CRM Changes"}
                  </button>
                </div>
              </div>

              {/* Comment */}
              <div className="mt-7 border-t border-slate-100 pt-6">
                <div className="mb-4">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <MessageSquare
                      size={16}
                    />
                    Add Comment
                  </h3>
                </div>

                <textarea
                  value={crm.comment}
                  onChange={(e) =>
                    handleCRMChange(
                      "comment",
                      e.target.value
                    )
                  }
                  rows={4}
                  placeholder="Write follow-up notes..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />

                <button
                  type="button"
                  onClick={saveComment}
                  disabled={
                    commentSaving ||
                    !crm.comment.trim()
                  }
                  className="mt-3 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                >
                  <MessageSquare
                    size={15}
                  />

                  {commentSaving
                    ? "Adding..."
                    : "Add Comment"}
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default AdminMyLeads;
