import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, DocumentData } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';

import { data } from '../data';

import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
} from 'firebase/auth';
import { Program } from '../types/program';

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
const db = getFirestore(app);
const storage = getStorage(app);

export async function getPrograms() {
   const q = query(collection(db, 'programs'));
   const programs: Program[] = [];
   const querySnapshot = await getDocs(q);
   querySnapshot.forEach((doc) => {
      programs.push(doc.data() as Program);
   });
   return programs;
}

export async function createUser(email: string, password: string) {
   return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // Signed in
         const user = userCredential.user;
         return user;
         // ...
      })
      .catch((error) => {
         throw error;
      });
}

export async function signInUser(email: string, password: string) {
   return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         const user = userCredential.user;
         return user;
      })
      .catch((error) => {
         throw error;
      });
}

export async function authStateChanged(setterFunction: (user: any) => void) {
   return onAuthStateChanged(auth, setterFunction);
}

export async function signOutUser() {
   return signOut(auth);
}

// export async function addCollection() {
//    data.forEach(async (dataItem) => {
//       try {
//          const docRef = await addDoc(collection(db, 'programs'), dataItem);
//          console.log('Document written with ID: ', docRef.id);
//       } catch (e) {
//          console.error('Error adding document: ', e);
//       }
//    });
// }

// export const uploadToFirebase = async (mediaList: any) => {
//    for (const media of mediaList) {
//       // if (media.isTrending) {
//       const programSmall = ref(
//          storage,
//          `program-thumbnails/${media.title.replace(/ /g, '-').toLowerCase()}/regular/small.jpg`
//       );
//       const programMedium = ref(
//          storage,
//          `program-thumbnails/${media.title.replace(/ /g, '-').toLowerCase()}/regular/medium.jpg`
//       );
//       const programLarge = ref(
//          storage,
//          `program-thumbnails/${media.title.replace(/ /g, '-').toLowerCase()}/regular/large.jpg`
//       );

//       fetch(media.thumbnail.regular.small).then((response) => {
//          response.blob().then((result) => {
//             uploadBytes(programSmall, result).then(() => {
//                console.log('uploaded');
//             });
//          });
//       });
//       fetch(media.thumbnail.regular.medium).then((response) => {
//          response.blob().then((result) => {
//             uploadBytes(programMedium, result).then(() => {
//                console.log('uploaded');
//             });
//          });
//       });
//       fetch(media.thumbnail.regular.large).then((response) => {
//          response.blob().then((result) => {
//             uploadBytes(programLarge, result).then(() => {
//                console.log('uploaded');
//             });
//          });
//       });
//       // }
//    }
// };

// uploadToFirebase(data);
// addCollection();

export async function getThumbnailURL(url: string | undefined) {
   const newURL = await getDownloadURL(ref(storage, url));
   return newURL;
}
