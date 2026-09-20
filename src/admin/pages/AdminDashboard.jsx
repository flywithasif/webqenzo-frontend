import { useEffect, useState } from "react";
import {
  FileText,
  MessageSquare,
  RefreshCw,
  TrendingUp,
  ArrowUpRight,
  Activity,
  CheckCircle2,
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
    <div className="space-y-6 pb-8">
      {/* =========================================
          HERO / PAGE HEADER
      ========================================== */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-blue-50/80 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-56 w-56 rounded-full bg-slate-100/70 blur-3xl" />

        <div className="relative flex flex-col gap-6 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between lg:p-7">
          <div>
            {/* Label */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Overview
            </div>

            <h1 className="text-2xl font-bold tracking-[-0.035em] text-slate-950 sm:text-3xl">
              Dashboard
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Keep track of your quotes, enquiries and overall
              workspace activity from one place.
            </p>
          </div>

          {/* Refresh */}
          <button
            type="button"
            onClick={loadDashboard}
            disabled={loading}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              size={16}
              strokeWidth={1.9}
              className={loading ? "animate-spin" : ""}
            />

            Refresh Data
          </button>
        </div>
      </section>

      {/* =========================================
          ERROR
      ========================================== */}
      {error && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-600 shadow-sm">
          <Activity
            size={18}
            className="mt-0.5 shrink-0"
          />

          <span className="font-medium">
            {error}
          </span>
        </div>
      )}

      {/* =========================================
          STATS
      ========================================== */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Key Metrics
            </p>

            <h2 className="mt-1 text-base font-bold tracking-tight text-slate-900">
              Workspace performance
            </h2>
          </div>

          <div className="hidden items-center gap-1.5 text-[10px] font-semibold text-emerald-600 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live data
          </div>
        </div>

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
      </section>

      {/* =========================================
          WORKSPACE OVERVIEW
      ========================================== */}
      <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_6px_25px_rgba(15,23,42,0.04)]">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Activity
                size={19}
                strokeWidth={1.9}
              />
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Workspace overview
              </h3>

              <p className="mt-0.5 text-xs text-slate-400">
                Current status of your admin workspace.
              </p>
            </div>
          </div>

          <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Connected
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid gap-3 p-5 sm:grid-cols-3 sm:p-6">
          {/* Quote Pipeline */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/30">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                  Quote Pipeline
                </p>

                <p className="mt-2 text-sm font-bold text-slate-900">
                  Active
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  Quote requests are being processed.
                </p>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <FileText size={16} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1 text-[10px] font-semibold text-blue-600">
              View pipeline
              <ArrowUpRight size={12} />
            </div>
          </div>

          {/* Contact Inbox */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/30">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                  Contact Inbox
                </p>

                <p className="mt-2 text-sm font-bold text-slate-900">
                  Active
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  Website enquiries are being received.
                </p>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <MessageSquare size={16} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1 text-[10px] font-semibold text-blue-600">
              View enquiries
              <ArrowUpRight size={12} />
            </div>
          </div>

          {/* Authentication */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-200 hover:border-emerald-100 hover:bg-emerald-50/30">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                  Authentication
                </p>

                <p className="mt-2 text-sm font-bold text-slate-900">
                  Protected
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-400">
                  Admin access is protected and active.
                </p>
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                <CheckCircle2 size={16} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
              Security active
              <CheckCircle2 size={12} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
