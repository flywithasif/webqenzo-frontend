import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Upload,
  UserPlus,
  FileSpreadsheet,
  ClipboardPaste,
  Download,
  Users,
  CheckCircle2,
  AlertCircle,
  Trash2,
} from "lucide-react";

import {
  createManualLead,
  bulkCreateManualLeads,
  getTeamMembers,
} from "../utils/adminApi";

const emptyLead = {
  name: "",
  mobile: "",
  email: "",
  leadType: "Website Development",
  source: "Manual",
  assignedTo: "",
};

const parseRows = (text) => {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return [];

  const firstLine = lines[0];

  const delimiter = firstLine.includes("\t")
    ? "\t"
    : ",";

  const headers = firstLine
    .split(delimiter)
    .map((item) =>
      item
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
    );

  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i]
      .split(delimiter)
      .map((item) =>
        item.trim().replace(/^"|"$/g, "")
      );

    const row = {};

    headers.forEach(
      (header, index) => {
        row[header] =
          values[index] || "";
      }
    );

    rows.push(row);
  }

  return rows;
};

const normalizeLead = (row) => {
  const name =
    row.name ||
    row.full_name ||
    row.customer_name ||
    "";

  const mobile =
    row.mobile ||
    row.phone ||
    row.phone_number ||
    row.contact_number ||
    "";

  const email =
    row.email ||
    row.email_address ||
    "";

  const leadType =
    row.lead_type ||
    row.service ||
    "Website Development";

  return {
    name: name.trim(),
    mobile: mobile.trim(),
    email: email.trim(),
    leadType: leadType.trim(),
    source:
      row.source?.trim() ||
      "Bulk Import",
  };
};

