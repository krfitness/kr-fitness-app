import { db } from "../../../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const assignmentsCollection = collection(db, "clientWorkouts");

export async function assignWorkout(clientId, workoutId) {
  await addDoc(assignmentsCollection, {
    clientId,
    workoutId,
    assignedAt: serverTimestamp(),
    status: "Active",
  });
}