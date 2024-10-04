
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp1g_UKm3JIXvv6NW4-qsL2LC1DIaQkq0",
  authDomain: "tripai-20348.firebaseapp.com",
  projectId: "tripai-20348",
  storageBucket: "tripai-20348.appspot.com",
  messagingSenderId: "484285646795",
  appId: "1:484285646795:web:1b98e005cba1f018df184e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);