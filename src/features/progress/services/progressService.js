import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const progressCollection = collection(db, "progress");

export async function addProgress(progressData) {
  const docRef = await addDoc(progressCollection, {
    ...progressData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getClientProgress(clientId) {
  const q = query(
    progressCollection,
    where("clientId", "==", clientId),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}