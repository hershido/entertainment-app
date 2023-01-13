import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/authContext';

interface PrivateRouteProps {
   children: ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
   const { currentUser } = useAuth();
   return <>{currentUser ? children : <Navigate to='/login' />}</>;
};
