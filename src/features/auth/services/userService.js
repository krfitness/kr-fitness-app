import { db } from "../../../firebase/firebaseConfig";
import {
  doc,
  getDoc,
} from "firebase/firestore";

export async function getUserRole(uid) {
  const userRef = doc(db, "users", uid);

  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}