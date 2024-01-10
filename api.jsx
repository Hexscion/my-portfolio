// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Lb6NBzdn6a6B0q28ZVvDQKaIfn6r81Q",
  authDomain: "hexscion-dev.firebaseapp.com",
  projectId: "hexscion-dev",
  storageBucket: "hexscion-dev.appspot.com",
  messagingSenderId: "871371493541",
  appId: "1:871371493541:web:0fc9701fb363f2b9d3fd4c",
  measurementId: "G-EQBMWVQDKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);