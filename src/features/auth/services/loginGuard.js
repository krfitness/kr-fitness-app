import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

export async function canClientLogin(uid) {
  const ref = doc(db, "users", uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) return false;

  const data = snap.data();

  if (data.role === "coach") return true;

  return data.status === "Active";
}