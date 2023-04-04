// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiQPl6Qrw8G7ZdCPYJ3qiGRK-7DuzTL94",
  authDomain: "cdc-portal-5df01.firebaseapp.com",
  projectId: "cdc-portal-5df01",
  storageBucket: "cdc-portal-5df01.appspot.com",
  messagingSenderId: "230716679462",
  appId: "1:230716679462:web:987fe3a80b10251c3e0de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};