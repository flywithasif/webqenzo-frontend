import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Users,
  LogOut,
  ExternalLink,
  X,
} from "lucide-react";

import { adminLogout } from "../utils/adminApi";

const AdminSidebar = ({ mobileOpen, onClose }) => {
  const navigate = useNavigate();

  const admin = JSON.parse(
    localStorage.getItem("webqenzo_admin") || "null"
  );

  const isSuperAdmin = admin?.role === "SUPER_ADMIN";

  const navigation = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Quotes",
      path: "/admin/quotes",
      icon: FileText,
    },
    {
      name: "Contacts",
      path: "/admin/contacts",
      icon: MessageSquare,
    },
  ];

  if (isSuperAdmin) {
    navigation.push({
      name: "Team",
      path: "/admin/team",
      icon: Users,
    });
  }

  const handleLogout = () => {
    adminLogout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <button
          type="button"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-[2px] lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[280px] flex-col overflow-hidden border-r border-slate-800/80 bg-[#07101f] text-white shadow-2xl shadow-slate-950/20 transition-transform duration-300 ease-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ================================
            Brand Header
        ================================= */}
        <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-white/[0.07] px-5">
          <div className="flex items-center gap-3">
            {/* Brand Mark */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[13px] font-extrabold tracking-tight text-slate-950 shadow-lg shadow-black/20">
              WQ

              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-[#07101f]" />
            </div>

            {/* Brand Name */}
            <div>
              <div className="text-[18px] font-bold tracking-[-0.03em]">
                Web<span className="text-cyan-400">Qenzo</span>
              </div>

              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Admin Panel
              </p>
            </div>
          </div>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition-all duration-200 hover:bg-white/[0.06] hover:text-white active:scale-95 lg:hidden"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* ================================
            Admin Profile
        ================================= */}
        <div className="shrink-0 border-b border-white/[0.07] px-5 py-5">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.035] p-3.5">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-blue-900/20">
                {admin?.name?.charAt(0)?.toUpperCase() || "A"}

                <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#101a2b]" />
              </div>

              {/* Details */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-white">
                  {admin?.name || "Admin"}
                </p>

                <p className="mt-0.5 truncate text-[11px] text-slate-500">
                  {admin?.email || ""}
                </p>
              </div>
            </div>

            {/* Role */}
            <div className="mt-3">
              <span className="inline-flex items-center rounded-full border border-cyan-400/10 bg-cyan-400/[0.07] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-300">
                {admin?.role || "ADMIN"}
              </span>
            </div>
          </div>
        </div>

        {/* ================================
            Navigation
        ================================= */}
        <nav className="flex-1 overflow-y-auto px-3 py-5 [scrollbar-width:thin] [scrollbar-color:#334155_transparent]">
          <p className="mb-3 px-3 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-600">
            Management
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3 rounded-xl px-3.5 py-3 text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white/[0.09] text-white shadow-sm"
                        : "text-slate-500 hover:bg-white/[0.045] hover:text-slate-200"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Active Indicator */}
                      {isActive && (
                        <span className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-r-full bg-cyan-400" />
                      )}

                      {/* Icon */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                          isActive
                            ? "bg-cyan-400/10 text-cyan-300"
                            : "bg-white/[0.025] text-slate-500 group-hover:bg-white/[0.06] group-hover:text-slate-300"
                        }`}
                      >
                        <Icon
                          size={17}
                          strokeWidth={isActive ? 2.2 : 1.8}
                        />
                      </span>

                      {/* Label */}
                      <span className="truncate">{item.name}</span>

                      {/* Active Dot */}
                      {isActive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* ================================
            Bottom Actions
        ================================= */}
        <div className="shrink-0 border-t border-white/[0.07] bg-[#060e1b] p-3">
          {/* View Website */}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl px-3.5 py-3 text-[13px] font-medium text-slate-500 transition-all duration-200 hover:bg-white/[0.045] hover:text-slate-200"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.025] text-slate-500 transition-colors group-hover:bg-white/[0.06] group-hover:text-slate-300">
              <ExternalLink size={16} strokeWidth={1.8} />
            </span>

            <span>View Website</span>
          </a>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="group mt-1 flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-[13px] font-medium text-slate-500 transition-all duration-200 hover:bg-red-500/[0.07] hover:text-red-300"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.025] text-slate-500 transition-colors group-hover:bg-red-500/10 group-hover:text-red-300">
              <LogOut size={16} strokeWidth={1.8} />
            </span>

            <span>Logout</span>
          </button>

          {/* Footer */}
          <div className="px-3.5 pb-1 pt-3">
            <p className="text-[9px] font-medium tracking-wide text-slate-700">
              WebQenzo Admin
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
