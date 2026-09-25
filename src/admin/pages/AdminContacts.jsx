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
  ChevronDown,
  Flame,
  CircleDot,
  Snowflake,
  CheckCircle2,
  AlertCircle,
  UserPlus,
  ArrowUpRight,
  Building2,
  Tag,
  History,
  PhoneCall,
  Send,
} from "lucide-react";

import {
  getContacts,
  getTeamMembers,
  updateContactCRM,
  assignContact,
} from "../utils/adminApi";

/* =========================================================
   HELPERS
========================================================= */

const formatDateTime = (value) => {
  if (!value) return "—";

  try {
    return new Date(value).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return "—";
  }
};

const formatShortDate = (value) => {
  if (!value) return "Not scheduled";

  try {
    return new Date(value).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return value;
  }
};

const toInputDate = (value) => {
  if (!value) return "";

  if (typeof value === "string") {
    const isoMatch = value.match(/^(\d{4}-\d{2}-\d{2})/);
    if (isoMatch) return isoMatch[1];

    const slashMatch = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (slashMatch) {
      const [, month, day, year] = slashMatch;
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    }
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 10);
};

const getTodayInputDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const parseTimeValue = (value) => {
  if (!value) return { hour: "", minute: "", period: "AM" };

  const raw = String(value).trim().toUpperCase();
  const amPm = raw.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/);

  if (amPm) {
    return {
      hour: String(Number(amPm[1])),
      minute: amPm[2] || "00",
      period: amPm[3],
    };
  }

  const twentyFour = raw.match(/^(\d{1,2}):(\d{2})$/);
  if (twentyFour) {
    const hour24 = Number(twentyFour[1]);
    return {
      hour: String(hour24 % 12 || 12),
      minute: twentyFour[2],
      period: hour24 >= 12 ? "PM" : "AM",
    };
  }

  return { hour: "", minute: "", period: "AM" };
};

const toApiTime = (hour, minute, period) => {
  if (!hour || !minute || !period) return "";

  let hour24 = Number(hour);
  if (period === "AM" && hour24 === 12) hour24 = 0;
  if (period === "PM" && hour24 !== 12) hour24 += 12;

  return `${String(hour24).padStart(2, "0")}:${String(Number(minute)).padStart(2, "0")}`;
};

