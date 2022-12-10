import { Navigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";

export default function ProtectedAccountRoute({ children }) {
  const { user } = UserAuth();

  if (!user || Object.keys(user).length === 0) {
    return <Navigate to="/login" />;
  }
  return children;
}
