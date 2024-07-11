// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "react-auth-57f9a",
  storageBucket: "react-auth-57f9a.appspot.com",
  messagingSenderId: "156794948483",
  appId:process.env.APP_ID,
  measurementId: "G-VX3D1PST0J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
