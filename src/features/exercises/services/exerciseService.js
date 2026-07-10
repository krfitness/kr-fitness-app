import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const exercisesCollection = collection(db, "exercises");

export async function addExercise(exerciseData) {
  const docRef = await addDoc(exercisesCollection, {
    ...exerciseData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getExercises() {
  const snapshot = await getDocs(exercisesCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function updateExercise(id, exerciseData) {
  const exerciseRef = doc(db, "exercises", id);

  await updateDoc(exerciseRef, exerciseData);
}

export async function deleteExercise(id) {
  const exerciseRef = doc(db, "exercises", id);

  await deleteDoc(exerciseRef);
}