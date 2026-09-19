import { useEffect, useState } from "react";

import {
  Plus,
  RefreshCw,
  Trash2,
  RotateCcw,
  X,
  UserRound,
  MessageSquare,
  History,
  UserCheck,
} from "lucide-react";

import {
  addQuoteComment,
  assignQuote,
  createQuote,
  deleteQuote,
  getDeletedQuotes,
  getQuotes,
  getStoredAdmin,
  getTeamMembers,
  restoreQuote,
  updateQuoteStatus,
} from "../utils/adminApi";

const statusOptions = [
  "new",
  "contacted",
  "in-progress",
  "completed",
  "closed",
];

const statusClass = {
  new: "bg-blue-50 text-blue-700",
  contacted: "bg-amber-50 text-amber-700",
  "in-progress":
    "bg-purple-50 text-purple-700",
  completed:
    "bg-emerald-50 text-emerald-700",
  closed:
    "bg-slate-100 text-slate-600",
};

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  existingWebsite: "",
  projectDescription: "",
  assignedTo: "",
};

const AdminQuotes = () => {
  const admin = getStoredAdmin();

  const isSuperAdmin =
    admin?.role === "SUPER_ADMIN";

  const canCreate =
    isSuperAdmin ||
    admin?.permissions?.includes(
      "quotes:create"
    );

  const canUpdate =
    isSuperAdmin ||
    admin?.permissions?.includes(
      "quotes:update"
    );

  const canDelete =
    isSuperAdmin ||
    admin?.permissions?.includes(
      "quotes:delete"
    );

  const [quotes, setQuotes] =
    useState([]);

  const [deletedQuotes, setDeletedQuotes] =
    useState([]);

  const [team, setTeam] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [selectedQuote, setSelectedQuote] =
    useState(null);

  const [showDeleted, setShowDeleted] =
    useState(false);

  const [showCreate, setShowCreate] =
    useState(false);

  const [form, setForm] =
    useState(emptyForm);

  const [saving, setSaving] =
    useState(false);

  const [comment, setComment] =
    useState("");

  const [commentSaving, setCommentSaving] =
    useState(false);

  const loadQuotes = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await getQuotes();

      setQuotes(
        response?.data || []
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadDeletedQuotes =
    async () => {
      if (!isSuperAdmin) return;

      try {
        const response =
          await getDeletedQuotes();

        setDeletedQuotes(
          response?.data || []
        );
      } catch (err) {
        setError(err.message);
      }
    };

  const loadTeam = async () => {
    if (!isSuperAdmin) return;

    try {
      const response =
        await getTeamMembers();

      setTeam(
        (response?.data || []).filter(
          (member) =>
            member.isActive
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadQuotes();
    loadTeam();
  }, []);

  const openCreate = () => {
    setForm(emptyForm);
    setError("");
    setShowCreate(true);
  };

  const closeCreate = () => {
    if (saving) return;

    setShowCreate(false);
    setForm(emptyForm);
  };

  const handleCreate = async (
    e
  ) => {
    e.preventDefault();

    setError("");
    setSaving(true);

    try {
      await createQuote({
        ...form,
        assignedTo:
          isSuperAdmin
            ? form.assignedTo || undefined
            : undefined,
      });

      await loadQuotes();

      closeCreate();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleStatus = async (
    id,
    status
  ) => {
    if (!canUpdate) return;

    try {
      const response =
        await updateQuoteStatus(
          id,
          status
        );

      setQuotes((current) =>
        current.map((quote) =>
          quote._id === id
            ? response.data
            : quote
        )
      );

      if (
        selectedQuote?._id === id
      ) {
        setSelectedQuote(
          response.data
        );
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleAssign = async (
    id,
    assignedTo
  ) => {
    if (!isSuperAdmin) return;

    try {
      const response =
        await assignQuote(
          id,
          assignedTo
        );

      setQuotes((current) =>
        current.map((quote) =>
          quote._id === id
            ? response.data
            : quote
        )
      );

      if (
        selectedQuote?._id === id
      ) {
        setSelectedQuote(
          response.data
        );
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (
    id
  ) => {
    if (!canDelete) return;

    const confirmed =
      window.confirm(
        "Move this lead to Deleted Leads? It will NOT be permanently deleted."
      );

    if (!confirmed) return;

    try {
      await deleteQuote(id);

      setQuotes((current) =>
        current.filter(
          (quote) =>
            quote._id !== id
        )
      );

      if (
        selectedQuote?._id === id
      ) {
        setSelectedQuote(null);
      }

      if (isSuperAdmin) {
        await loadDeletedQuotes();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRestore = async (
    id
  ) => {
    if (!isSuperAdmin) return;

    try {
      await restoreQuote(id);

      await loadDeletedQuotes();
      await loadQuotes();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleComment = async () => {
    if (
      !selectedQuote ||
      !comment.trim() ||
      !canUpdate
    ) {
      return;
    }

    try {
      setCommentSaving(true);

      const response =
        await addQuoteComment(
          selectedQuote._id,
          comment
        );

      setSelectedQuote(
        response.data
      );

      setQuotes((current) =>
        current.map((quote) =>
          quote._id ===
          selectedQuote._id
            ? response.data
            : quote
        )
      );

      setComment("");
    } catch (err) {
      setError(err.message);
    } finally {
      setCommentSaving(false);
    }
  };

  const displayQuotes =
    showDeleted
      ? deletedQuotes
      : quotes;

  return (
    <>
      <div className="space-y-6">
        {/* HEADER */}

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              CRM
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {showDeleted
                ? "Deleted Leads"
                : "Leads"}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {isSuperAdmin
                ? "Manage, assign and track every WebQenzo lead."
                : "Manage the leads assigned to you."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                loadQuotes();
                if (isSuperAdmin) {
                  loadDeletedQuotes();
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw
                size={16}
              />
              Refresh
            </button>

            {isSuperAdmin && (
              <button
                type="button"
                onClick={() => {
                  setShowDeleted(
                    (current) =>
                      !current
                  );

                  if (!showDeleted) {
                    loadDeletedQuotes();
                  }
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100"
              >
                {showDeleted
                  ? "Active Leads"
                  : "Deleted Leads"}
              </button>
            )}

            {canCreate &&
              !showDeleted && (
                <button
                  type="button"
                  onClick={openCreate}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600"
                >
                  <Plus size={17} />
                  Add Lead
                </button>
              )}
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* TABLE */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading && !showDeleted ? (
            <div className="p-10 text-center text-sm text-slate-500">
              Loading leads...
            </div>
          ) : displayQuotes.length ===
            0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <UserRound
                  size={21}
                />
              </div>

              <p className="mt-4 font-semibold text-slate-800">
                {showDeleted
                  ? "No deleted leads"
                  : "No leads found"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1250px] text-left">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Client
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Service
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Budget
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Assigned To
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Date
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {displayQuotes.map(
                    (quote) => (
                      <tr
                        key={
                          quote._id
                        }
                        className="hover:bg-slate-50/70"
                      >
                        <td className="px-5 py-4">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedQuote(
                                quote
                              )
                            }
                            className="text-left"
                          >
                            <p className="font-semibold text-slate-900 hover:text-blue-600">
                              {
                                quote.fullName
                              }
                            </p>

                            <p className="mt-0.5 text-xs text-slate-500">
                              {
                                quote.email
                              }
                            </p>
                          </button>
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-700">
                          {
                            quote.service
                          }
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-700">
                          {
                            quote.budget
                          }
                        </td>

                        <td className="px-5 py-4">
                          {showDeleted ? (
                            <span className="text-sm text-slate-600">
                              {quote.assignedToName ||
                                "Unassigned"}
                            </span>
                          ) : isSuperAdmin ? (
                            <select
                              value={
                                quote.assignedTo?._id ||
                                quote.assignedTo ||
                                ""
                              }
                              onChange={(
                                e
                              ) =>
                                handleAssign(
                                  quote._id,
                                  e
                                    .target
                                    .value
                                )
                              }
                              className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-medium text-slate-700 outline-none focus:border-blue-500"
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
                                    {
                                      member.name
                                    }
                                  </option>
                                )
                              )}
                            </select>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                              <UserCheck
                                size={
                                  14
                                }
                              />

                              {quote.assignedToName ||
                                "Unassigned"}
                            </span>
                          )}
                        </td>

                        <td className="px-5 py-4">
                          {showDeleted ? (
                            <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600">
                              Deleted
                            </span>
                          ) : (
                            <select
                              value={
                                quote.status
                              }
                              disabled={
                                !canUpdate
                              }
                              onChange={(
                                e
                              ) =>
                                handleStatus(
                                  quote._id,
                                  e
                                    .target
                                    .value
                                )
                              }
                              className={`rounded-full border-0 px-3 py-1.5 text-xs font-semibold outline-none ${
                                statusClass[
                                  quote
                                    .status
                                ] ||
                                "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {statusOptions.map(
                                (
                                  status
                                ) => (
                                  <option
                                    key={
                                      status
                                    }
                                    value={
                                      status
                                    }
                                  >
                                    {
                                      status
                                    }
                                  </option>
                                )
                              )}
                            </select>
                          )}
                        </td>

                        <td className="px-5 py-4 text-sm text-slate-500">
                          {quote.createdAt
                            ? new Date(
                                quote.createdAt
                              ).toLocaleString()
                            : "—"}
                        </td>

                        <td className="px-5 py-4 text-right">
                          {showDeleted ? (
                            <button
                              type="button"
                              onClick={() =>
                                handleRestore(
                                  quote._id
                                )
                              }
                              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"
                            >
                              <RotateCcw
                                size={
                                  15
                                }
                              />
                              Restore
                            </button>
                          ) : (
                            canDelete && (
                              <button
                                type="button"
                                onClick={() =>
                                  handleDelete(
                                    quote._id
                                  )
                                }
                                className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                                title="Move to deleted leads"
                              >
                                <Trash2
                                  size={
                                    17
                                  }
                                />
                              </button>
                            )
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* CREATE LEAD MODAL */}

      {showCreate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4">
          <div className="my-8 w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h3 className="font-bold text-slate-900">
                  Add New Lead
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Add a lead manually
                  to your CRM.
                </p>
              </div>

              <button
                type="button"
                onClick={closeCreate}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={19} />
              </button>
            </div>

            <form
              onSubmit={handleCreate}
              className="space-y-5 p-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  required
                  value={
                    form.fullName
                  }
                  onChange={(value) =>
                    setForm({
                      ...form,
                      fullName:
                        value,
                    })
                  }
                />

                <Field
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      email: value,
                    })
                  }
                />

                <Field
                  label="Phone"
                  required
                  value={form.phone}
                  onChange={(value) =>
                    setForm({
                      ...form,
                      phone: value,
                    })
                  }
                />

                <Field
                  label="Company"
                  value={
                    form.company
                  }
                  onChange={(value) =>
                    setForm({
                      ...form,
                      company:
                        value,
                    })
                  }
                />

                <Field
                  label="Service"
                  required
                  value={
                    form.service
                  }
                  onChange={(value) =>
                    setForm({
                      ...form,
                      service:
                        value,
                    })
                  }
                />

                <Field
                  label="Budget"
                  required
                  value={
                    form.budget
                  }
                  onChange={(value) =>
                    setForm({
                      ...form,
                      budget:
                        value,
                    })
                  }
                />

                <Field
                  label="Timeline"
                  required
                  value={
                    form.timeline
                  }
                  onChange={(value) =>
                    setForm({
                      ...form,
                      timeline:
                        value,
                    })
                  }
                />

                <Field
                  label="Existing Website"
                  value={
                    form.existingWebsite
                  }
                  onChange={(value) =>
                    setForm({
                      ...form,
                      existingWebsite:
                        value,
                    })
                  }
                />

                {isSuperAdmin && (
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Assign To
                    </label>

                    <select
                      value={
                        form.assignedTo
                      }
                      onChange={(e) =>
                        setForm({
                          ...form,
                          assignedTo:
                            e
                              .target
                              .value,
                        })
                      }
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
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
                            {
                              member.name
                            }
                          </option>
                        )
                      )}
                    </select>
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Description
                  </label>

                  <textarea
                    value={
                      form.projectDescription
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        projectDescription:
                          e.target
                            .value,
                      })
                    }
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={closeCreate}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 disabled:opacity-60"
                >
                  {saving
                    ? "Creating..."
                    : "Create Lead"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DETAIL MODAL */}

      {selectedQuote && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4">
          <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h3 className="font-bold text-slate-900">
                  Lead Details
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {selectedQuote.email}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedQuote(
                    null
                  )
                }
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-8 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Info
                  label="Full Name"
                  value={
                    selectedQuote.fullName
                  }
                />

                <Info
                  label="Phone"
                  value={
                    selectedQuote.phone
                  }
                />

                <Info
                  label="Company"
                  value={
                    selectedQuote.company ||
                    "Not provided"
                  }
                />

                <Info
                  label="Service"
                  value={
                    selectedQuote.service
                  }
                />

                <Info
                  label="Budget"
                  value={
                    selectedQuote.budget
                  }
                />

                <Info
                  label="Timeline"
                  value={
                    selectedQuote.timeline
                  }
                />

                <Info
                  label="Assigned To"
                  value={
                    selectedQuote.assignedToName ||
                    "Unassigned"
                  }
                />

                <Info
                  label="Created"
                  value={
                    selectedQuote.createdAt
                      ? new Date(
                          selectedQuote.createdAt
                        ).toLocaleString()
                      : "—"
                  }
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Project Description
                </p>

                <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                  {
                    selectedQuote.projectDescription
                  }
                </p>
              </div>

              {/* CONVERSATION */}

              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <MessageSquare
                    size={18}
                    className="text-blue-600"
                  />

                  <h4 className="font-bold text-slate-900">
                    Conversation &
                    Updates
                  </h4>
                </div>

                <div className="mt-4 space-y-3">
                  {(
                    selectedQuote.conversationHistory ||
                    []
                  ).length === 0 ? (
                    <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
                      No conversation
                      updates yet.
                    </p>
                  ) : (
                    (
                      selectedQuote.conversationHistory ||
                      []
                    ).map(
                      (item) => (
                        <div
                          key={
                            item._id
                          }
                          className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                        >
                          <div className="flex flex-col justify-between gap-2 sm:flex-row">
                            <p className="text-sm font-semibold text-slate-900">
                              {
                                item.adminName
                              }
                            </p>

                            <p className="text-xs text-slate-400">
                              {new Date(
                                item.createdAt
                              ).toLocaleString()}
                            </p>
                          </div>

                          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                            {
                              item.message
                            }
                          </p>
                        </div>
                      )
                    )
                  )}
                </div>

                {canUpdate && (
                  <div className="mt-4">
                    <textarea
                      value={
                        comment
                      }
                      onChange={(
                        e
                      ) =>
                        setComment(
                          e.target
                            .value
                        )
                      }
                      placeholder="Add conversation update..."
                      rows={3}
                      maxLength={
                        3000
                      }
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />

                    <div className="mt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={
                          handleComment
                        }
                        disabled={
                          commentSaving ||
                          !comment.trim()
                        }
                        className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 disabled:opacity-50"
                      >
                        {commentSaving
                          ? "Adding..."
                          : "Add Update"}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* STATUS HISTORY */}

              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <History
                    size={18}
                    className="text-purple-600"
                  />

                  <h4 className="font-bold text-slate-900">
                    Status History
                  </h4>
                </div>

                <div className="mt-4 space-y-3">
                  {(
                    selectedQuote.statusHistory ||
                    []
                  ).length === 0 ? (
                    <p className="text-sm text-slate-500">
                      No status history
                      available.
                    </p>
                  ) : (
                    (
                      selectedQuote.statusHistory ||
                      []
                    ).map(
                      (item) => (
                        <HistoryItem
                          key={
                            item._id
                          }
                          item={
                            item
                          }
                        />
                      )
                    )
                  )}
                </div>
              </div>

              {/* ASSIGNMENT HISTORY */}

              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <UserCheck
                    size={18}
                    className="text-emerald-600"
                  />

                  <h4 className="font-bold text-slate-900">
                    Assignment History
                  </h4>
                </div>

                <div className="mt-4 space-y-3">
                  {(
                    selectedQuote.assignmentHistory ||
                    []
                  ).length === 0 ? (
                    <p className="text-sm text-slate-500">
                      No assignment
                      history yet.
                    </p>
                  ) : (
                    (
                      selectedQuote.assignmentHistory ||
                      []
                    ).map(
                      (item) => (
                        <HistoryItem
                          key={
                            item._id
                          }
                          item={
                            item
                          }
                        />
                      )
                    )
                  )}
                </div>
              </div>

              {/* AUDIT */}

              {isSuperAdmin && (
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-bold text-slate-900">
                    Audit Trail
                  </h4>

                  <div className="mt-4 space-y-3">
                    {(
                      selectedQuote.auditLog ||
                      []
                    ).map(
                      (item) => (
                        <HistoryItem
                          key={
                            item._id
                          }
                          item={
                            item
                          }
                        />
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Field = ({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      {label}
    </label>

    <input
      type={type}
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      required={required}
      className="h-11 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
    />
  </div>
);

const Info = ({
  label,
  value,
}) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
      {label}
    </p>

    <p className="mt-1 break-words text-sm font-medium text-slate-800">
      {value || "—"}
    </p>
  </div>
);

const HistoryItem = ({
  item,
}) => (
  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
    <div className="flex flex-col justify-between gap-2 sm:flex-row">
      <p className="text-sm font-semibold text-slate-900">
        {item.adminName}
      </p>

      <p className="text-xs text-slate-400">
        {item.createdAt
          ? new Date(
              item.createdAt
            ).toLocaleString()
          : "—"}
      </p>
    </div>

    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
      {item.action}
    </p>

    <p className="mt-2 text-sm leading-6 text-slate-700">
      {item.message}
    </p>
  </div>
);

export default AdminQuotes;
