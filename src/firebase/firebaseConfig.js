import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace this object with YOUR Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHZ2DDWQMK1P_xHYvKq_U70gkpvNYDch4",
  authDomain: "kr-fitness-f3ea0.firebaseapp.com",
  projectId: "kr-fitness-f3ea0",
  storageBucket: "kr-fitness-f3ea0.firebasestorage.app",
  messagingSenderId: "645700910253",
  appId: "1:645700910253:web:32f4ddbc065373ef05da24"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;