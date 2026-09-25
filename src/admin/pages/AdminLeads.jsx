import { useEffect, useMemo, useState } from "react";

import {
  Upload,
  Download,
  UserPlus,
  Users,
  RefreshCw,
  Search,
  CheckCircle2,
  AlertCircle,
  X,
  FileSpreadsheet,
  UserRoundCheck,
  UserRoundX,
  ChevronDown,
  Loader2,
  Phone,
  Mail,
  Tag,
  Globe2,
  Clock3,
} from "lucide-react";

import {
  createManualLead,
  bulkCreateManualLeads,
  getAllLeads,
  assignLead,
  getTeamMembers,
} from "../utils/adminApi";

/* =========================================================
   ADMIN LEADS
   SUPER ADMIN ONLY

   IMPORTANT:
   These leads are completely separate from Contacts.
========================================================= */

const emptyForm = {
  name: "",
  mobile: "",
  email: "",
  leadType: "",
  source: "",
  assignedTo: "",
};

const initialToast = {
  visible: false,
  type: "success",
  title: "",
  message: "",
};

/* =========================================================
   HELPERS
========================================================= */

const getInitials = (name = "") => {
  return (
    name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((item) => item.charAt(0).toUpperCase())
      .join("") || "L"
  );
};

const getAssignedId = (lead) => {
  if (!lead?.assignedTo) return "";

  if (typeof lead.assignedTo === "string") {
    return lead.assignedTo;
  }

  return (
    lead.assignedTo?._id ||
    lead.assignedTo?.id ||
    ""
  );
};

const getAssignedName = (lead) => {
  if (!lead?.assignedTo) {
    return lead?.assignedToName || "";
  }

  if (typeof lead.assignedTo === "string") {
    return lead.assignedToName || "";
  }

  return (
    lead.assignedTo?.name ||
    lead.assignedToName ||
    ""
  );
};

const normalizeLead = (lead) => {
  return {
    ...lead,
    name:
      lead?.name ||
      lead?.fullName ||
      "Unnamed Lead",

    mobile:
      lead?.mobile ||
      lead?.phone ||
      "",

    email:
      lead?.email ||
      "",

    leadType:
      lead?.leadType ||
      lead?.lead_type ||
      "",

    source:
      lead?.source ||
      "",

    assignedToId:
      getAssignedId(lead),

    assignedToName:
      getAssignedName(lead),

    leadQuality:
      lead?.leadQuality ||
      "WARM",

    leadStatus:
      lead?.leadStatus ||
      "ACTIVE",
  };
};

/* =========================================================
   CSV PARSER
========================================================= */

const parseCSVLine = (line) => {
  const result = [];
  let current = "";
  let insideQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      current += '"';
      i += 1;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "," && !insideQuotes) {
      result.push(current.trim());
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current.trim());

  return result;
};

const parseLeadText = (text) => {
  const cleanText = text
    .replace(/\r/g, "")
    .trim();

  if (!cleanText) {
    return [];
  }

  const lines = cleanText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return [];
  }

  const delimiter = lines[0].includes("\t")
    ? "\t"
    : ",";

  const headers =
    delimiter === "\t"
      ? lines[0]
          .split("\t")
          .map((item) =>
            item.trim().toLowerCase()
          )
      : parseCSVLine(lines[0]).map((item) =>
          item.trim().toLowerCase()
        );

  const findHeader = (...names) => {
    return names
      .map((name) =>
        headers.indexOf(name)
      )
      .find((index) => index !== -1);
  };

  const nameIndex = findHeader(
    "name",
    "full_name",
    "fullname"
  );

  const mobileIndex = findHeader(
    "mobile",
    "phone",
    "phone_number"
  );

  const emailIndex = findHeader(
    "email",
    "email_address"
  );

  const leadTypeIndex = findHeader(
    "lead_type",
    "leadtype",
    "lead type",
    "type"
  );

  const sourceIndex = findHeader(
    "source",
    "lead_source"
  );

  return lines
    .slice(1)
    .map((line) => {
      const values =
        delimiter === "\t"
          ? line.split("\t").map((item) =>
              item.trim()
            )
          : parseCSVLine(line);

      return {
        name:
          nameIndex !== undefined &&
          nameIndex !== -1
            ? values[nameIndex] || ""
            : "",

        mobile:
          mobileIndex !== undefined &&
          mobileIndex !== -1
            ? values[mobileIndex] || ""
            : "",

        email:
          emailIndex !== undefined &&
          emailIndex !== -1
            ? values[emailIndex] || ""
            : "",

        leadType:
          leadTypeIndex !== undefined &&
          leadTypeIndex !== -1
            ? values[leadTypeIndex] || ""
            : "",

        source:
          sourceIndex !== undefined &&
          sourceIndex !== -1
            ? values[sourceIndex] || ""
            : "",
      };
    });
};

