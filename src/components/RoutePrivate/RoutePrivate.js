import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';
import { Navigate } from 'react-router';

const RoutePrivate = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!authenticated) {
    return <Navigate to='/' />;
  }

  return children;
};

export default RoutePrivate;
