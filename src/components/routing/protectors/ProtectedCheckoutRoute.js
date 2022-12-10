import { Navigate } from "react-router-dom";

export default function ProtectedCartRoute({ cart, children }) {
  if (cart.length === 0) {
    return <Navigate to="/" />;
  }
  return children;
}
