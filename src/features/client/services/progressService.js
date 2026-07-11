import { db } from "../../../firebase/firebaseConfig";

import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const progressCollection = collection(db, "workoutProgress");

export async function completeExercise(data) {
  await addDoc(progressCollection, {
    ...data,
    completed: true,
    completedAt: serverTimestamp(),
  });
}

export async function isExerciseCompleted(
  clientId,
  workoutId,
  exerciseName,
  day
) {
  const q = query(
    progressCollection,
    where("clientId", "==", clientId),
    where("workoutId", "==", workoutId),
    where("exerciseName", "==", exerciseName),
    where("day", "==", day),
    where("completed", "==", true)
  );

  const snapshot = await getDocs(q);

  return !snapshot.empty;
}