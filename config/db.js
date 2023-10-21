// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrSCSeyaWxDOQllQJh4WvPDmd7wUQaMPQ",
  authDomain: "form-data-fa179.firebaseapp.com",
  projectId: "form-data-fa179",
  storageBucket: "form-data-fa179.appspot.com",
  messagingSenderId: "145677819651",
  appId: "1:145677819651:web:6de6dc849fed4133f69336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app)