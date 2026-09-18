import { useEffect, useState } from "react";
import {
  FileText,
  MessageSquare,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

import StatCard from "../components/StatCard";
import { getDashboard } from "../utils/adminApi";

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getDashboard();

      setData(response?.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  const stats = data?.stats || {};

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold text-blue-600">
            Overview
          </p>

          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Here's what's happening across your enquiries.
          </p>
        </div>

        <button
          type="button"
          onClick={loadDashboard}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
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

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Quotes"
          value={loading ? "—" : stats.totalQuotes ?? 0}
          icon={FileText}
          description="All quote requests"
        />

        <StatCard
          title="New Quotes"
          value={loading ? "—" : stats.newQuotes ?? 0}
          icon={TrendingUp}
          description="Need your attention"
        />

        <StatCard
          title="Total Contacts"
          value={loading ? "—" : stats.totalContacts ?? 0}
          icon={MessageSquare}
          description="All contact messages"
        />

        <StatCard
          title="New Contacts"
          value={loading ? "—" : stats.newContacts ?? 0}
          icon={TrendingUp}
          description="Unread enquiries"
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <TrendingUp size={19} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Workspace overview
            </h3>

            <p className="text-sm text-slate-500">
              Your admin backend is connected and ready.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-500">
              Quote pipeline
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Active
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-500">
              Contact inbox
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Active
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-500">
              Authentication
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Protected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
