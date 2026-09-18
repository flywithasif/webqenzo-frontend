import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const location = useLocation();

  const token = localStorage.getItem("webqenzo_admin_token");

  if (!token) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;
