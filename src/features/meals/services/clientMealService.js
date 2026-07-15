import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

export async function getAssignedMeal(clientId) {
  const assignmentsRef = collection(db, "clientMeals");

  const q = query(
    assignmentsRef,
    where("clientId", "==", clientId)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  const assignment = snapshot.docs[0].data();

  if (!assignment.mealId) {
    return null;
  }

  const mealRef = doc(db, "meals", assignment.mealId);

  const mealSnap = await getDoc(mealRef);

  if (!mealSnap.exists()) {
    return null;
  }

  return {
    id: mealSnap.id,
    ...mealSnap.data(),
  };
}