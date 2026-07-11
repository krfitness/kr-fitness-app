import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export async function getAssignedWorkout(clientId) {
  const assignmentsRef = collection(db, "clientWorkouts");

  const q = query(
    assignmentsRef,
    where("clientId", "==", clientId),
    where("status", "==", "Active")
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