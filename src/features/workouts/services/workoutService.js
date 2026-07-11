import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const workoutsCollection = collection(db, "workouts");

export async function addWorkout(workoutData) {
  const docRef = await addDoc(workoutsCollection, {
    ...workoutData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getWorkouts() {
  const snapshot = await getDocs(workoutsCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function updateWorkout(id, workoutData) {
  const workoutRef = doc(db, "workouts", id);

  await updateDoc(workoutRef, workoutData);
}

export async function deleteWorkout(id) {
  const workoutRef = doc(db, "workouts", id);

  await deleteDoc(workoutRef);
}

export async function getWorkoutById(id) {
  const workoutRef = doc(db, "workouts", id);

  const snapshot = await getDoc(workoutRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}