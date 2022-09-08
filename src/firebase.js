// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCijqX0dYP6oP22W9MQE45_myb_2mMuR2I",
  authDomain: "todo-app-49567.firebaseapp.com",
  projectId: "todo-app-49567",
  storageBucket: "todo-app-49567.appspot.com",
  messagingSenderId: "44467572388",
  appId: "1:44467572388:web:fcbb6609d62cc327aba031",
  measurementId: "G-CWVY5WRK00",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
