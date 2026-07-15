import { db } from "../../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function updateClientStatus(id, status) {
  await updateDoc(doc(db, "users", id), {
    status,
  });
}