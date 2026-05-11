import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7-Iw8QeOCqcGBap-E-sCjT8cx8czOkLQ",
  authDomain: "roadwatch-ai-94bb6.firebaseapp.com",
  projectId: "roadwatch-ai-94bb6",
  storageBucket: "roadwatch-ai-94bb6.firebasestorage.app",
  messagingSenderId: "127849690308",
  appId: "1:127849690308:web:3e37bb044aa3a00b008591",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);