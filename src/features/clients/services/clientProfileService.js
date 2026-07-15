import { db } from "../../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export async function getClientById(id) {
  const clientRef = doc(db, "clients", id);

  const snapshot = await getDoc(clientRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}