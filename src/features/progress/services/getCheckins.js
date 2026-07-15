import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export async function getCheckins() {
  const q = query(
    collection(db, "checkins"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}