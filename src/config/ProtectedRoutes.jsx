import { auth } from "./firebase";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default ProtectedRoutes;
