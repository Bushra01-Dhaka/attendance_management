// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9s9mNFxW38Tfg_wg9aq8FPOBaaa2R4pA",
  authDomain: "attendance-management-9e661.firebaseapp.com",
  projectId: "attendance-management-9e661",
  storageBucket: "attendance-management-9e661.appspot.com",
  messagingSenderId: "291212599590",
  appId: "1:291212599590:web:7d47f744207757ebc121e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;