// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAwdKwpB25uaUiNbvq74tEyg5Nicz2q4Q",
  authDomain: "alxclone-2c1f9.firebaseapp.com",
  projectId: "alxclone-2c1f9",
  storageBucket: "alxclone-2c1f9.appspot.com",
  messagingSenderId: "122602932244",
  appId: "1:122602932244:web:ddd4c87ed510fcea5bff01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)