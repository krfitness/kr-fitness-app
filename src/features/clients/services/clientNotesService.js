import { db } from "../../../firebase/firebaseConfig";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export async function getCoachNotes(clientId) {
  const notesRef = doc(db, "clientNotes", clientId);

  const snapshot = await getDoc(notesRef);

  if (!snapshot.exists()) {
    return "";
  }

  return snapshot.data().notes || "";
}

export async function saveCoachNotes(clientId, notes) {
  const notesRef = doc(db, "clientNotes", clientId);

  await setDoc(
    notesRef,
    {
      notes,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}