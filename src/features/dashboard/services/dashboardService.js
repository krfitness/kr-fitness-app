import { db } from "../../../firebase/firebaseConfig";
import {
  collection,
  getCountFromServer,
} from "firebase/firestore";

export async function getDashboardStats() {
  const [
    clientsSnap,
    workoutsSnap,
    mealsSnap,
    progressSnap,
  ] = await Promise.all([
    getCountFromServer(collection(db, "clients")),
    getCountFromServer(collection(db, "workouts")),
    getCountFromServer(collection(db, "meals")),
    getCountFromServer(collection(db, "progress")),
  ]);

  return {
    totalClients: clientsSnap.data().count,
    workoutPlans: workoutsSnap.data().count,
    mealPlans: mealsSnap.data().count,
    checkIns: progressSnap.data().count,
  };
}