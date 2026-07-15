import { db } from "../../../firebase/firebaseConfig";
import {
  doc,
  getDoc,
} from "firebase/firestore";

export async function getAssignedMeal(clientId) {
  const mealRef = doc(db, "clientMeals", clientId);

  const snapshot = await getDoc(mealRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}