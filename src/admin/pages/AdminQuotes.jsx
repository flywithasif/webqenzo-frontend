import { useEffect, useState } from "react";
import {
  FileText,
  RefreshCw,
  Trash2,
  X,
} from "lucide-react";

import {
  deleteQuote,
  getQuotes,
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
  "in-progress": "bg-purple-50 text-purple-700",
  completed: "bg-emerald-50 text-emerald-700",
  closed: "bg-slate-100 text-slate-600",
};

const AdminQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedQuote, setSelectedQuote] =
    useState(null);

  const loadQuotes = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getQuotes();

      setQuotes(response?.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await updateQuoteStatus(id, status);

      setQuotes((current) =>
        current.map((quote) =>
          quote._id === id
            ? { ...quote, status }
            : quote
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Delete this quote request permanently?"
    );

    if (!confirmed) return;

    try {
      await deleteQuote(id);

      setQuotes((current) =>
        current.filter((quote) => quote._id !== id)
      );

      if (selectedQuote?._id === id) {
        setSelectedQuote(null);
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
              Enquiries
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Quote Requests
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Manage project enquiries submitted through
              your website.
            </p>
          </div>

          <button
            type="button"
            onClick={loadQuotes}
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
              Loading quote requests...
            </div>
          ) : quotes.length === 0 ? (
            <div className="p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <FileText size={21} />
              </div>

              <p className="mt-4 font-semibold text-slate-800">
                No quote requests yet
              </p>

              <p className="mt-1 text-sm text-slate-500">
                New quote enquiries will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
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
                  {quotes.map((quote) => (
                    <tr
                      key={quote._id}
                      className="hover:bg-slate-50/70"
                    >
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedQuote(quote)
                          }
                          className="text-left"
                        >
                          <p className="font-semibold text-slate-900 hover:text-blue-600">
                            {quote.fullName}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            {quote.email}
                          </p>
                        </button>
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-700">
                        {quote.service}
                      </td>

                      <td className="px-5 py-4 text-sm text-slate-700">
                        {quote.budget}
                      </td>

                      <td className="px-5 py-4">
                        <select
                          value={quote.status}
                          onChange={(e) =>
                            handleStatus(
                              quote._id,
                              e.target.value
                            )
                          }
                          className={`rounded-full border-0 px-3 py-1.5 text-xs font-semibold outline-none ${
                            statusClass[quote.status] ||
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
                        {quote.createdAt
                          ? new Date(
                              quote.createdAt
                            ).toLocaleDateString()
                          : "—"}
                      </td>

                      <td className="px-5 py-4 text-right">
                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(quote._id)
                          }
                          className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"
                          title="Delete"
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

      {selectedQuote && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h3 className="font-bold text-slate-900">
                  Quote Details
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {selectedQuote.email}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedQuote(null)
                }
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={19} />
              </button>
            </div>

            <div className="grid gap-5 p-6 sm:grid-cols-2">
              <Info
                label="Full Name"
                value={selectedQuote.fullName}
              />

              <Info
                label="Phone"
                value={selectedQuote.phone}
              />

              <Info
                label="Company"
                value={
                  selectedQuote.company || "Not provided"
                }
              />

              <Info
                label="Service"
                value={selectedQuote.service}
              />

              <Info
                label="Budget"
                value={selectedQuote.budget}
              />

              <Info
                label="Timeline"
                value={selectedQuote.timeline}
              />

              <Info
                label="Existing Website"
                value={
                  selectedQuote.existingWebsite ||
                  "Not provided"
                }
              />

              <Info
                label="Status"
                value={selectedQuote.status}
              />

              <div className="sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Project Description
                </p>

                <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                  {selectedQuote.projectDescription}
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

export default AdminQuotes;
