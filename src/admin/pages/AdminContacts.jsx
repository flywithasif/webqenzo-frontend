import { useEffect, useMemo, useState } from "react";
import {
  RefreshCw,
  Search,
  X,
  Pencil,
  Clock3,
  MessageSquare,
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

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">

        <div>
          <p className="text-sm font-semibold text-blue-600">
            CRM
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            My Leads
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage website contact enquiries and follow-ups.
          </p>
        </div>

        <button
          type="button"
          onClick={loadContacts}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
        >
          <RefreshCw
            size={16}
            className={loading ? "animate-spin" : ""}
          />

          Refresh
        </button>
      </div>

      {/* ERROR */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* FILTERS */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="grid gap-3 lg:grid-cols-[1fr_180px]">

          <div className="relative">

            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search name / mobile / email"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:bg-white"
            />

          </div>

          <select
            value={quality}
            onChange={(e) =>
              setQuality(e.target.value)
            }
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500"
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

      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {loading ? (
          <div className="p-12 text-center text-sm text-slate-500">
            Loading leads...
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="p-14 text-center">

            <MessageSquare
              size={25}
              className="mx-auto text-slate-300"
            />

            <p className="mt-4 font-semibold text-slate-800">
              No leads found
            </p>

          </div>
        ) : (

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1100px] text-left">

              <thead className="border-b border-slate-200 bg-slate-50">

                <tr>

                  <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                    Lead
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                    Lead Type
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                    Latest Comment
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                    Quality
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                    Next Follow-up
                  </th>

                  {isSuperAdmin && (
                    <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
                      Assigned To
                    </th>
                  )}

                  <th className="px-5 py-4 text-xs font-semibold uppercase text-slate-500">
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

                  return (
                    <tr
                      key={contact._id}
                      className="hover:bg-slate-50"
                    >

                      <td className="px-5 py-4">

                        <button
                          type="button"
                          onClick={() =>
                            openLead(contact)
                          }
                          className="text-left"
                        >

                          <p className="font-semibold text-slate-900 hover:text-blue-600">
                            {contact.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {contact.mobile}
                          </p>

                          <p className="text-xs text-slate-400">
                            {contact.email}
                          </p>

                        </button>

                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">
                        {contact.leadType || "—"}
                      </td>

                      <td className="max-w-[280px] px-5 py-4">

                        {lastComment ? (
                          <>
                            <p className="truncate text-sm text-slate-700">
                              {lastComment.message}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              {formatDateTime(
                                lastComment.createdAt
                              )}
                            </p>
                          </>
                        ) : (
                          <span className="text-sm text-slate-400">
                            No comments
                          </span>
                        )}

                      </td>

                      <td className="px-5 py-4">

                        <span
                          className={`font-bold ${
                            qualityClass[
                              contact.leadQuality
                            ] || "text-slate-500"
                          }`}
                        >
                          {contact.leadQuality || "WARM"}
                        </span>

                      </td>

                      <td className="px-5 py-4 text-sm text-slate-600">

                        {contact.doNotFollowUp ? (
                          <span className="text-slate-400">
                            Don't follow-up
                          </span>
                        ) : contact.nextFollowUpDate ? (
                          <>
                            <p>
                              {contact.nextFollowUpDate}
                            </p>

                            <p className="text-xs text-slate-400">
                              {contact.nextFollowUpTime ||
                                "Time not set"}
                            </p>
                          </>
                        ) : (
                          "Not scheduled"
                        )}

                      </td>

                      {isSuperAdmin && (
                        <td className="px-5 py-4">

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
                            className="rounded-lg border border-slate-200 px-3 py-2 text-xs"
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

                      <td className="px-5 py-4">

                        <button
                          type="button"
                          onClick={() =>
                            openLead(contact)
                          }
                          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600"
                        >
                          <Pencil size={15} />
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

      </div>

      {/* EDIT MODAL */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4">

          <div className="my-8 w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  {selected.name}
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  {selected.mobile} · {selected.email}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelected(null)
                }
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={19} />
              </button>

            </div>

            <div className="max-h-[70vh] space-y-5 overflow-y-auto p-6">

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">

                <p className="text-xs font-semibold uppercase text-slate-400">
                  Customer Message
                </p>

                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                  {selected.message || "—"}
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <div>

                  <label className="text-xs font-semibold uppercase text-slate-500">
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
                    className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="text-xs font-semibold uppercase text-slate-500">
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
                    className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm"
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

                  <label className="text-xs font-semibold uppercase text-slate-500">
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
                    className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm"
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

                <div>

                  <label className="text-xs font-semibold uppercase text-slate-500">
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
                    className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm disabled:bg-slate-100"
                  />

                </div>

                <div>

                  <label className="text-xs font-semibold uppercase text-slate-500">
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
                    className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm disabled:bg-slate-100"
                  />

                </div>

              </div>

              <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">

                <input
                  type="checkbox"
                  checked={crm.doNotFollowUp}
                  onChange={(e) =>
                    updateField(
                      "doNotFollowUp",
                      e.target.checked
                    )
                  }
                />

                <span className="text-sm font-medium text-slate-700">
                  Don't add follow-up
                </span>

              </label>

              {crm.leadStatus === "COLD" && (
                <div>

                  <label className="text-xs font-semibold uppercase text-red-500">
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
                    className="mt-2 w-full rounded-xl border border-red-200 bg-red-50/30 px-3 py-2.5 text-sm outline-none"
                  />

                </div>
              )}

              <div>

                <label className="text-xs font-semibold uppercase text-slate-500">
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
                  placeholder="Customer conversation / follow-up note..."
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                />

              </div>

              <button
                type="button"
                onClick={() =>
                  setHistoryOpen(true)
                }
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700"
              >
                <Clock3 size={16} />
                View Complete History
              </button>

            </div>

            <div className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">

              <button
                type="button"
                onClick={() =>
                  setSelected(null)
                }
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={saveLead}
                disabled={saving}
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {saving
                  ? "Updating..."
                  : "Update Lead"}
              </button>

            </div>

          </div>

        </div>
      )}

      {/* HISTORY */}
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
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/70 p-4">

      <div className="w-full max-w-xl rounded-2xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>

            <p className="text-xs font-semibold uppercase text-blue-600">
              Complete History
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900">
              {title}
            </h3>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
          >
            <X size={19} />
          </button>

        </div>

        <div className="max-h-[65vh] overflow-y-auto p-6">

          {history.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-400">
              No history yet.
            </p>
          ) : (
            <div className="space-y-5">

              {history.map((item) => (
                <div
                  key={
                    item._id ||
                    `${item.createdAt}-${item.message}`
                  }
                  className="relative border-l border-slate-200 pl-5"
                >

                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-blue-500" />

                  <p className="text-xs text-slate-400">
                    {formatDateTime(
                      item.createdAt
                    )}
                  </p>

                  <p className="mt-1 text-sm font-semibold capitalize">
                    {item.action?.replaceAll(
                      "_",
                      " "
                    )}
                  </p>

                  <p className="mt-1 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                    {item.message}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    By {item.adminName || "System"}
                  </p>

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
