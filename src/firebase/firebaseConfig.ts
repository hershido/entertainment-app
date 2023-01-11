import { initializeApp } from 'firebase/app';
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
} from 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyAmrpu5sVePPyapmassBgE8O4WHnLFryjs',
   authDomain: 'entertainment-app-auth.firebaseapp.com',
   projectId: 'entertainment-app-auth',
   storageBucket: 'entertainment-app-auth.appspot.com',
   messagingSenderId: '745290264472',
   appId: '1:745290264472:web:1b444127720bdfba9ec5ed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function createUser(email: string, password: string) {
   console.log('create user');
   createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // Signed in
         const user = userCredential.user;
         // ...
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
      });
}

export async function signInUser(email: string, password: string) {
   return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         console.log('logged in:', user);
         return user;
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorMessage);
         return error;
      });
}

export async function authStateChanged(setterFunction: (user: any) => void) {
   return onAuthStateChanged(auth, setterFunction);
}

export async function signOutUser() {
   return signOut(auth);
}
