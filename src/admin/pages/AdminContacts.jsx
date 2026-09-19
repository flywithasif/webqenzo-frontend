import { useEffect, useState } from "react";

import {
  MessageSquare,
  RefreshCw,
  Trash2,
  RotateCcw,
  X,
  History,
} from "lucide-react";

import {
  addContactComment,
  deleteContact,
  getContacts,
  getDeletedContacts,
  restoreContact,
  updateContactStatus,
} from "../utils/adminApi";

const statusOptions = [
  "new",
  "read",
  "replied",
  "closed",
];

const statusClass = {
  new: "bg-blue-50 text-blue-700",
  read: "bg-amber-50 text-amber-700",
  replied:
    "bg-emerald-50 text-emerald-700",
  closed:
    "bg-slate-100 text-slate-600",
};

const AdminContacts = () => {
  const [contacts, setContacts] =
    useState([]);

  const [
    deletedContacts,
    setDeletedContacts,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [
    selectedContact,
    setSelectedContact,
  ] = useState(null);

  const [
    showDeleted,
    setShowDeleted,
  ] = useState(false);

  const [comment, setComment] =
    useState("");

  const [
    commentSaving,
    setCommentSaving,
  ] = useState(false);

  const loadContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const response =
        await getContacts();

      setContacts(
        response?.data || []
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadDeletedContacts =
    async () => {
      try {
        const response =
          await getDeletedContacts();

        setDeletedContacts(
          response?.data || []
        );
      } catch (err) {
        setError(err.message);
      }
    };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleStatus = async (
    id,
    status
  ) => {
    try {
      const response =
        await updateContactStatus(
          id,
          status
        );

      setContacts((current) =>
        current.map((contact) =>
          contact._id === id
            ? response.data
            : contact
        )
      );

      if (
        selectedContact?._id === id
      ) {
        setSelectedContact(
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
    const confirmed =
      window.confirm(
        "Move this contact to Deleted Contacts? It will NOT be permanently deleted."
      );

    if (!confirmed) return;

    try {
      await deleteContact(id);

      setContacts((current) =>
        current.filter(
          (contact) =>
            contact._id !== id
        )
      );

      if (
        selectedContact?._id === id
      ) {
        setSelectedContact(null);
      }

      await loadDeletedContacts();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRestore = async (
    id
  ) => {
    try {
      await restoreContact(id);

      await loadDeletedContacts();
      await loadContacts();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleComment = async () => {
    if (
      !selectedContact ||
      !comment.trim()
    ) {
      return;
    }

    try {
      setCommentSaving(true);

      const response =
        await addContactComment(
          selectedContact._id,
          comment
        );

      setSelectedContact(
        response.data
      );

      setContacts((current) =>
        current.map((contact) =>
          contact._id ===
          selectedContact._id
            ? response.data
            : contact
        )
      );

      setComment("");
    } catch (err) {
      setError(err.message);
    } finally {
      setCommentSaving(false);
    }
  };

  const list =
    showDeleted
      ? deletedContacts
      : contacts;

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Inbox
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              {showDeleted
                ? "Deleted Contacts"
                : "Contact Messages"}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Manage website contact
              enquiries.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                loadContacts();

                if (showDeleted) {
                  loadDeletedContacts();
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw
                size={16}
              />
              Refresh
            </button>

            <button
              type="button"
              onClick={() => {
                setShowDeleted(
                  (current) =>
                    !current
                );

                if (!showDeleted) {
                  loadDeletedContacts();
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100"
            >
              {showDeleted
                ? "Active Contacts"
                : "Deleted Contacts"}
            </button>
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading &&
          !showDeleted ? (
            <div className="p-10 text-center text-sm text-slate-500">
              Loading contact messages...
            </div>
          ) : list.length === 0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <MessageSquare
                  size={21}
                />
              </div>

              <p className="mt-4 font-semibold text-slate-800">
                No contact messages
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[950px] text-left">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Contact
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Subject
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
                  {list.map(
                    (contact) => (
                      <tr
                        key={
                          contact._id
                        }
                        className="hover:bg-slate-50/70"
                      >
                        <td className="px-5 py-4">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedContact(
                                contact
                              )
                            }
                            className="text-left"
                          >
                            <p className="font-semibold text-slate-900 hover:text-blue-600">
                              {
                                contact.name
                              }
                            </p>

                            <p className="mt-0.5 text-xs text-slate-500">
                              {
                                contact.email
                              }
                            </p>
                          </button>
                        </td>

                        <td className="max-w-xs px-5 py-4">
                          <p className="truncate text-sm text-slate-700">
                            {
                              contact.subject
                            }
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          {showDeleted ? (
                            <span className="rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600">
                              Deleted
                            </span>
                          ) : (
                            <select
                              value={
                                contact.status
                              }
                              onChange={(
                                e
                              ) =>
                                handleStatus(
                                  contact._id,
                                  e
                                    .target
                                    .value
                                )
                              }
                              className={`rounded-full border-0 px-3 py-1.5 text-xs font-semibold outline-none ${
                                statusClass[
                                  contact
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
                          {contact.createdAt
                            ? new Date(
                                contact.createdAt
                              ).toLocaleString()
                            : "—"}
                        </td>

                        <td className="px-5 py-4 text-right">
                          {showDeleted ? (
                            <button
                              type="button"
                              onClick={() =>
                                handleRestore(
                                  contact._id
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
                            <button
                              type="button"
                              onClick={() =>
                                handleDelete(
                                  contact._id
                                )
                              }
                              className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                            >
                              <Trash2
                                size={
                                  17
                                }
                              />
                            </button>
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

      {selectedContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h3 className="font-bold text-slate-900">
                  Contact Details
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {
                    selectedContact.email
                  }
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedContact(
                    null
                  )
                }
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-7 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Info
                  label="Name"
                  value={
                    selectedContact.name
                  }
                />

                <Info
                  label="Email"
                  value={
                    selectedContact.email
                  }
                />

                <Info
                  label="Subject"
                  value={
                    selectedContact.subject
                  }
                />

                <Info
                  label="Status"
                  value={
                    selectedContact.status
                  }
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Message
                </p>

                <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                  {
                    selectedContact.message
                  }
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <MessageSquare
                    size={18}
                    className="text-blue-600"
                  />

                  <h4 className="font-bold text-slate-900">
                    Conversation
                  </h4>
                </div>

                <div className="mt-4 space-y-3">
                  {(
                    selectedContact.conversationHistory ||
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

                  {(
                    selectedContact.conversationHistory ||
                    []
                  ).length === 0 && (
                    <p className="rounded-xl bg-slate-50 p-4 text-sm text-slate-500">
                      No conversation
                      updates yet.
                    </p>
                  )}
                </div>

                {!showDeleted && (
                  <div className="mt-4">
                    <textarea
                      value={comment}
                      onChange={(e) =>
                        setComment(
                          e.target
                            .value
                        )
                      }
                      placeholder="Add conversation update..."
                      rows={3}
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
                    selectedContact.statusHistory ||
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

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

export default AdminContacts;
