// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCLEWdDf9uP7Bspym9Qjb-y8UXdoEAORb8",
  authDomain:"1:156794948483:web:f0f3b84508e76c6ad204b6",
  projectId: "react-auth-57f9a",
  storageBucket: "react-auth-57f9a.appspot.com",
  messagingSenderId: "156794948483",
  appId: "react-auth-57f9a.firebaseapp.com",
  measurementId: "G-VX3D1PST0J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
