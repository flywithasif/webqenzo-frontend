import { Menu, Bell } from "lucide-react";

const AdminHeader = ({ onMenuClick, title }) => {
  const admin = JSON.parse(
    localStorage.getItem("webqenzo_admin") || "null"
  );

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
        >
          <Menu size={20} />
        </button>

        <div>
          <h1 className="text-lg font-bold text-slate-900 md:text-xl">
            {title}
          </h1>

          <p className="hidden text-xs text-slate-500 sm:block">
            Manage your WebQenzo workspace
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-xl border border-slate-200 p-2.5 text-slate-500 hover:bg-slate-50"
        >
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
        </button>

        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-slate-800">
            {admin?.name || "Admin"}
          </p>

          <p className="text-xs text-slate-400">
            {admin?.role || "ADMIN"}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
          {admin?.name?.charAt(0)?.toUpperCase() || "A"}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
