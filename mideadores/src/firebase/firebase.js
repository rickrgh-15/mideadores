// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhV_5bRbZ8zWGG46Ro6i1pxSY7xOHXSCQ",
  authDomain: "mideadores-4298a.firebaseapp.com",
  databaseURL: "https://mideadores-4298a-default-rtdb.firebaseio.com",
  projectId: "mideadores-4298a",
  storageBucket: "mideadores-4298a.appspot.com",
  messagingSenderId: "527995253244",
  appId: "1:527995253244:web:abfedef101e02f887c0279",
  measurementId: "G-FE73GXGH9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth };