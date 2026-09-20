
import { Menu, Bell } from "lucide-react";

const AdminHeader = ({ onMenuClick, title }) => {
  const admin = JSON.parse(
    localStorage.getItem("webqenzo_admin") || "null"
  );

  return (
    <header className="sticky top-0 z-30 h-[76px] border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">
          {/* Mobile Menu */}
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Open menu"
            className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-95 lg:hidden"
          >
            <Menu
              size={19}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="truncate text-[17px] font-semibold tracking-[-0.02em] text-slate-950 sm:text-[19px]">
                {title}
              </h1>
            </div>

            <p className="mt-0.5 hidden text-[11px] font-medium tracking-wide text-slate-400 sm:block">
              Manage your WebQenzo workspace
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-95"
          >
            <Bell
              size={18}
              strokeWidth={1.9}
              className="transition-transform duration-200 group-hover:scale-105"
            />

            <span className="absolute right-[9px] top-[8px] flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-30" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600 ring-2 ring-white" />
            </span>
          </button>

          {/* Admin Info */}
          <div className="hidden border-l border-slate-200 pl-3 text-right sm:block sm:pl-4">
            <p className="max-w-[150px] truncate text-[13px] font-semibold leading-5 text-slate-900">
              {admin?.name || "Admin"}
            </p>

            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              {admin?.role || "ADMIN"}
            </p>
          </div>

          {/* Avatar */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-semibold text-white shadow-sm shadow-slate-900/10">
            <span className="absolute inset-[1px] rounded-[10px] border border-white/10" />

            <span className="relative">
              {admin?.name?.charAt(0)?.toUpperCase() || "A"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;