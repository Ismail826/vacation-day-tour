// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvNg4H4a3ZyFuXBRiZ0ini0ak6xPy1By8",
    authDomain: "vacation-day--tour.firebaseapp.com",
    projectId: "vacation-day--tour",
    storageBucket: "vacation-day--tour.appspot.com",
    messagingSenderId: "167878237279",
    appId: "1:167878237279:web:0a0099b11c9fb9f57fcfea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;