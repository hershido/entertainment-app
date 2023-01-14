import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

interface PrivateRouteProps {
   children: ReactNode;
}

export const FormRedirect: React.FC<PrivateRouteProps> = ({ children }) => {
   const { currentUser, waitingForUser } = useAuth();
   return <>{waitingForUser ? <></> : !currentUser ? children : <Navigate to='/' />}</>;
};
