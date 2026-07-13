import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { getUserRole } from "../services/userService";

export default function RoleProtectedRoute({
  children,
  role,
}) {
  const { currentUser, loading } = useAuth();

  const [checkingRole, setCheckingRole] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    async function loadRole() {
      if (!currentUser) {
        setCheckingRole(false);
        return;
      }

      const user = await getUserRole(currentUser.uid);

      setUserRole(user?.role?.toLowerCase() || null);
      setCheckingRole(false);
    }

    if (!loading) {
      loadRole();
    }
  }, [currentUser, loading]);

  if (loading || checkingRole) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

 if (userRole !== role.toLowerCase()) {
  return <Navigate to="/login" replace />;

  }

  return children;
}