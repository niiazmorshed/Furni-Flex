// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp_9ysNYXjJNrY4_Odgq2CtW0JAS2yU8o",
  authDomain: "furni-flex.firebaseapp.com",
  projectId: "furni-flex",
  storageBucket: "furni-flex.appspot.com",
  messagingSenderId: "585869574532",
  appId: "1:585869574532:web:b5ef39d1a21381221b5dd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