/* =========================================================
   COMPONENT
========================================================= */

const AdminLeads = () => {
  const [leads, setLeads] = useState([]);
  const [team, setTeam] = useState([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [saving, setSaving] = useState(false);
  const [bulkSaving, setBulkSaving] = useState(false);

  const [error, setError] = useState("");

  const [toast, setToast] =
    useState(initialToast);

  const [activeTab, setActiveTab] =
    useState("single");

  const [form, setForm] =
    useState(emptyForm);

  const [bulkText, setBulkText] =
    useState("");

  const [bulkFileName, setBulkFileName] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [assignmentFilter, setAssignmentFilter] =
    useState("ALL");

  const [qualityFilter, setQualityFilter] =
    useState("ALL");

  const [statusFilter, setStatusFilter] =
    useState("ALL");

  const [selectedFile, setSelectedFile] =
    useState(null);

  /* =======================================================
     TOAST
  ======================================================= */

  const showToast = (
    type,
    title,
    message
  ) => {
    setToast({
      visible: true,
      type,
      title,
      message,
    });

    window.setTimeout(() => {
      setToast((current) => ({
        ...current,
        visible: false,
      }));
    }, 4000);
  };

  /* =======================================================
     LOAD LEADS
  ======================================================= */

  const loadLeads = async (
    showLoader = true
  ) => {
    try {
      if (showLoader) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }

      setError("");

      const response =
        await getAllLeads();

      const rawLeads =
        response?.data ||
        response?.leads ||
        [];

      setLeads(
        Array.isArray(rawLeads)
          ? rawLeads.map(normalizeLead)
          : []
      );
    } catch (err) {
      const message =
        err?.message ||
        "Unable to load leads.";

      setError(message);

      showToast(
        "error",
        "Unable to load leads",
        message
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  /* =======================================================
     LOAD TEAM
  ======================================================= */

  const loadTeam = async () => {
    try {
      const response =
        await getTeamMembers();

      const members =
        response?.data || [];

      setTeam(
        Array.isArray(members)
          ? members.filter(
              (member) =>
                member?.role ===
                  "TEAM_ADMIN" &&
                member?.isActive !== false
            )
          : []
      );
    } catch (err) {
      showToast(
        "error",
        "Team loading failed",
        err?.message ||
          "Unable to load team members."
      );
    }
  };

  useEffect(() => {
    loadLeads();
    loadTeam();
  }, []);

  /* =======================================================
     SINGLE LEAD
  ======================================================= */

  const updateForm = (
    field,
    value
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const resetSingleForm = () => {
    setForm(emptyForm);
  };

  const handleCreateLead = async (
    event
  ) => {
    event.preventDefault();

    if (saving) return;

    if (!form.name.trim()) {
      showToast(
        "error",
        "Name required",
        "Please enter the lead name."
      );
      return;
    }

    if (!form.mobile.trim()) {
      showToast(
        "error",
        "Mobile required",
        "Please enter the lead mobile number."
      );
      return;
    }

    try {
      setSaving(true);
      setError("");

      const payload = {
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        email: form.email.trim(),
        leadType: form.leadType.trim(),
        source: form.source.trim(),
        assignedTo:
          form.assignedTo || null,
      };

      await createManualLead(
        payload
      );

      resetSingleForm();

      await loadLeads(false);

      showToast(
        "success",
        "Lead created successfully",
        form.assignedTo
          ? "Lead has been created and assigned to the selected team member."
          : "Lead has been added to the unassigned lead pool."
      );
    } catch (err) {
      showToast(
        "error",
        "Lead creation failed",
        err?.message ||
          "Unable to create lead."
      );
    } finally {
      setSaving(false);
    }
  };

  /* =======================================================
     BULK IMPORT
  ======================================================= */

  const handleFileChange = (
    event
  ) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);
    setBulkFileName(file.name);

    const reader =
      new FileReader();

    reader.onload = (loadEvent) => {
      const text =
        loadEvent.target?.result || "";

      setBulkText(String(text));
    };

    reader.readAsText(file);
  };

  const previewRows = useMemo(() => {
    return parseLeadText(
      bulkText
    );
  }, [bulkText]);

  const validPreviewRows =
    useMemo(() => {
      return previewRows.filter(
        (lead) =>
          lead.name.trim() &&
          lead.mobile.trim()
      );
    }, [previewRows]);

  const invalidPreviewCount =
    Math.max(
      previewRows.length -
        validPreviewRows.length,
      0
    );

  const handleBulkImport = async () => {
    if (bulkSaving) return;

    if (!bulkText.trim()) {
      showToast(
        "error",
        "No data found",
        "Paste your Google Sheets data or select a CSV file first."
      );
      return;
    }

    const rows =
      validPreviewRows.map(
        (lead) => ({
          name: lead.name.trim(),
          mobile: lead.mobile.trim(),
          email:
            lead.email.trim(),
          leadType:
            lead.leadType.trim(),
          source:
            lead.source.trim(),
        })
      );

    if (!rows.length) {
      showToast(
        "error",
        "No valid leads",
        "Every lead must have at least a name and mobile number."
      );
      return;
    }

    try {
      setBulkSaving(true);
      setError("");

      /*
        Backend expects:
        {
          leads: [...]
        }
      */

      const response =
        await bulkCreateManualLeads({
          leads: rows,
        });

      const importedCount =
        response?.data?.createdCount ??
        response?.data?.count ??
        response?.createdCount ??
        response?.count ??
        rows.length;

      setBulkText("");
      setBulkFileName("");
      setSelectedFile(null);

      await loadLeads(false);

      showToast(
        "success",
        "Leads imported successfully",
        `${importedCount} lead${
          Number(importedCount) === 1
            ? ""
            : "s"
        } added to your lead pool.`
      );
    } catch (err) {
      showToast(
        "error",
        "Bulk import failed",
        err?.message ||
          "Unable to import leads."
      );
    } finally {
      setBulkSaving(false);
    }
  };

  /* =======================================================
     CSV TEMPLATE
  ======================================================= */

  const downloadTemplate = () => {
    const csv = [
      "name,mobile,email,lead_type,source",
      "Rashid,9878568798,rashid@gmail.com,Website,Google",
      "Raju,9854576879,,E-commerce,Facebook",
      "Rekha,8956874367,rekha@gmail.com,Website,Instagram",
    ].join("\n");

    const blob =
      new Blob([csv], {
        type: "text/csv;charset=utf-8;",
      });

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;
    link.download =
      "webqenzo-leads-template.csv";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);
  };

  /* =======================================================
     ASSIGN / REASSIGN
  ======================================================= */

  const handleAssignment = async (
    lead,
    assignedTo
  ) => {
    if (!lead?._id) return;

    try {
      const selectedMember =
        team.find(
          (member) =>
            member._id ===
            assignedTo
        );

      /*
        Empty string = unassign.
      */

      await assignLead(
        lead._id,
        assignedTo || ""
      );

      setLeads((current) =>
        current.map((item) => {
          if (
            item._id !==
            lead._id
          ) {
            return item;
          }

          return {
            ...item,
            assignedToId:
              selectedMember?._id ||
              "",
            assignedToName:
              selectedMember?.name ||
              "",
            assignedTo:
              selectedMember || null,
          };
        })
      );

      showToast(
        "success",
        assignedTo
          ? "Lead assigned"
          : "Lead unassigned",
        assignedTo
          ? `${lead.name} assigned to ${selectedMember?.name || "team member"}.`
          : `${lead.name} is now unassigned.`
      );
    } catch (err) {
      showToast(
        "error",
        "Assignment failed",
        err?.message ||
          "Unable to update lead assignment."
      );
    }
  };

  /* =======================================================
     FILTER
  ======================================================= */

  const filteredLeads =
    useMemo(() => {
      const value =
        search
          .trim()
          .toLowerCase();

      return leads.filter(
        (lead) => {
          const matchesSearch =
            !value ||
            lead.name
              ?.toLowerCase()
              .includes(value) ||
            lead.mobile
              ?.toLowerCase()
              .includes(value) ||
            lead.email
              ?.toLowerCase()
              .includes(value) ||
            lead.leadType
              ?.toLowerCase()
              .includes(value) ||
            lead.source
              ?.toLowerCase()
              .includes(value);

          const matchesAssignment =
            assignmentFilter ===
              "ALL" ||
            (assignmentFilter ===
              "UNASSIGNED" &&
              !lead.assignedToId) ||
            (assignmentFilter !==
              "UNASSIGNED" &&
              assignmentFilter !==
                "ALL" &&
              lead.assignedToId ===
                assignmentFilter);

          const matchesQuality =
            qualityFilter ===
              "ALL" ||
            lead.leadQuality ===
              qualityFilter;

          const matchesStatus =
            statusFilter ===
              "ALL" ||
            lead.leadStatus ===
              statusFilter;

          return (
            matchesSearch &&
            matchesAssignment &&
            matchesQuality &&
            matchesStatus
          );
        }
      );
    }, [
      leads,
      search,
      assignmentFilter,
      qualityFilter,
      statusFilter,
    ]);

  /* =======================================================
     COUNTS
  ======================================================= */

  const unassignedCount =
    leads.filter(
      (lead) =>
        !lead.assignedToId
    ).length;

  const assignedCount =
    leads.length -
    unassignedCount;

  const hotCount =
    leads.filter(
      (lead) =>
        lead.leadQuality ===
        "HOT"
    ).length;

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div className="space-y-6 pb-12">

      {/* ===================================================
          TOAST
      ================================================== */}

      {toast.visible && (
        <div
          className={`fixed right-5 top-5 z-[100] w-[min(420px,calc(100vw-40px))] overflow-hidden border bg-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] ${
            toast.type ===
            "success"
              ? "border-emerald-200"
              : "border-red-200"
          `}
        >
          <div className="flex items-start gap-3 p-4">

            <div
              className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                toast.type ===
                "success"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {toast.type ===
              "success" ? (
                <CheckCircle2
                  size={18}
                />
              ) : (
                <AlertCircle
                  size={18}
                />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-slate-900">
                {toast.title}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                setToast(
                  (current) => ({
                    ...current,
                    visible: false,
                  })
                )
              }
              className="text-slate-400 transition hover:text-slate-700"
            >
              <X size={16} />
            </button>
          </div>

          <div
            className={`h-0.5 ${
              toast.type ===
              "success"
                ? "bg-emerald-500"
                : "bg-red-500"
            }`}
          />
        </div>
      )}

      {/* ===================================================
          HERO
      ================================================== */}

      <section className="relative overflow-hidden border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.045)]">

        <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative flex flex-col gap-6 px-5 py-7 sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:px-9 lg:py-8">

          <div>

            <div className="mb-4 inline-flex items-center gap-2 border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.18em] text-cyan-700">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Lead Management
            </div>

            <h1 className="text-3xl font-bold tracking-[-0.045em] text-slate-950 sm:text-4xl">
              Add Leads
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Create new leads manually or
              import hundreds of leads from
              CSV / Google Sheets. These leads
              remain completely separate from
              Contacts.
            </p>

          </div>

          <button
            type="button"
            onClick={downloadTemplate}
            className="inline-flex min-h-[76px] shrink-0 items-center justify-center gap-3 border border-slate-200 bg-white px-7 text-sm font-bold text-slate-700 shadow-sm transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
          >
            <Download
              size={18}
            />

            <span>
              Download
              <br />
              Template
            </span>
          </button>

        </div>
      </section>

      {/* ===================================================
          STATS
      ================================================== */}

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        <div className="border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)]">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Total Leads
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-950">
            {leads.length}
          </p>
        </div>

        <div className="border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)]">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Unassigned
          </p>

          <p className="mt-2 text-2xl font-bold text-amber-600">
            {unassignedCount}
          </p>
        </div>

        <div className="border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)]">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Assigned
          </p>

          <p className="mt-2 text-2xl font-bold text-emerald-600">
            {assignedCount}
          </p>
        </div>

        <div className="border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.035)]">
          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
            Hot Leads
          </p>

          <p className="mt-2 text-2xl font-bold text-red-500">
            {hotCount}
          </p>
        </div>

      </section>

      {/* ===================================================
          MODE SWITCH
      ================================================== */}

      <section className="border border-slate-200 bg-white p-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.035)]">

        <div className="grid grid-cols-2 gap-1">

          <button
            type="button"
            onClick={() =>
              setActiveTab("single")
            }
            className={`flex min-h-12 items-center justify-center gap-2 text-sm font-bold transition ${
              activeTab ===
              "single"
                ? "bg-slate-950 text-white shadow-sm"
                : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            <UserPlus
              size={17}
            />

            Add Single Lead
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveTab("bulk")
            }
            className={`flex min-h-12 items-center justify-center gap-2 text-sm font-bold transition ${
              activeTab ===
              "bulk"
                ? "bg-slate-950 text-white shadow-sm"
                : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            <FileSpreadsheet
              size={17}
            />

            Bulk Import
          </button>

        </div>
      </section>

      {/* ===================================================
          SINGLE LEAD FORM
      ================================================== */}

      {activeTab ===
        "single" && (
        <section className="border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.035)]">

          <div className="border-b border-slate-100 px-5 py-5 sm:px-7">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center bg-cyan-50 text-cyan-600">
                <UserPlus
                  size={19}
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Create Lead
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  Add one lead to your separate
                  lead pool.
                </p>
              </div>

            </div>
          </div>

          <form
            onSubmit={
              handleCreateLead
            }
            className="p-5 sm:p-7"
          >

            <div className="grid gap-5 md:grid-cols-2">

              {/* NAME */}

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Name *
                </label>

                <input
                  value={form.name}
                  onChange={(event) =>
                    updateForm(
                      "name",
                      event.target.value
                    )
                  }
                  placeholder="Enter lead name"
                  className="h-12 w-full border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
                />
              </div>

              {/* MOBILE */}

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Mobile *
                </label>

                <input
                  value={form.mobile}
                  onChange={(event) =>
                    updateForm(
                      "mobile",
                      event.target.value
                    )
                  }
                  placeholder="9876543210"
                  inputMode="numeric"
                  className="h-12 w-full border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Email
                </label>

                <input
                  value={form.email}
                  onChange={(event) =>
                    updateForm(
                      "email",
                      event.target.value
                    )
                  }
                  type="email"
                  placeholder="lead@example.com"
                  className="h-12 w-full border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
                />
              </div>

              {/* LEAD TYPE */}

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Lead Type
                </label>

                <input
                  value={
                    form.leadType
                  }
                  onChange={(event) =>
                    updateForm(
                      "leadType",
                      event.target.value
                    )
                  }
                  placeholder="Website / E-commerce / Doctor"
                  className="h-12 w-full border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
                />
              </div>

              {/* SOURCE */}

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Source
                </label>

                <input
                  value={
                    form.source
                  }
                  onChange={(event) =>
                    updateForm(
                      "source",
                      event.target.value
                    )
                  }
                  placeholder="Google / Facebook / Instagram"
                  className="h-12 w-full border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
                />
              </div>

              {/* ASSIGN */}

              <div>
                <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Assign To
                </label>

                <div className="relative">

                  <select
                    value={
                      form.assignedTo
                    }
                    onChange={(event) =>
                      updateForm(
                        "assignedTo",
                        event.target.value
                      )
                    }
                    className="h-12 w-full appearance-none border border-slate-200 bg-slate-50 px-4 pr-10 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
                  >
                    <option value="">
                      Unassigned
                    </option>

                    {team.map(
                      (member) => (
                        <option
                          key={
                            member._id
                          }
                          value={
                            member._id
                          }
                        >
                          {member.name}
                        </option>
                      )
                    )}
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                </div>
              </div>

            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={
                  resetSingleForm
                }
                disabled={saving}
                className="h-12 border border-slate-200 px-6 text-sm font-bold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
              >
                Clear
              </button>

              <button
                type="submit"
                disabled={saving}
                className="inline-flex h-12 items-center justify-center gap-2 bg-slate-950 px-7 text-sm font-bold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    Creating...
                  </>
                ) : (
                  <>
                    <UserPlus
                      size={17}
                    />
                    Create Lead
                  </>
                )}
              </button>

            </div>

          </form>
        </section>
      )}

      {/* ===================================================
          BULK IMPORT
      ================================================== */}

      {activeTab ===
        "bulk" && (
        <section className="border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.035)]">

          <div className="border-b border-slate-100 px-5 py-5 sm:px-7">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">
                <FileSpreadsheet
                  size={19}
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Bulk Import Leads
                </h2>

                <p className="mt-0.5 text-xs text-slate-400">
                  CSV file ya Google Sheets se
                  copied data paste kar sakte ho.
                </p>
              </div>

            </div>

          </div>

          <div className="p-5 sm:p-7">

            {/* FILE UPLOAD */}

            <div className="grid gap-4 md:grid-cols-2">

              <label className="group flex min-h-[120px] cursor-pointer flex-col items-center justify-center border border-dashed border-slate-300 bg-slate-50 px-5 text-center transition hover:border-cyan-300 hover:bg-cyan-50/40">

                <input
                  type="file"
                  accept=".csv,text/csv"
                  className="hidden"
                  onChange={
                    handleFileChange
                  }
                />

                <Upload
                  size={22}
                  className="text-slate-400 transition group-hover:text-cyan-600"
                />

                <p className="mt-3 text-sm font-bold text-slate-700">
                  Choose CSV File
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  {bulkFileName ||
                    "CSV only"}
                </p>

              </label>

              <button
                type="button"
                onClick={
                  downloadTemplate
                }
                className="flex min-h-[120px] flex-col items-center justify-center border border-slate-200 bg-white px-5 text-center transition hover:border-cyan-200 hover:bg-cyan-50/40"
              >
                <Download
                  size={22}
                  className="text-cyan-600"
                />

                <p className="mt-3 text-sm font-bold text-slate-700">
                  Download CSV Template
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  name, mobile, email,
                  lead_type, source
                </p>
              </button>

            </div>

            {/* TEXT AREA */}

            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between">

                <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Paste Google Sheets / CSV Data
                </label>

                {bulkText && (
                  <button
                    type="button"
                    onClick={() => {
                      setBulkText("");
                      setBulkFileName("");
                      setSelectedFile(
                        null
                      );
                    }}
                    className="text-xs font-bold text-slate-400 hover:text-red-500"
                  >
                    Clear
                  </button>
                )}

              </div>

              <textarea
                value={bulkText}
                onChange={(event) =>
                  setBulkText(
                    event.target.value
                  )
                }
                rows={9}
                placeholder={`name,mobile,email,lead_type,source
Rashid,9878568798,rashid@gmail.com,Website,Google
Raju,9854576879,,E-commerce,Facebook
Rekha,8956874367,rekha@gmail.com,Website,Instagram`}
                className="w-full resize-y border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-6 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
              />

            </div>

            {/* PREVIEW */}

            {previewRows.length >
              0 && (
              <div className="mt-5 border border-slate-200 bg-slate-50">

                <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Import Preview
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Review data before importing.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">

                    <span className="inline-flex items-center gap-1.5 border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                      <CheckCircle2
                        size={12}
                      />
                      {validPreviewRows.length} valid
                    </span>

                    {invalidPreviewCount >
                      0 && (
                      <span className="inline-flex items-center gap-1.5 border border-red-200 bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-600">
                        <AlertCircle
                          size={12}
                        />
                        {invalidPreviewCount} invalid
                      </span>
                    )}

                  </div>

                </div>

                <div className="max-h-[300px] overflow-auto">

                  <table className="w-full min-w-[720px] text-left">

                    <thead>
                      <tr className="border-b border-slate-200 bg-white">

                        <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Name
                        </th>

                        <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Mobile
                        </th>

                        <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Email
                        </th>

                        <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Type
                        </th>

                        <th className="px-4 py-3 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          Source
                        </th>

                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">

                      {previewRows
                        .slice(0, 100)
                        .map(
                          (
                            lead,
                            index
                          ) => {

                            const valid =
                              lead.name.trim() &&
                              lead.mobile.trim();

                            return (
                              <tr
                                key={`${lead.mobile}-${index}`}
                                className="bg-white"
                              >

                                <td className="px-4 py-3 text-xs font-semibold text-slate-700">
                                  {lead.name ||
                                    "—"}
                                </td>

                                <td className="px-4 py-3 text-xs text-slate-600">
                                  {lead.mobile ||
                                    "—"}
                                </td>

                                <td className="px-4 py-3 text-xs text-slate-500">
                                  {lead.email ||
                                    "—"}
                                </td>

                                <td className="px-4 py-3 text-xs text-slate-500">
                                  {lead.leadType ||
                                    "—"}
                                </td>

                                <td className="px-4 py-3 text-xs text-slate-500">
                                  {lead.source ||
                                    "—"}
                                </td>

                              </tr>
                            );
                          }
                        )}

                    </tbody>

                  </table>

                </div>

                {previewRows.length >
                  100 && (
                  <p className="border-t border-slate-200 px-4 py-3 text-xs text-slate-400">
                    Showing first 100 rows
                    in preview. All valid
                    rows will be imported.
                  </p>
                )}

              </div>
            )}

            {/* IMPORT BUTTON */}

            <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-2 text-xs text-slate-400">

                <AlertCircle
                  size={14}
                />

                <span>
                  Imported leads remain
                  separate from Contacts.
                </span>

              </div>

              <button
                type="button"
                onClick={
                  handleBulkImport
                }
                disabled={
                  bulkSaving ||
                  validPreviewRows.length ===
                    0
                }
                className="inline-flex h-12 items-center justify-center gap-2 bg-slate-950 px-7 text-sm font-bold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {bulkSaving ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    Importing...
                  </>
                ) : (
                  <>
                    <Upload
                      size={17}
                    />
                    Import{" "}
                    {validPreviewRows.length ||
                      ""}{" "}
                    Leads
                  </>
                )}
              </button>

            </div>

          </div>
        </section>
      )}

      {/* ===================================================
          LEAD POOL
      ================================================== */}

      <section className="overflow-hidden border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.035)]">

        {/* HEADER */}

        <div className="border-b border-slate-100 px-5 py-5 sm:px-7">

          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center bg-slate-950 text-white">
                  <Users
                    size={18}
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    Lead Pool
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-400">
                    Manage imported and manually
                    created leads.
                  </p>
                </div>

              </div>

            </div>

            <button
              type="button"
              onClick={() =>
                loadLeads(false)
              }
              disabled={refreshing}
              className="inline-flex h-11 items-center justify-center gap-2 border border-slate-200 bg-white px-5 text-xs font-bold text-slate-600 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 disabled:opacity-50"
            >
              <RefreshCw
                size={15}
                className={
                  refreshing
                    ? "animate-spin"
                    : ""
                }
              />

              Refresh
            </button>

          </div>

          {/* FILTERS */}

          <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_190px_170px_170px]">

            {/* SEARCH */}

            <div className="relative">

              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                placeholder="Search name, mobile, email, type or source..."
                className="h-11 w-full border border-slate-200 bg-slate-50 pl-11 pr-4 text-xs font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-500/5"
              />

            </div>

            {/* ASSIGNMENT */}

            <div className="relative">

              <select
                value={
                  assignmentFilter
                }
                onChange={(event) =>
                  setAssignmentFilter(
                    event.target.value
                  )
                }
                className="h-11 w-full appearance-none border border-slate-200 bg-slate-50 px-4 pr-9 text-xs font-bold text-slate-600 outline-none focus:border-cyan-400 focus:bg-white"
              >
                <option value="ALL">
                  All Assignment
                </option>

                <option value="UNASSIGNED">
                  Unassigned
                </option>

                {team.map(
                  (member) => (
                    <option
                      key={
                        member._id
                      }
                      value={
                        member._id
                      }
                    >
                      {member.name}
                    </option>
                  )
                )}
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

            </div>

            {/* QUALITY */}

            <div className="relative">

              <select
                value={
                  qualityFilter
                }
                onChange={(event) =>
                  setQualityFilter(
                    event.target.value
                  )
                }
                className="h-11 w-full appearance-none border border-slate-200 bg-slate-50 px-4 pr-9 text-xs font-bold text-slate-600 outline-none focus:border-cyan-400 focus:bg-white"
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

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

            </div>

            {/* STATUS */}

            <div className="relative">

              <select
                value={
                  statusFilter
                }
                onChange={(event) =>
                  setStatusFilter(
                    event.target.value
                  )
                }
                className="h-11 w-full appearance-none border border-slate-200 bg-slate-50 px-4 pr-9 text-xs font-bold text-slate-600 outline-none focus:border-cyan-400 focus:bg-white"
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

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

            </div>

          </div>

          <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs font-medium text-slate-400">
              Showing{" "}
              <span className="font-bold text-slate-700">
                {
                  filteredLeads.length
                }
              </span>{" "}
              of{" "}
              <span className="font-bold text-slate-700">
                {leads.length}
              </span>{" "}
              leads
            </p>

            {(search ||
              assignmentFilter !==
                "ALL" ||
              qualityFilter !==
                "ALL" ||
              statusFilter !==
                "ALL") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setAssignmentFilter(
                    "ALL"
                  );
                  setQualityFilter(
                    "ALL"
                  );
                  setStatusFilter(
                    "ALL"
                  );
                }}
                className="text-left text-xs font-bold text-cyan-600 hover:text-cyan-700 sm:text-right"
              >
                Clear filters
              </button>
            )}

          </div>

        </div>

        {/* =================================================
            TABLE
        ================================================= */}

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
        ) : error &&
          leads.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">

            <div className="flex h-14 w-14 items-center justify-center bg-red-50 text-red-500">
              <AlertCircle
                size={23}
              />
            </div>

            <p className="mt-5 text-base font-bold text-slate-800">
              Unable to load leads
            </p>

            <p className="mt-1 max-w-md text-sm leading-6 text-slate-400">
              {error}
            </p>

            <button
              type="button"
              onClick={() =>
                loadLeads()
              }
              className="mt-5 inline-flex h-10 items-center gap-2 bg-slate-950 px-5 text-xs font-bold text-white"
            >
              <RefreshCw
                size={14}
              />
              Try Again
            </button>

          </div>
        ) : filteredLeads.length ===
          0 ? (
          <div className="flex min-h-[330px] flex-col items-center justify-center px-6 text-center">

            <div className="flex h-14 w-14 items-center justify-center bg-cyan-50 text-cyan-600">
              <UserRoundX
                size={23}
              />
            </div>

            <p className="mt-5 text-base font-bold text-slate-800">
              No leads found
            </p>

            <p className="mt-1 max-w-sm text-sm leading-6 text-slate-400">
              Upload a lead or change
              your filters to see leads
              here.
            </p>

          </div>
        ) : (
          <div className="overflow-x-auto">

            <table className="w-full min-w-[1200px] text-left">

              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80">

                  <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Lead
                  </th>

                  <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Type
                  </th>

                  <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Source
                  </th>

                  <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Quality
                  </th>

                  <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Status
                  </th>

                  <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Assigned To
                  </th>

                  <th className="px-5 py-4 text-right text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Created
                  </th>

                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                {filteredLeads.map(
                  (lead) => (
                    <tr
                      key={
                        lead._id
                      }
                      className="group transition hover:bg-slate-50/80"
                    >

                      {/* LEAD */}

                      <td className="px-5 py-5">

                        <div className="flex items-center gap-3">

                          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center bg-slate-950 text-xs font-bold text-white transition group-hover:bg-cyan-600">
                            {getInitials(
                              lead.name
                            )}

                            <span
                              className={`absolute -bottom-1 -right-1 h-2.5 w-2.5 border-2 border-white ${
                                lead.assignedToId
                                  ? "bg-emerald-400"
                                  : "bg-amber-400"
                              }`}
                            />
                          </div>

                          <div className="min-w-0">

                            <p className="max-w-[240px] truncate text-sm font-bold text-slate-900">
                              {lead.name}
                            </p>

                            <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-slate-400">
                              <Phone
                                size={11}
                              />
                              <span>
                                {lead.mobile ||
                                  "No mobile"}
                              </span>
                            </div>

                            {lead.email && (
                              <div className="mt-0.5 flex max-w-[240px] items-center gap-1.5 text-[11px] text-slate-400">
                                <Mail
                                  size={11}
                                />

                                <span className="truncate">
                                  {lead.email}
                                </span>
                              </div>
                            )}

                          </div>

                        </div>

                      </td>

                      {/* TYPE */}

                      <td className="px-5 py-5">

                        {lead.leadType ? (
                          <span className="inline-flex max-w-[160px] items-center gap-1.5 border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-600">
                            <Tag
                              size={11}
                            />

                            <span className="truncate">
                              {
                                lead.leadType
                              }
                            </span>
                          </span>
                        ) : (
                          <span className="text-xs text-slate-300">
                            Not set
                          </span>
                        )}

                      </td>

                      {/* SOURCE */}

                      <td className="px-5 py-5">

                        {lead.source ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                            <Globe2
                              size={12}
                              className="text-slate-400"
                            />

                            {
                              lead.source
                            }
                          </span>
                        ) : (
                          <span className="text-xs text-slate-300">
                            Not set
                          </span>
                        )}

                      </td>

                      {/* QUALITY */}

                      <td className="px-5 py-5">

                        <span
                          className={`inline-flex items-center border px-2.5 py-1 text-[10px] font-bold uppercase ${
                            lead.leadQuality ===
                            "HOT"
                              ? "border-red-200 bg-red-50 text-red-600"
                              : lead.leadQuality ===
                                "COLD"
                              ? "border-slate-200 bg-slate-100 text-slate-500"
                              : "border-amber-200 bg-amber-50 text-amber-600"
                          }`}
                        >
                          {
                            lead.leadQuality
                          }
                        </span>

                      </td>

                      {/* STATUS */}

                      <td className="px-5 py-5">

                        <span
                          className={`inline-flex items-center border px-2.5 py-1 text-[10px] font-bold uppercase ${
                            lead.leadStatus ===
                            "SUCCESSFUL"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                              : lead.leadStatus ===
                                "COLD"
                              ? "border-slate-200 bg-slate-100 text-slate-500"
                              : "border-cyan-200 bg-cyan-50 text-cyan-600"
                          }`}
                        >
                          {
                            lead.leadStatus
                          }
                        </span>

                      </td>

                      {/* ASSIGNMENT */}

                      <td className="px-5 py-5">

                        <div className="relative w-[190px]">

                          <select
                            value={
                              lead.assignedToId ||
                              ""
                            }
                            onChange={(
                              event
                            ) =>
                              handleAssignment(
                                lead,
                                event
                                  .target
                                  .value
                              )
                            }
                            className={`h-10 w-full appearance-none border px-3 pr-8 text-xs font-bold outline-none transition ${
                              lead.assignedToId
                                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                : "border-amber-200 bg-amber-50 text-amber-700"
                            }`}
                          >
                            <option value="">
                              Unassigned
                            </option>

                            {team.map(
                              (
                                member
                              ) => (
                                <option
                                  key={
                                    member._id
                                  }
                                  value={
                                    member._id
                                  }
                                >
                                  {member.name}
                                </option>
                              )
                            )}
                          </select>

                          <ChevronDown
                            size={13}
                            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 opacity-60"
                          />

                        </div>

                        <p className="mt-1.5 flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-slate-400">

                          {lead.assignedToId ? (
                            <>
                              <UserRoundCheck
                                size={10}
                              />

                              Assigned
                            </>
                          ) : (
                            <>
                              <UserRoundX
                                size={10}
                              />

                              Waiting for assignment
                            </>
                          )}

                        </p>

                      </td>

                      {/* CREATED */}

                      <td className="px-5 py-5 text-right">

                        <div className="inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-400">

                          <Clock3
                            size={11}
                          />

                          {lead.createdAt
                            ? new Date(
                                lead.createdAt
                              ).toLocaleDateString(
                                "en-IN",
                                {
                                  day: "2-digit",
                                  month:
                                    "short",
                                  year:
                                    "numeric",
                                }
                              )
                            : "—"}

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
  );
};

export default AdminLeads;