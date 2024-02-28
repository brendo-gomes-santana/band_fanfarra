import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: "fanfarraband.firebaseapp.com",
  projectId: "fanfarraband",
  storageBucket: "fanfarraband.appspot.com",
  messagingSenderId: "341519204474",
  appId: "1:341519204474:web:47fecedef9447a99d37bc3"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export {
  auth,
  db,
  storage
}