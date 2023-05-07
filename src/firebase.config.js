// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgbYUMaH0o4OdiOnzOij6DZwk_rUQS0rc",
  authDomain: "alloy-6a71b.firebaseapp.com",
  projectId: "alloy-6a71b",
  storageBucket: "alloy-6a71b.appspot.com",
  messagingSenderId: "196446226597",
  appId: "1:196446226597:web:30949903f23e30e8fa654c",
  measurementId: "G-36Z325WG1N",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
