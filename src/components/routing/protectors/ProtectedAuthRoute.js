import { Navigate } from 'react-router-dom';
import { UserAuth } from '../../../context/AuthContext';

export default function ProtectedAuthRoute({ children }) {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to='/' />;
  }
  return children;
}
