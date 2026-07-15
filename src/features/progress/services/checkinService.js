import { db } from "../../../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function submitCheckin(data) {
  await addDoc(collection(db, "checkins"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}