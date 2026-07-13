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
  setDoc,
} from "firebase/firestore";

const mealsCollection = collection(db, "meals");

export async function addMeal(mealData) {
  const docRef = await addDoc(mealsCollection, {
    ...mealData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function getMeals() {
  const snapshot = await getDocs(mealsCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getMealById(id) {
  const mealRef = doc(db, "meals", id);

  const snapshot = await getDoc(mealRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}

export async function updateMeal(id, mealData) {
  const mealRef = doc(db, "meals", id);

  await updateDoc(mealRef, mealData);
}

export async function deleteMeal(id) {
  const mealRef = doc(db, "meals", id);

  await deleteDoc(mealRef);
}

export async function assignMealToClient(clientId, mealId) {
  const assignmentRef = doc(db, "clientMeals", clientId);

  await setDoc(
    assignmentRef,
    {
      clientId,
      mealId,
      assignedAt: serverTimestamp(),
    },
    { merge: true }
  );
}