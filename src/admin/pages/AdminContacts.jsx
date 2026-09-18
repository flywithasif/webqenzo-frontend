import { useEffect, useState } from "react";
import {
  MessageSquare,
  RefreshCw,
  Trash2,
  X,
} from "lucide-react";

import {
  deleteContact,
  getContacts,
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
  replied: "bg-emerald-50 text-emerald-700",
  closed: "bg-slate-100 text-slate-600",
};

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedContact, setSelectedContact] =
    useState(null);

  const loadContacts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getContacts();

      setContacts(response?.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await updateContactStatus(id, status);

      setContacts((current) =>
        current.map((contact) =>
          contact._id === id
            ? { ...contact, status }
            : contact
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Delete this contact message permanently?"
    );

    if (!confirmed) return;

    try {
      await deleteContact(id);

      setContacts((current) =>
        current.filter(
          (contact) => contact._id !== id
        )
      );

      if (selectedContact?._id === id) {
        setSelectedContact(null);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Inbox
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Contact Messages
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Manage messages received through your contact
              form.
            </p>
          </div>

          <button
            type="button"
            onClick={loadContacts}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <RefreshCw
              size={16}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-10 text-center text-sm text-slate-500">
              Loading contact messages...
            </div>
          ) : contacts.length === 0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <MessageSquare size={21} />
              </div>

              <p className="mt-4 font-semibold text-slate-800">
                No messages yet
              </p>

              <p className="mt-1 text-sm text-slate-500">
                New contact messages will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left">
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
                  {contacts.map((contact) => (
                    <tr
                      key={contact._id}
                      className="hover:bg-slate-50/70"
                    >
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedContact(contact)
                          }
                          className="text-left"
                        >
                          <p className="font-semibold text-slate-900 hover:text-blue-600">
                            {contact.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            {contact.email}
                          </p>
                        </button>
                      </td>

                      <td className="max-w-xs px-5 py-4">
                        <p className="truncate text-sm text-slate-700">
                          {contact.subject}
                        </p>
                      </td>

                      <td className="px-5 py-4">
                        <select
                          value={contact.status}
                          onChange={(e) =>
                            handleStatus(
                              contact._id,
                              e.target.value
                            )
                          }
                          className={`rounded-full border-0 px-3 py-1.5 text-xs font-semibold outline-none ${
                            statusClass[
                              contact.status
                            ] ||
                            "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {statusOptions.map(
                            (status) => (
                              <option
                                key={status}
                                value={status}
                              >
                                {status}
                              </option>
                            )
                          )}
                        </select>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-500">
                        {contact.createdAt
                          ? new Date(
                              contact.createdAt
                            ).toLocaleDateString()
                          : "—"}
                      </td>

                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(contact._id)
                          }
                          className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={17} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {selectedContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h3 className="font-bold text-slate-900">
                  Contact Details
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {selectedContact.email}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedContact(null)
                }
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-6 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <Info
                  label="Name"
                  value={selectedContact.name}
                />

                <Info
                  label="Email"
                  value={selectedContact.email}
                />

                <Info
                  label="Subject"
                  value={selectedContact.subject}
                />

                <Info
                  label="Status"
                  value={selectedContact.status}
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Message
                </p>

                <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-700">
                  {selectedContact.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
      {label}
    </p>

    <p className="mt-1 break-words text-sm font-medium text-slate-800">
      {value || "—"}
    </p>
  </div>
);

export default AdminContacts;
