import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export async function getClientByEmail(email) {
  const q = query(
    collection(db, "clients"),
    where("email", "==", email)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  return {
    id: snapshot.docs[0].id,
    ...snapshot.docs[0].data(),
  };
}