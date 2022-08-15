// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAts1mLlt0p1n6LQfRziullfRp8s-Zvedw",
  authDomain: "todo-app-a8a69.firebaseapp.com",
  projectId: "todo-app-a8a69",
  storageBucket: "todo-app-a8a69.appspot.com",
  messagingSenderId: "275386695111",
  appId: "1:275386695111:web:54da4fdd5f992ca8026de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)