const formatActivityAction = (value) => {
  if (!value) return "Lead activity";
  return String(value).replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const normalizeActivityItem = (item, fallbackAction = "Lead activity") => {
  if (!item) return null;

  if (typeof item === "string") {
    return {
      _id: `activity-${item}-${Date.now()}`,
      createdAt: new Date().toISOString(),
      action: fallbackAction,
      message: item,
      adminName: "System",
    };
  }

  return {
    ...item,
    createdAt: item.createdAt || item.updatedAt || item.date || new Date().toISOString(),
    action: item.action || item.type || item.event || fallbackAction,
    message: item.message || item.comment || item.note || item.description || "",
    adminName: item.adminName || item.createdByName || item.userName || item.updatedByName || "System",
  };
};

const getActivityHistory = (contact, extraActivities = []) => {
  const sources = [
    [contact?.conversationHistory, "Comment"],
    [contact?.commentHistory, "Comment"],
    [contact?.comments, "Comment"],
    [contact?.activityHistory, "CRM Activity"],
    [contact?.activities, "CRM Activity"],
    [contact?.leadHistory, "Lead Update"],
    [contact?.history, "Lead Update"],
    [contact?.statusHistory, "Status Update"],
    [contact?.assignmentHistory, "Assignment"],
  ];

  const items = [];

  sources.forEach(([value, fallbackAction]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        const normalized = normalizeActivityItem(item, fallbackAction);
        if (normalized) items.push(normalized);
      });
    }
  });

  extraActivities.forEach((item) => {
    const normalized = normalizeActivityItem(item, "CRM Activity");
    if (normalized) items.push(normalized);
  });

  if (contact?.message) {
    items.push({
      _id: `initial-message-${contact._id}`,
      createdAt: contact.createdAt || contact.updatedAt || new Date().toISOString(),
      action: "Website Enquiry",
      message: contact.message,
      adminName: "Customer",
    });
  }

  if (contact?.updatedAt && contact?.updatedAt !== contact?.createdAt) {
    items.push({
      _id: `record-updated-${contact._id}`,
      createdAt: contact.updatedAt,
      action: "Lead Record Updated",
      message: "Lead information was updated.",
      adminName: "System",
    });
  }

  const seen = new Set();
  return items
    .filter((item) => {
      const key = [item._id || "", item.createdAt || "", item.action || "", item.message || ""].join("|");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

const TimePicker = ({ value, disabled, onChange }) => {
  const parsed = parseTimeValue(value);
  const minutes = Array.from({ length: 12 }, (_, index) => String(index * 5).padStart(2, "0"));
  const hours = Array.from({ length: 12 }, (_, index) => String(index + 1));

  const updateTime = (field, nextValue) => {
    const next = { ...parsed, [field]: nextValue };
    onChange(toApiTime(next.hour, next.minute, next.period));
  };

  return (
    <div className={`grid grid-cols-[auto_1fr_1fr_1fr] items-center border border-slate-200 bg-slate-50 transition focus-within:border-cyan-400 focus-within:bg-white ${disabled ? "cursor-not-allowed opacity-50" : ""}`}>
      <Clock3 size={15} className="ml-3 text-slate-400" />

      <select
        aria-label="Follow-up hour"
        disabled={disabled}
        value={parsed.hour}
        onChange={(e) => updateTime("hour", e.target.value)}
        className="h-11 w-full appearance-none bg-transparent px-2 text-xs font-semibold text-slate-700 outline-none"
      >
        <option value="">Hour</option>
        {hours.map((hour) => <option key={hour} value={hour}>{hour}</option>)}
      </select>

      <select
        aria-label="Follow-up minute"
        disabled={disabled}
        value={parsed.minute}
        onChange={(e) => updateTime("minute", e.target.value)}
        className="h-11 w-full appearance-none bg-transparent px-1 text-xs font-semibold text-slate-700 outline-none"
      >
        <option value="">Min</option>
        {minutes.map((minute) => <option key={minute} value={minute}>{minute}</option>)}
      </select>

      <select
        aria-label="Follow-up AM or PM"
        disabled={disabled}
        value={parsed.period}
        onChange={(e) => updateTime("period", e.target.value)}
        className="h-11 w-full appearance-none bg-transparent px-1 text-xs font-bold text-slate-700 outline-none"
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
};

const qualityConfig = {
  HOT: {
    label: "HOT",
    icon: Flame,
    iconClass: "text-red-500",
    textClass: "text-red-600",
    borderClass: "border-red-200",
    bgClass: "bg-red-50",
    activeClass:
      "border-red-500 bg-red-50 text-red-600 shadow-[0_0_0_3px_rgba(239,68,68,0.08)]",
  },

  WARM: {
    label: "WARM",
    icon: CircleDot,
    iconClass: "text-amber-500",
    textClass: "text-amber-600",
    borderClass: "border-amber-200",
    bgClass: "bg-amber-50",
    activeClass:
      "border-amber-500 bg-amber-50 text-amber-600 shadow-[0_0_0_3px_rgba(245,158,11,0.08)]",
  },

  COLD: {
    label: "COLD",
    icon: Snowflake,
    iconClass: "text-cyan-500",
    textClass: "text-cyan-600",
    borderClass: "border-cyan-200",
    bgClass: "bg-cyan-50",
    activeClass:
      "border-cyan-500 bg-cyan-50 text-cyan-600 shadow-[0_0_0_3px_rgba(6,182,212,0.08)]",
  },
};

const statusConfig = {
  ACTIVE: {
    label: "ACTIVE",
    className:
      "border-blue-200 bg-blue-50 text-blue-600",
  },

  SUCCESSFUL: {
    label: "SUCCESSFUL",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-600",
  },

  COLD: {
    label: "COLD",
    className:
      "border-slate-200 bg-slate-100 text-slate-600",
  },
};

/* =========================================================
   TOAST
========================================================= */

const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const isError = toast.type === "error";

  return (
    <div className="fixed right-4 top-4 z-[300] w-[min(390px,calc(100vw-32px))]">
      <div
        className={`flex items-start gap-3 border px-4 py-3.5 shadow-[0_20px_50px_rgba(15,23,42,0.18)] ${
          isError
            ? "border-red-200 bg-white"
            : "border-emerald-200 bg-white"
        }`}
      >
        <div
          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center ${
            isError
              ? "bg-red-50 text-red-600"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          {isError ? (
            <AlertCircle size={18} />
          ) : (
            <CheckCircle2 size={18} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={`text-[11px] font-bold uppercase tracking-[0.12em] ${
              isError ? "text-red-600" : "text-emerald-600"
            }`}
          >
            {isError ? "Action Failed" : "Success"}
          </p>

          <p className="mt-0.5 text-sm font-semibold text-slate-800">
            {toast.message}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-7 w-7 shrink-0 items-center justify-center text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
};

/* =========================================================
   QUALITY BADGE
========================================================= */

const QualityBadge = ({ quality, large = false }) => {
  const current = qualityConfig[quality] || qualityConfig.WARM;
  const Icon = current.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 border font-bold uppercase tracking-[0.08em] ${
        large
          ? "px-3 py-1.5 text-[10px]"
          : "px-2.5 py-1.5 text-[9px]"
      } ${current.borderClass} ${current.bgClass} ${current.textClass}`}
    >
      <Icon size={large ? 13 : 11} />
      {current.label}
    </span>
  );
};

/* =========================================================
   ADMIN CONTACTS
========================================================= */

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [team, setTeam] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [quality, setQuality] = useState("ALL");

  const [selected, setSelected] = useState(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [activityCache, setActivityCache] = useState({});

  const [toast, setToast] = useState(null);

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

  /* =======================================================
     ADMIN
  ======================================================= */

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

  /* =======================================================
     TOAST HANDLER
  ======================================================= */

  const showToast = (message, type = "success") => {
    setToast({
      message,
      type,
    });

    window.setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  /* =======================================================
     LOAD CONTACTS
  ======================================================= */

  const loadContacts = async () => {
    try {
      setLoading(true);

      const response = await getContacts();

      setContacts(response?.data || []);

      if (isSuperAdmin) {
        const teamResponse = await getTeamMembers();

        setTeam(teamResponse?.data || []);
      }
    } catch (error) {
      showToast(
        error?.message || "Unable to load leads.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  /* =======================================================
     FILTERING
  ======================================================= */

  const filteredContacts = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return contacts.filter((contact) => {
      const matchesSearch =
        !searchValue ||
        contact.name
          ?.toLowerCase()
          .includes(searchValue) ||
        contact.mobile
          ?.toLowerCase()
          .includes(searchValue) ||
        contact.email
          ?.toLowerCase()
          .includes(searchValue) ||
        contact.subject
          ?.toLowerCase()
          .includes(searchValue) ||
        contact.leadType
          ?.toLowerCase()
          .includes(searchValue);

      const matchesQuality =
        quality === "ALL" ||
        contact.leadQuality === quality;

      return matchesSearch && matchesQuality;
    });
  }, [contacts, search, quality]);

  /* =======================================================
     OPEN LEAD
  ======================================================= */

  const openLead = (contact) => {
    setSelected(contact);

    setCrm({
      leadType: contact.leadType || "",
      leadQuality: contact.leadQuality || "WARM",
      leadStatus: contact.leadStatus || "ACTIVE",
      nextFollowUpDate:
        toInputDate(contact.nextFollowUpDate),
      nextFollowUpTime:
        contact.nextFollowUpTime || "",
      doNotFollowUp:
        contact.leadQuality === "COLD" &&
        Boolean(contact.doNotFollowUp),
      coldReason:
        contact.coldReason || "",
      comment: "",
    });

    setHistoryOpen(false);
  };

  const closeLead = () => {
    if (saving) return;

    setSelected(null);
    setHistoryOpen(false);
  };

  /* =======================================================
     FORM FIELD
  ======================================================= */

  const updateField = (field, value) => {
    setCrm((current) => {
      const next = {
        ...current,
        [field]: value,
      };

      if (field === "leadQuality" && value !== "COLD") {
        next.doNotFollowUp = false;
      }

      if (field === "doNotFollowUp" && value) {
        next.nextFollowUpDate = "";
        next.nextFollowUpTime = "";
      }

      return next;
    });
  };

  /* =======================================================
     SAVE LEAD
  ======================================================= */

  const saveLead = async () => {
    if (!selected || saving) return;

    if (
      crm.leadStatus === "COLD" &&
      !crm.coldReason.trim()
    ) {
      showToast(
        "Please add a reason before marking this lead cold.",
        "error"
      );
      return;
    }

    if (
      crm.leadQuality !== "COLD" &&
      !crm.doNotFollowUp &&
      crm.nextFollowUpDate &&
      !crm.nextFollowUpTime
    ) {
      showToast(
        "Please select a follow-up time.",
        "error"
      );
      return;
    }

    try {
      setSaving(true);

      const response = await updateContactCRM(
        selected._id,
        crm
      );

      const updated = response?.data;

      if (!updated) {
        throw new Error(
          "Lead was not returned by the server."
        );
      }

      setContacts((current) =>
        current.map((item) =>
          item._id === updated._id
            ? updated
            : item
        )
      );

      const now = new Date().toISOString();
      const newActivities = [];

      if (crm.comment.trim()) {
        newActivities.push({
          _id: `local-comment-${Date.now()}`,
          createdAt: now,
          action: "Comment Added",
          message: crm.comment.trim(),
          adminName: admin?.name || "Admin",
        });
      }

      if (crm.leadQuality !== (selected.leadQuality || "WARM")) {
        newActivities.push({
          _id: `local-quality-${Date.now()}`,
          createdAt: now,
          action: "Lead Quality Updated",
          message: `Lead quality changed to ${crm.leadQuality}.`,
          adminName: admin?.name || "Admin",
        });
      }

      if (crm.leadStatus !== (selected.leadStatus || "ACTIVE")) {
        newActivities.push({
          _id: `local-status-${Date.now()}`,
          createdAt: now,
          action: "Lead Status Updated",
          message: `Lead result changed to ${crm.leadStatus}.`,
          adminName: admin?.name || "Admin",
        });
      }

      if (crm.doNotFollowUp) {
        newActivities.push({
          _id: `local-followup-disabled-${Date.now()}`,
          createdAt: now,
          action: "Follow-up Disabled",
          message: "No next follow-up was scheduled for this cold lead.",
          adminName: admin?.name || "Admin",
        });
      } else if (crm.nextFollowUpDate || crm.nextFollowUpTime) {
        newActivities.push({
          _id: `local-followup-${Date.now()}`,
          createdAt: now,
          action: "Follow-up Scheduled",
          message: `Next follow-up: ${crm.nextFollowUpDate || "date not set"}${crm.nextFollowUpTime ? ` at ${crm.nextFollowUpTime}` : ""}.`,
          adminName: admin?.name || "Admin",
        });
      }

      if (newActivities.length) {
        setActivityCache((current) => ({
          ...current,
          [updated._id]: [
            ...newActivities,
            ...(current[updated._id] || []),
          ],
        }));
      }

      setSelected(updated);

      showToast(
        "Lead successfully updated."
      );
    } catch (error) {
      showToast(
        error?.message ||
          "Unable to update lead.",
        "error"
      );
    } finally {
      setSaving(false);
    }
  };

  /* =======================================================
     ASSIGN LEAD
  ======================================================= */

  const handleAssignment = async (
    contactId,
    assignedTo
  ) => {
    if (saving) return;

    try {
      setSaving(true);

      const response = await assignContact(
        contactId,
        assignedTo || undefined
      );

      const updated = response?.data;

      if (!updated) {
        throw new Error(
          "Assignment update failed."
        );
      }

      setContacts((current) =>
        current.map((item) =>
          item._id === updated._id
            ? updated
            : item
        )
      );

      if (selected?._id === updated._id) {
        setSelected(updated);
      }

      const assignedMember =
        updated.assignedTo?.name ||
        team.find(
          (member) =>
            member._id === assignedTo
        )?.name;

      setActivityCache((current) => ({
        ...current,
        [updated._id]: [
          {
            _id: `local-assignment-${Date.now()}`,
            createdAt: new Date().toISOString(),
            action: "Lead Assigned",
            message: assignedMember
              ? `Lead assigned to ${assignedMember}.`
              : "Lead assignment updated.",
            adminName: admin?.name || "Admin",
          },
          ...(current[updated._id] || []),
        ],
      }));

      showToast(
        assignedMember
          ? `Lead assigned to ${assignedMember}.`
          : "Lead assignment updated."
      );
    } catch (error) {
      showToast(
        error?.message ||
          "Unable to assign lead.",
        "error"
      );
    } finally {
      setSaving(false);
    }
  };

  /* =======================================================
     COUNTS
  ======================================================= */

  const hotCount = contacts.filter(
    (item) => item.leadQuality === "HOT"
  ).length;

  const warmCount = contacts.filter(
    (item) => item.leadQuality === "WARM"
  ).length;

  const coldCount = contacts.filter(
    (item) => item.leadQuality === "COLD"
  ).length;

  const activeCount = contacts.filter(
    (item) =>
      !item.leadStatus ||
      item.leadStatus === "ACTIVE"
  ).length;

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

      <div className="space-y-5 pb-10">

        {/* =================================================
            PAGE HERO
        ================================================== */}

        <section className="relative overflow-hidden border border-slate-200 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.045)]">

          <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 bg-cyan-50 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-60 w-60 bg-blue-50/70 blur-3xl" />

          <div className="relative flex flex-col gap-6 px-5 py-6 sm:px-7 sm:py-7 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="mb-3 inline-flex items-center gap-2 border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                <span className="h-1.5 w-1.5 bg-cyan-500" />
                WebQenzo CRM
              </div>

              <h1 className="text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                Lead Workspace
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Manage website enquiries, assigned leads,
                conversations and follow-ups from one
                professional workspace.
              </p>
            </div>

            <button
              type="button"
              onClick={loadContacts}
              disabled={loading}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <RefreshCw
                size={16}
                className={
                  loading
                    ? "animate-spin"
                    : ""
                }
              />

              Refresh Leads
            </button>
          </div>

          {/* =================================================
              STATS
          ================================================== */}

          <div className="relative grid grid-cols-2 border-t border-slate-100 sm:grid-cols-5">

            <div className="border-b border-slate-100 px-5 py-4 sm:border-b-0 sm:border-r">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Total Leads
              </p>

              <p className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950">
                {contacts.length}
              </p>
            </div>

            <div className="border-b border-slate-100 px-5 py-4 sm:border-b-0 sm:border-r">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-blue-500">
                Active
              </p>

              <p className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950">
                {activeCount}
              </p>
            </div>

            <div className="border-b border-slate-100 px-5 py-4 sm:border-b-0 sm:border-r">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-red-500">
                Hot
              </p>

              <p className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950">
                {hotCount}
              </p>
            </div>

            <div className="border-r border-slate-100 px-5 py-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-amber-500">
                Warm
              </p>

              <p className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950">
                {warmCount}
              </p>
            </div>

            <div className="px-5 py-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-600">
                Cold
              </p>

              <p className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950">
                {coldCount}
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            FILTER BAR
        ================================================== */}

        <section className="border border-slate-200 bg-white p-3 shadow-[0_5px_25px_rgba(15,23,42,0.035)] sm:p-4">

          <div className="flex flex-col gap-3 xl:flex-row">

            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search by name, mobile, email, subject or lead type..."
                className="h-11 w-full border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-700"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="relative xl:w-[210px]">
              <select
                value={quality}
                onChange={(e) =>
                  setQuality(e.target.value)
                }
                className="h-11 w-full appearance-none border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
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

              <ChevronDown
                size={15}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">

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
                className="text-left text-xs font-bold text-cyan-600 hover:text-cyan-700 sm:text-right"
              >
                Clear filters
              </button>
            )}
          </div>
        </section>

        {/* =================================================
            LEADS TABLE
        ================================================== */}

        <section className="overflow-hidden border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

          {loading ? (
            <div className="p-12">
              <div className="space-y-4">
                <div className="h-4 w-32 animate-pulse bg-slate-100" />
                <div className="h-16 animate-pulse bg-slate-100" />
                <div className="h-16 animate-pulse bg-slate-100" />
                <div className="h-16 animate-pulse bg-slate-100" />
              </div>

              <p className="mt-5 text-center text-xs font-medium text-slate-400">
                Loading leads...
              </p>
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center">

              <div className="flex h-14 w-14 items-center justify-center bg-cyan-50 text-cyan-500">
                <MessageSquare size={23} />
              </div>

              <p className="mt-5 text-base font-bold text-slate-800">
                No leads found
              </p>

              <p className="mt-1 max-w-sm text-sm leading-6 text-slate-400">
                Try changing your search or quality filter.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full min-w-[1180px] text-left">

                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/80">

                    <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Lead
                    </th>

                    <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Type
                    </th>

                    <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Latest Activity
                    </th>

                    <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Quality
                    </th>

                    <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Follow-up
                    </th>

                    {isSuperAdmin && (
                      <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        Assigned To
                      </th>
                    )}

                    <th className="px-5 py-4 text-right text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">

                  {filteredContacts.map((contact) => {

                    const comments =
                      contact.conversationHistory || [];

                    const statusHistory =
                      contact.statusHistory || [];

                    const assignmentHistory =
                      contact.assignmentHistory || [];

                    const activity = [
                      ...comments,
                      ...statusHistory,
                      ...assignmentHistory,
                    ].sort(
                      (a, b) =>
                        new Date(b.createdAt) -
                        new Date(a.createdAt)
                    );

                    const lastActivity =
                      activity[0];

                    const currentQuality =
                      contact.leadQuality || "WARM";

                    return (
                      <tr
                        key={contact._id}
                        className="group transition-colors hover:bg-slate-50"
                      >

                        {/* LEAD */}

                        <td className="px-5 py-5">

                          <button
                            type="button"
                            onClick={() =>
                              openLead(contact)
                            }
                            className="flex max-w-[280px] items-center gap-3 text-left"
                          >

                            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center bg-slate-950 text-sm font-bold text-white transition group-hover:bg-cyan-500">
                              {contact.name
                                ?.charAt(0)
                                ?.toUpperCase() || "?"}

                              <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 border-2 border-white bg-emerald-400" />
                            </div>

                            <div className="min-w-0">

                              <p className="truncate text-sm font-bold text-slate-900 group-hover:text-cyan-600">
                                {contact.name ||
                                  "Unnamed Lead"}
                              </p>

                              <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-400">
                                <Phone size={11} />
                                <span>
                                  {contact.mobile ||
                                    "No mobile"}
                                </span>
                              </div>

                              <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400">
                                <Mail size={11} />
                                <span className="truncate">
                                  {contact.email ||
                                    "No email"}
                                </span>
                              </div>
                            </div>
                          </button>
                        </td>

                        {/* TYPE */}

                        <td className="px-5 py-5">

                          {contact.leadType ? (
                            <span className="inline-flex max-w-[150px] items-center gap-1.5 border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600">
                              <Tag size={11} />
                              <span className="truncate">
                                {contact.leadType}
                              </span>
                            </span>
                          ) : (
                            <span className="text-sm text-slate-300">
                              Not set
                            </span>
                          )}
                        </td>

                        {/* ACTIVITY */}

                        <td className="max-w-[290px] px-5 py-5">

                          {lastActivity ? (
                            <button
                              type="button"
                              onClick={() =>
                                openLead(contact)
                              }
                              className="text-left"
                            >
                              <div className="flex items-start gap-2">

                                <MessageSquare
                                  size={13}
                                  className="mt-0.5 shrink-0 text-cyan-500"
                                />

                                <div className="min-w-0">

                                  <p className="truncate text-sm font-semibold text-slate-700">
                                    {lastActivity.message ||
                                      lastActivity.action ||
                                      "Lead activity"}
                                  </p>

                                  <p className="mt-1 text-[10px] text-slate-400">
                                    {formatDateTime(
                                      lastActivity.createdAt
                                    )}
                                  </p>
                                </div>
                              </div>
                            </button>
                          ) : (
                            <span className="text-xs font-medium text-slate-400">
                              No activity yet
                            </span>
                          )}
                        </td>

                        {/* QUALITY */}

                        <td className="px-5 py-5">
                          <QualityBadge
                            quality={currentQuality}
                          />
                        </td>

                        {/* FOLLOW UP */}

                        <td className="px-5 py-5">

                          {contact.doNotFollowUp ? (
                            <div className="flex items-center gap-2">

                              <div className="flex h-8 w-8 items-center justify-center bg-slate-100 text-slate-400">
                                <X size={13} />
                              </div>

                              <span className="text-xs font-semibold text-slate-400">
                                No follow-up
                              </span>
                            </div>
                          ) : contact.nextFollowUpDate ? (
                            <div className="flex items-center gap-2.5">

                              <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-cyan-50 text-cyan-600">
                                <CalendarDays
                                  size={14}
                                />
                              </div>

                              <div>
                                <p className="text-xs font-bold text-slate-700">
                                  {formatShortDate(
                                    contact.nextFollowUpDate
                                  )}
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

                        {/* ASSIGNMENT */}

                        {isSuperAdmin && (
                          <td className="px-5 py-5">

                            <div className="relative">

                              <UserPlus
                                size={13}
                                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                              />

                              <select
                                value={
                                  contact.assignedTo?._id ||
                                  ""
                                }
                                onChange={(e) =>
                                  handleAssignment(
                                    contact._id,
                                    e.target.value
                                  )
                                }
                                disabled={saving}
                                className="h-9 w-[170px] appearance-none border border-slate-200 bg-white pl-9 pr-3 text-xs font-semibold text-slate-600 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/5 disabled:opacity-50"
                              >
                                <option value="">
                                  Unassigned
                                </option>

                                {team.map(
                                  (member) => (
                                    <option
                                      key={member._id}
                                      value={member._id}
                                    >
                                      {member.name}
                                    </option>
                                  )
                                )}
                              </select>

                              <ChevronDown
                                size={12}
                                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                              />
                            </div>
                          </td>
                        )}

                        {/* ACTION */}

                        <td className="px-5 py-5 text-right">

                          <button
                            type="button"
                            onClick={() =>
                              openLead(contact)
                            }
                            className="inline-flex h-9 items-center gap-2 border border-slate-200 bg-white px-3 text-xs font-bold text-slate-600 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                          >
                            <Pencil size={13} />
                            Open Lead
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
      </div>

      {/* =====================================================
          LEAD DETAIL MODAL
          OUTER RADIUS = 0 AS REQUESTED
      ====================================================== */}

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-0 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeLead();
            }
          }}
        >

          <div className="flex h-full max-h-[100dvh] w-full flex-col overflow-hidden border border-slate-800 bg-white shadow-[0_35px_100px_rgba(0,0,0,0.35)] lg:h-[92vh] lg:max-w-[1120px]">

            {/* =================================================
                MODAL HEADER
            ================================================== */}

            <div className="shrink-0 border-b border-slate-200 bg-[#07101f] px-5 py-4 text-white sm:px-7">

              <div className="flex items-center justify-between gap-4">

                <div className="flex min-w-0 items-center gap-4">

                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center bg-white text-sm font-bold text-slate-950">
                    {selected.name
                      ?.charAt(0)
                      ?.toUpperCase() || "?"}

                    <span className="absolute -bottom-1 -right-1 h-3 w-3 border-2 border-[#07101f] bg-cyan-400" />
                  </div>

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-2">

                      <h2 className="truncate text-lg font-bold tracking-[-0.025em] sm:text-xl">
                        {selected.name ||
                          "Unnamed Lead"}
                      </h2>

                      <QualityBadge
                        quality={
                          crm.leadQuality ||
                          "WARM"
                        }
                        large
                      />
                    </div>

                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400">

                      {selected.mobile && (
                        <a
                          href={`tel:${selected.mobile}`}
                          className="flex items-center gap-1.5 transition hover:text-cyan-300"
                        >
                          <Phone size={12} />
                          {selected.mobile}
                        </a>
                      )}

                      {selected.email && (
                        <a
                          href={`mailto:${selected.email}`}
                          className="flex min-w-0 items-center gap-1.5 transition hover:text-cyan-300"
                        >
                          <Mail size={12} />
                          <span className="max-w-[250px] truncate">
                            {selected.email}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeLead}
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-slate-400 transition hover:border-cyan-400/30 hover:bg-white/5 hover:text-white"
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            {/* =================================================
                MODAL CONTENT
            ================================================== */}

            <div className="min-h-0 flex-1 overflow-y-auto bg-[#f5f8fb]">

              <div className="grid min-h-full lg:grid-cols-[1fr_390px]">

                {/* =================================================
                    LEFT / CUSTOMER + HISTORY
                ================================================== */}

                <div className="space-y-4 p-4 sm:p-6">

                  {/* CUSTOMER SUMMARY */}

                  <section className="border border-slate-200 bg-white">

                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center bg-cyan-50 text-cyan-600">
                          <UserRound size={17} />
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-800">
                            Customer
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-400">
                            Lead information
                          </p>
                        </div>
                      </div>

                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-emerald-500">
                        Live Lead
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2">

                      <div className="border-b border-slate-100 px-5 py-4 sm:border-r">
                        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                          Lead Name
                        </p>

                        <p className="mt-1.5 text-sm font-bold text-slate-800">
                          {selected.name ||
                            "Unnamed Lead"}
                        </p>
                      </div>

                      <div className="border-b border-slate-100 px-5 py-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                          Email
                        </p>

                        <p className="mt-1.5 truncate text-sm font-semibold text-slate-700">
                          {selected.email ||
                            "Not provided"}
                        </p>
                      </div>

                      <div className="px-5 py-4 sm:border-r">
                        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                          Mobile
                        </p>

                        <p className="mt-1.5 text-sm font-semibold text-slate-700">
                          {selected.mobile ||
                            "Not provided"}
                        </p>
                      </div>

                      <div className="px-5 py-4">
                        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                          Subject
                        </p>

                        <p className="mt-1.5 text-sm font-semibold text-slate-700">
                          {selected.subject ||
                            "General enquiry"}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* CUSTOMER MESSAGE */}

                  <section className="border border-slate-200 bg-white">

                    <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">

                      <div className="flex h-9 w-9 items-center justify-center bg-cyan-50 text-cyan-600">
                        <MessageSquare size={17} />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-800">
                          Customer Message
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-400">
                          Original website enquiry
                        </p>
                      </div>
                    </div>

                    <div className="px-5 py-5">

                      <div className="border-l-2 border-cyan-400 bg-slate-50 px-4 py-4">

                        <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
                          {selected.message ||
                            "No message provided by the customer."}
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* ACTIVITY PREVIEW */}

                  <section className="border border-slate-200 bg-white">

                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center bg-slate-100 text-slate-700">
                          <History size={17} />
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-800">
                            Lead Activity
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-400">
                            Recent CRM activity
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setHistoryOpen(true)
                        }
                        className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-cyan-600 hover:text-cyan-700"
                      >
                        View all
                        <ArrowUpRight size={12} />
                      </button>
                    </div>

                    <ActivityPreview
                      contact={selected}
                      extraActivities={
                        activityCache[selected._id] || []
                      }
                    />
                  </section>
                </div>

                {/* =================================================
                    RIGHT / CRM CONTROLS
                ================================================== */}

                <div className="border-t border-slate-200 bg-white lg:border-l lg:border-t-0">

                  <div className="sticky top-0">

                    <div className="border-b border-slate-200 bg-white px-5 py-5">

                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-600">
                        Lead Management
                      </p>

                      <h3 className="mt-1 text-lg font-bold tracking-[-0.025em] text-slate-950">
                        Update Lead
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Update the current CRM status and next action.
                      </p>
                    </div>

                    <div className="space-y-5 px-5 py-5">

                      {/* ASSIGNMENT */}

                      {isSuperAdmin && (
                        <div>
                          <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                            Assign Lead
                          </label>

                          <div className="relative">

                            <UserPlus
                              size={15}
                              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                            />

                            <select
                              value={
                                selected.assignedTo?._id ||
                                ""
                              }
                              onChange={(e) =>
                                handleAssignment(
                                  selected._id,
                                  e.target.value
                                )
                              }
                              disabled={saving}
                              className="h-11 w-full appearance-none border border-slate-200 bg-slate-50 pl-10 pr-10 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5 disabled:opacity-50"
                            >
                              <option value="">
                                Unassigned
                              </option>

                              {team.map(
                                (member) => (
                                  <option
                                    key={member._id}
                                    value={member._id}
                                  >
                                    {member.name}
                                  </option>
                                )
                              )}
                            </select>

                            <ChevronDown
                              size={14}
                              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                            />
                          </div>

                          {selected.assignedTo?.name && (
                            <p className="mt-2 text-[10px] font-medium text-slate-400">
                              Currently assigned to{" "}
                              <span className="font-bold text-slate-600">
                                {selected.assignedTo.name}
                              </span>
                            </p>
                          )}
                        </div>
                      )}

                      {/* LEAD TYPE */}

                      <div>
                        <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Lead Type
                        </label>

                        <div className="relative">

                          <Building2
                            size={15}
                            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            value={crm.leadType}
                            onChange={(e) =>
                              updateField(
                                "leadType",
                                e.target.value
                              )
                            }
                            placeholder="Website / SEO / E-commerce"
                            className="h-11 w-full border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
                          />
                        </div>
                      </div>

                      {/* QUALITY */}

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <label className="block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                            Lead Quality
                          </label>

                          <span className="text-[9px] font-semibold text-slate-400">
                            Current:{" "}
                            {crm.leadQuality}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2">

                          {Object.keys(
                            qualityConfig
                          ).map((item) => {
                            const config =
                              qualityConfig[item];

                            const Icon =
                              config.icon;

                            const active =
                              crm.leadQuality ===
                              item;

                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() =>
                                  updateField(
                                    "leadQuality",
                                    item
                                  )
                                }
                                className={`flex h-10 items-center justify-center gap-1.5 border text-[10px] font-bold transition ${
                                  active
                                    ? config.activeClass
                                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50"
                                }`}
                              >
                                <Icon size={13} />
                                {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* STATUS */}

                      <div>
                        <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                          Lead Result
                        </label>

                        <div className="grid grid-cols-3 gap-2">

                          {Object.keys(
                            statusConfig
                          ).map((item) => {
                            const active =
                              crm.leadStatus ===
                              item;

                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() =>
                                  updateField(
                                    "leadStatus",
                                    item
                                  )
                                }
                                className={`h-10 border text-[9px] font-bold uppercase tracking-[0.06em] transition ${
                                  active
                                    ? statusConfig[
                                        item
                                      ].className +
                                      " shadow-[0_0_0_3px_rgba(15,23,42,0.04)]"
                                    : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                                }`}
                              >
                                {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* FOLLOW UP */}

                      <div>
                        <div className="mb-2 flex items-end justify-between gap-3">
                          <div>
                            <label className="block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                              Next Follow-up
                            </label>
                            <p className="mt-1 text-[9px] text-slate-400">
                              Schedule the next customer touchpoint.
                            </p>
                          </div>

                          {crm.doNotFollowUp && (
                            <span className="border border-slate-200 bg-slate-50 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-slate-400">
                              Disabled
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          <div className={`relative flex items-center border border-slate-200 bg-slate-50 transition focus-within:border-cyan-400 focus-within:bg-white ${crm.doNotFollowUp ? "opacity-50" : ""}`}>
                            <CalendarDays
                              size={15}
                              className="pointer-events-none absolute left-3.5 z-10 text-slate-400"
                            />

                            <input
                              type="date"
                              min={getTodayInputDate()}
                              disabled={crm.doNotFollowUp}
                              value={crm.nextFollowUpDate}
                              onClick={(e) => e.currentTarget.showPicker?.()}
                              onChange={(e) =>
                                updateField(
                                  "nextFollowUpDate",
                                  e.target.value
                                )
                              }
                              className="h-11 w-full cursor-pointer appearance-none bg-transparent pl-10 pr-3 text-xs font-semibold text-slate-700 outline-none disabled:cursor-not-allowed"
                            />
                          </div>

                          <TimePicker
                            value={crm.nextFollowUpTime}
                            disabled={crm.doNotFollowUp}
                            onChange={(value) =>
                              updateField(
                                "nextFollowUpTime",
                                value
                              )
                            }
                          />
                        </div>

                        {/* ONLY COLD LEADS */}
                        {crm.leadQuality === "COLD" && (
                          <label className="mt-3 flex cursor-pointer items-start gap-3 border border-slate-200 bg-slate-50 px-3.5 py-3.5 transition hover:border-slate-300 hover:bg-white">
                            <input
                              type="checkbox"
                              checked={crm.doNotFollowUp}
                              onChange={(e) =>
                                updateField(
                                  "doNotFollowUp",
                                  e.target.checked
                                )
                              }
                              className="mt-0.5 h-4 w-4 shrink-0 accent-cyan-600"
                            />

                            <div>
                              <p className="text-[11px] font-bold text-slate-700">
                                Don't add follow-up
                              </p>
                              <p className="mt-0.5 text-[9px] leading-4 text-slate-400">
                                Disable next follow-up date and time.
                              </p>
                            </div>
                          </label>
                        )}
                      </div>

                      {/* COLD REASON */}

                      {crm.leadStatus ===
                        "COLD" && (
                        <div className="border border-red-200 bg-red-50 p-3.5">

                          <label className="block text-[9px] font-bold uppercase tracking-[0.14em] text-red-600">
                            Cold Reason *
                          </label>

                          <textarea
                            rows={3}
                            value={
                              crm.coldReason
                            }
                            onChange={(e) =>
                              updateField(
                                "coldReason",
                                e.target.value
                              )
                            }
                            placeholder="Why is this lead cold?"
                            className="mt-2 w-full resize-none border border-red-200 bg-white px-3 py-2.5 text-xs leading-5 text-slate-700 outline-none placeholder:text-slate-400 focus:border-red-400 focus:ring-4 focus:ring-red-500/5"
                          />
                        </div>
                      )}

                      {/* COMMENT */}

                      <div>

                        <label className="mb-2 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500">
                          New Comment
                        </label>

                        <textarea
                          rows={5}
                          value={crm.comment}
                          onChange={(e) =>
                            updateField(
                              "comment",
                              e.target.value
                            )
                          }
                          placeholder="Add customer conversation, call note, proposal update or follow-up..."
                          className="w-full resize-none border border-slate-200 bg-slate-50 px-3.5 py-3 text-xs leading-6 text-slate-700 outline-none placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
                        />
                      </div>

                      {/* QUICK ACTIONS */}

                      <div className="grid grid-cols-2 gap-2">

                        {selected.mobile && (
                          <a
                            href={`tel:${selected.mobile}`}
                            className="inline-flex h-10 items-center justify-center gap-2 border border-slate-200 bg-white text-xs font-bold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                          >
                            <PhoneCall size={14} />
                            Call Lead
                          </a>
                        )}

                        {selected.email && (
                          <a
                            href={`mailto:${selected.email}`}
                            className="inline-flex h-10 items-center justify-center gap-2 border border-slate-200 bg-white text-xs font-bold text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
                          >
                            <Send size={14} />
                            Email Lead
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                MODAL FOOTER
            ================================================== */}

            <div className="flex shrink-0 flex-col-reverse gap-2 border-t border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

              <button
                type="button"
                onClick={() =>
                  setHistoryOpen(true)
                }
                className="inline-flex h-11 items-center justify-center gap-2 border border-slate-200 bg-white px-4 text-xs font-bold text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
              >
                <Clock3 size={15} />
                Complete History
              </button>

              <div className="flex flex-col-reverse gap-2 sm:flex-row">

                <button
                  type="button"
                  onClick={closeLead}
                  disabled={saving}
                  className="h-11 border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={saveLead}
                  disabled={saving}
                  className="inline-flex h-11 items-center justify-center gap-2 bg-[#07101f] px-7 text-sm font-bold text-white shadow-[0_10px_25px_rgba(7,16,31,0.16)] transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saving && (
                    <RefreshCw
                      size={15}
                      className="animate-spin"
                    />
                  )}

                  {saving
                    ? "Updating Lead..."
                    : "Update Lead"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          COMPLETE HISTORY MODAL
          OUTER RADIUS = 0
      ====================================================== */}

      {historyOpen && selected && (
        <HistoryModal
          contact={selected}
          extraActivities={
            activityCache[selected._id] || []
          }
          onClose={() =>
            setHistoryOpen(false)
          }
        />
      )}
    </>
  );
};

/* =========================================================
   ACTIVITY PREVIEW
========================================================= */

const ActivityPreview = ({ contact, extraActivities = [] }) => {
  const history = getActivityHistory(contact, extraActivities).slice(0, 4);

  if (!history.length) {
    return (
      <div className="flex min-h-[180px] flex-col items-center justify-center px-5 text-center">
        <div className="flex h-11 w-11 items-center justify-center bg-slate-100 text-slate-400">
          <Clock3 size={19} />
        </div>
        <p className="mt-3 text-xs font-bold text-slate-700">No activity yet</p>
        <p className="mt-1 max-w-xs text-[10px] leading-5 text-slate-400">
          Lead activity, comments and status updates will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="p-5 sm:p-6">
      <div className="relative border-l border-slate-200 pl-5 sm:pl-6">
        <div className="space-y-5">
          {history.map((item, index) => (
            <div
              key={item._id || `${item.createdAt}-${index}`}
              className="relative"
            >
              <span className="absolute -left-[25px] top-1.5 h-2.5 w-2.5 border-2 border-white bg-cyan-500 shadow-sm sm:-left-[26px]" />

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[10px] font-semibold text-slate-400">
                    {formatDateTime(item.createdAt)}
                  </p>
                  <span className="border border-slate-200 bg-slate-50 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.08em] text-slate-500">
                    {formatActivityAction(item.action)}
                  </span>
                </div>

                <p className="mt-1 text-xs font-bold text-slate-800 break-words">
                  {item.message || formatActivityAction(item.action)}
                </p>

                <p className="mt-1 text-[9px] font-medium text-slate-400">
                  By {item.adminName || "System"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   HISTORY MODAL
========================================================= */

const HistoryModal = ({ contact, extraActivities = [], onClose }) => {
  const history = getActivityHistory(contact, extraActivities);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/75 p-0 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex h-full max-h-screen w-full flex-col overflow-hidden border border-slate-800 bg-white shadow-[0_35px_100px_rgba(0,0,0,0.35)] sm:h-[90vh] sm:max-w-[760px]">
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-[#07101f] px-5 py-4 text-white sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cyan-500 text-slate-950">
              <History size={17} />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-cyan-400">Complete History</p>
              <h3 className="mt-0.5 truncate text-base font-bold">{contact.name || "Lead Activity"}</h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-slate-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Close history"
          >
            <X size={17} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#f5f8fb] p-4 sm:p-7">
          {history.length === 0 ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center bg-white text-slate-400 shadow-sm">
                <Clock3 size={22} />
              </div>
              <p className="mt-4 text-sm font-bold text-slate-700">No history yet</p>
              <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">
                Lead activity will appear here after updates, comments or assignments.
              </p>
            </div>
          ) : (
            <div className="relative ml-2 border-l border-slate-200 pl-6 sm:pl-7">
              <div className="space-y-5 sm:space-y-6">
                {history.map((item, index) => (
                  <div key={item._id || `${item.createdAt}-${index}`} className="relative">
                    <span className="absolute -left-[33px] top-4 h-3.5 w-3.5 border-2 border-white bg-cyan-500 shadow-sm sm:-left-[35px]" />
                    <div className="border border-slate-200 bg-white p-4 shadow-[0_4px_18px_rgba(15,23,42,0.035)] sm:p-5">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold text-slate-400">{formatDateTime(item.createdAt)}</p>
                          <p className="mt-1.5 text-sm font-bold capitalize text-slate-800">{formatActivityAction(item.action)}</p>
                        </div>
                        <span className="w-fit border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-cyan-700">CRM Activity</span>
                      </div>
                      <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-6 text-slate-600">{item.message || "No additional details."}</p>
                      <div className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-3 text-[10px] font-medium text-slate-400">
                        <UserRound size={11} />
                        By {item.adminName || "System"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex shrink-0 justify-end border-t border-slate-200 bg-white px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="h-10 border border-slate-200 bg-white px-5 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
          >
            Close History
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminContacts;