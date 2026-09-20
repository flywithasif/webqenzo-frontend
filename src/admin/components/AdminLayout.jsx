import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const titles = {
  "/admin": "Dashboard",
  "/admin/quotes": "Quote Requests",
  "/admin/contacts": "Contact Messages",
  "/admin/team": "Team Members",
};

const AdminLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const title =
    titles[location.pathname] || "Admin Panel";

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-slate-900 antialiased">
      {/* Sidebar */}
      <AdminSidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Main Application Area */}
      <div className="min-h-screen lg:pl-72">
        {/* Header */}
        <AdminHeader
          title={title}
          onMenuClick={() => setMobileOpen(true)}
        />

        {/* Page Content */}
        <main className="px-4 pb-10 pt-5 sm:px-6 md:px-8 md:pb-12 md:pt-7 lg:px-10">
          <div className="mx-auto w-full max-w-[1500px]">
            <div className="animate-[fadeIn_0.25s_ease-out]">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      {/* Subtle page background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-100/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-slate-200/30 blur-3xl" />
      </div>
    </div>
  );
};

export default AdminLayout;
