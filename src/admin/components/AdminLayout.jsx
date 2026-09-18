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
    <div className="min-h-screen bg-[#f7f8fa]">
      <AdminSidebar
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <div className="lg:pl-72">
        <AdminHeader
          title={title}
          onMenuClick={() => setMobileOpen(true)}
        />

        <main className="px-4 py-6 md:px-8 md:py-8">
          <div className="mx-auto max-w-[1500px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
