import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from "firebase/firestore";

export async function getClientProgressHistory(clientId) {
  const progressRef = collection(db, "progress");

  const q = query(
    progressRef,
    where("clientId", "==", clientId),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      ...data,
      date: data.createdAt?.toDate
        ? data.createdAt.toDate().toLocaleDateString()
        : "--",
    };
  });
}