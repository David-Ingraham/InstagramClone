// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC34ehgf2SN91hT9jTUgtg2OosJ7X_kgiI",
  authDomain: "insta-clone-a3797.firebaseapp.com",
  projectId: "insta-clone-a3797",
  storageBucket: "insta-clone-a3797.appspot.com",
  messagingSenderId: "920752258398",
  appId: "1:920752258398:web:be43328ea1cafd3134e3cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();