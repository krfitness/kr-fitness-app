import { db } from "../../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function updateClient(id, data) {
  const ref = doc(db, "clients", id);

  await updateDoc(ref, data);
}