const AdminLeads = () => {
  const [mode, setMode] =
    useState("single");

  const [form, setForm] =
    useState(emptyLead);

  const [team, setTeam] =
    useState([]);

  const [bulkText, setBulkText] =
    useState("");

  const [preview, setPreview] =
    useState([]);

  const [loadingTeam, setLoadingTeam] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  useEffect(() => {
    const loadTeam = async () => {
      try {
        setLoadingTeam(true);

        const response =
          await getTeamMembers();

        setTeam(
          (response?.data || []).filter(
            (member) =>
              member?.role ===
                "TEAM_ADMIN" &&
              member?.isActive !== false
          )
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingTeam(false);
      }
    };

    loadTeam();
  }, []);

  const validPreview = useMemo(() => {
    return preview.filter(
      (lead) =>
        lead.name &&
        lead.mobile
    );
  }, [preview]);

  const invalidPreview = useMemo(() => {
    return preview.filter(
      (lead) =>
        !lead.name ||
        !lead.mobile
    );
  }, [preview]);

  const handleSingleChange = (
    field,
    value
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSingleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!form.name.trim()) {
      setError("Lead name is required.");
      return;
    }

    if (!form.mobile.trim()) {
      setError(
        "Mobile number is required."
      );
      return;
    }

    try {
      setSaving(true);

      await createManualLead({
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        email: form.email.trim(),
        leadType:
          form.leadType.trim(),
        source:
          form.source.trim() ||
          "Manual",
        assignedTo:
          form.assignedTo || null,
      });

      setForm(emptyLead);

      setMessage(
        "Lead created successfully."
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleBulkPreview = () => {
    setMessage("");
    setError("");

    if (!bulkText.trim()) {
      setError(
        "Please paste CSV or Google Sheets data first."
      );
      return;
    }

    const rows =
      parseRows(bulkText);

    const normalized =
      rows.map(normalizeLead);

    setPreview(normalized);

    if (!normalized.length) {
      setError(
        "No valid rows found."
      );
    }
  };

  const handleBulkSubmit = async () => {
    setMessage("");
    setError("");

    if (!validPreview.length) {
      setError(
        "There are no valid leads to upload."
      );
      return;
    }

    try {
      setSaving(true);

      await bulkCreateManualLeads({
        leads: validPreview,
        assignedTo:
          form.assignedTo || null,
      });

      setMessage(
        `${validPreview.length} lead(s) uploaded successfully.`
      );

      setBulkText("");
      setPreview([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const downloadTemplate = () => {
    const csv =
      "name,mobile,email,lead_type,source\n" +
      "Rahul Sharma,9876543210,rahul@example.com,Website Development,Google\n" +
      "Aman Verma,9876543211,aman@example.com,Shopify Development,Instagram\n";

    const blob = new Blob(
      [csv],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

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

  const clearBulk = () => {
    setBulkText("");
    setPreview([]);
    setMessage("");
    setError("");
  };

  return (
    <div className="space-y-6">
      {/* =========================================
          PAGE HEADER
      ========================================= */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={18} />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Lead Management
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
              Add Leads
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Create new leads manually or
              upload multiple leads at once.
              These leads stay in the separate
              Lead system and are not added to
              Contacts.
            </p>
          </div>

          <button
            type="button"
            onClick={downloadTemplate}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <Download size={16} />
            Download Template
          </button>
        </div>
      </div>

      {/* =========================================
          MESSAGES
      ========================================= */}

      {message && (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          <CheckCircle2 size={18} />
          {message}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle size={18} />
          {error}
        </div>
      )}

      {/* =========================================
          MODE SWITCH
      ========================================= */}

      <div className="flex rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
        <button
          type="button"
          onClick={() => {
            setMode("single");
            setError("");
            setMessage("");
          }}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            mode === "single"
              ? "bg-slate-950 text-white shadow-sm"
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          <UserPlus size={17} />
          Add Single Lead
        </button>

        <button
          type="button"
          onClick={() => {
            setMode("bulk");
            setError("");
            setMessage("");
          }}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
            mode === "bulk"
              ? "bg-slate-950 text-white shadow-sm"
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          <FileSpreadsheet size={17} />
          Bulk Import
        </button>
      </div>

      {/* =========================================
          SINGLE LEAD
      ========================================= */}

      {mode === "single" && (
        <form
          onSubmit={
            handleSingleSubmit
          }
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="mb-7">
            <h2 className="text-lg font-bold text-slate-950">
              Create Lead
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Add one lead to your separate
              lead pool.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Name *
              </label>

              <input
                value={form.name}
                onChange={(e) =>
                  handleSingleChange(
                    "name",
                    e.target.value
                  )
                }
                placeholder="Enter lead name"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mobile *
              </label>

              <input
                value={form.mobile}
                onChange={(e) =>
                  handleSingleChange(
                    "mobile",
                    e.target.value
                  )
                }
                placeholder="9876543210"
                inputMode="tel"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  handleSingleChange(
                    "email",
                    e.target.value
                  )
                }
                placeholder="lead@example.com"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Lead Type
              </label>

              <input
                value={form.leadType}
                onChange={(e) =>
                  handleSingleChange(
                    "leadType",
                    e.target.value
                  )
                }
                placeholder="Website Development"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Source
              </label>

              <input
                value={form.source}
                onChange={(e) =>
                  handleSingleChange(
                    "source",
                    e.target.value
                  )
                }
                placeholder="Google / Instagram / Manual"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Assign Team Member
              </label>

              <select
                value={form.assignedTo}
                onChange={(e) =>
                  handleSingleChange(
                    "assignedTo",
                    e.target.value
                  )
                }
                disabled={loadingTeam}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
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
          </div>

          <div className="mt-7 flex justify-end border-t border-slate-100 pt-6">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <UserPlus size={17} />

              {saving
                ? "Creating..."
                : "Create Lead"}
            </button>
          </div>
        </form>
      )}

      {/* =========================================
          BULK IMPORT
      ========================================= */}

      {mode === "bulk" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-slate-950">
                Bulk Import Leads
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                CSV file ya Google Sheets se
                copied data paste kar sakte ho.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
              <div className="flex gap-3">
                <ClipboardPaste
                  size={19}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <div>
                  <p className="text-sm font-semibold text-blue-900">
                    Recommended columns
                  </p>

                  <p className="mt-1 text-xs leading-5 text-blue-700">
                    name, mobile, email,
                    lead_type, source
                  </p>
                </div>
              </div>
            </div>

            <textarea
              value={bulkText}
              onChange={(e) =>
                setBulkText(e.target.value)
              }
              placeholder={`name,mobile,email,lead_type,source
Rahul Sharma,9876543210,rahul@example.com,Website Development,Google
Aman Verma,9876543211,aman@example.com,Shopify Development,Instagram`}
              className="mt-6 min-h-[260px] w-full resize-y rounded-2xl border border-slate-200 bg-slate-50/50 p-4 font-mono text-xs leading-6 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            />

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={clearBulk}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                <Trash2 size={16} />
                Clear
              </button>

              <button
                type="button"
                onClick={handleBulkPreview}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                <Upload size={16} />
                Preview Leads
              </button>
            </div>
          </div>

          {/* =======================================
              BULK SETTINGS
          ======================================= */}

          {preview.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Total Rows
                  </p>

                  <p className="mt-2 text-2xl font-bold text-slate-950">
                    {preview.length}
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Valid
                  </p>

                  <p className="mt-2 text-2xl font-bold text-emerald-700">
                    {validPreview.length}
                  </p>
                </div>

                <div className="rounded-2xl bg-red-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
                    Invalid
                  </p>

                  <p className="mt-2 text-2xl font-bold text-red-700">
                    {invalidPreview.length}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Assign Imported Leads To
                </label>

                <select
                  value={form.assignedTo}
                  onChange={(e) =>
                    handleSingleChange(
                      "assignedTo",
                      e.target.value
                    )
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="">
                    Keep Unassigned
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

              <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                        #
                      </th>

                      <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Name
                      </th>

                      <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Mobile
                      </th>

                      <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Email
                      </th>

                      <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Lead Type
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {preview
                      .slice(0, 100)
                      .map(
                        (lead, index) => {
                          const valid =
                            lead.name &&
                            lead.mobile;

                          return (
                            <tr
                              key={`${index}-${lead.mobile}`}
                              className={
                                valid
                                  ? "bg-white"
                                  : "bg-red-50/50"
                              }
                            >
                              <td className="px-4 py-3 text-xs text-slate-400">
                                {index + 1}
                              </td>

                              <td className="px-4 py-3 text-sm font-semibold text-slate-800">
                                {lead.name ||
                                  "Missing"}
                              </td>

                              <td className="px-4 py-3 text-sm text-slate-600">
                                {lead.mobile ||
                                  "Missing"}
                              </td>

                              <td className="px-4 py-3 text-sm text-slate-500">
                                {lead.email ||
                                  "—"}
                              </td>

                              <td className="px-4 py-3 text-sm text-slate-500">
                                {lead.leadType ||
                                  "—"}
                              </td>
                            </tr>
                          );
                        }
                      )}
                  </tbody>
                </table>
              </div>

              {preview.length > 100 && (
                <p className="mt-3 text-xs text-slate-400">
                  Showing first 100 rows in
                  preview. All valid rows will be
                  submitted.
                </p>
              )}

              <div className="mt-6 flex justify-end border-t border-slate-100 pt-6">
                <button
                  type="button"
                  onClick={handleBulkSubmit}
                  disabled={
                    saving ||
                    !validPreview.length
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Upload size={17} />

                  {saving
                    ? "Uploading..."
                    : `Upload ${validPreview.length} Lead${
                        validPreview.length === 1
                          ? ""
                          : "s"
                      }`}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminLeads;
