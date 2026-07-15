import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

export async function getAssignedWorkout(clientId) {
  const assignmentsRef = collection(db, "clientWorkouts");

  const q = query(
    assignmentsRef,
    where("clientId", "==", clientId)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  const assignment = snapshot.docs[0].data();

  if (!assignment.workoutId) {
    return null;
  }

  const workoutRef = doc(db, "workouts", assignment.workoutId);

  const workoutSnap = await getDoc(workoutRef);

  if (!workoutSnap.exists()) {
    return null;
  }

  return {
    id: workoutSnap.id,
    ...workoutSnap.data(),
  };
}