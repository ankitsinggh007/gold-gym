// Import the functions you need from the SDKs you need
import { initializeApp,get } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOY7QYrDILaBpOiVyeLpupJ79XfQ7jKOk",
  authDomain: "the-gym-d3bd4.firebaseapp.com",
  projectId: "the-gym-d3bd4",
  storageBucket: "the-gym-d3bd4.appspot.com",
  messagingSenderId: "710823464283",
  appId: "1:710823464283:web:6710216d0a41857610de7e",
  measurementId: "G-5P6GD7QXHG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;