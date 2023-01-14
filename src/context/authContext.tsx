import { User } from 'firebase/auth';
import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { createUser, signInUser, authStateChanged, signOutUser } from '../firebase/firebaseConfig';

interface AuthContextValue {
   currentUser: User | undefined;
   createUser: (email: string, password: string) => Promise<void | User>;
   signInUser: (email: string, password: string) => Promise<void | User>;
   signOutUser: () => Promise<void>;
   waitingForUser: Boolean;
}

const AuthContext = createContext<AuthContextValue>({
   currentUser: undefined,
   createUser,
   signInUser,
   signOutUser,
   waitingForUser: true,
});

export function useAuth() {
   return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [currentUser, setCurrentUser] = useState();
   const [waitingForUser, setWaitingForUser] = useState(true);

   const value = {
      currentUser,
      createUser,
      signInUser,
      signOutUser,
      waitingForUser,
   };

   useEffect(() => {
      authStateChanged((user) => {
         setCurrentUser(user);
         setWaitingForUser(false);
      });
   }, []);

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
