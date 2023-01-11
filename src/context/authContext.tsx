import { UserCredential } from 'firebase/auth';
import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { createUser, signInUser, authStateChanged, signOutUser } from '../firebase/firebaseConfig';

interface AuthContextValue {
   currentUser: object;
   createUser: (email: string, password: string) => Promise<void>;
   signInUser: (email: string, password: string) => Promise<void>;
   signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
   currentUser: {},
   createUser,
   signInUser,
   signOutUser,
});

export function useAuth() {
   return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [currentUser, setCurrentUser] = useState({});

   const value = {
      currentUser,
      createUser,
      signInUser,
      signOutUser,
   };

   useEffect(() => {
      authStateChanged((user) => setCurrentUser(user));
   }, []);

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
