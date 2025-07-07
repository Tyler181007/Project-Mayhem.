import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Dummy Firebase config — replace with your own for production!
const firebaseConfig = {
  apiKey: "AIzaSyDUMMY-KEY-REPLACE",
  authDomain: "serious-dashboard.firebaseapp.com",
  projectId: "serious-dashboard",
  storageBucket: "serious-dashboard.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:dummyappid"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);