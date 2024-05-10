// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-nuu_HT1P8oV7TWbTLSQNmd_Hau3yymg",
  authDomain: "cozystay-hotel-booking.firebaseapp.com",
  projectId: "cozystay-hotel-booking",
  storageBucket: "cozystay-hotel-booking.appspot.com",
  messagingSenderId: "464727757095",
  appId: "1:464727757095:web:af65c95751a40530c7d902",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
