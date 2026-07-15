import { db } from "../../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export async function updateClientStatus(uid, status) {
  const ref = doc(db, "users", uid);

  await updateDoc(ref, {
    status,
  });
}