import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv4c4w3SkjqGBUfSwVH-OR_qGxcy3VGw8",
  authDomain: "fir-learning-3794f.firebaseapp.com",
  projectId: "fir-learning-3794f",
  storageBucket: "fir-learning-3794f.appspot.com",
  messagingSenderId: "666538999562",
  appId: "1:666538999562:web:f2c308c28cee40ca40c4f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore()

export { auth, db };