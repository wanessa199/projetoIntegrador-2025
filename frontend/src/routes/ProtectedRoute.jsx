import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children }) => {
  const { usuario, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e0f7fa',
        fontSize: '1.5rem',
        color: '#2e7d32'
      }}>
        Carregando...
      </div>
    );
  }

  return usuario ? children : <Navigate to="/login" replace />;
};