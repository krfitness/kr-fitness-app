import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

import { getAssignedWorkout } from "../services/clientService";
import { getWorkoutById } from "../../workouts/services/workoutService";

export default function TodayWorkout() {
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);

  // Temporary client ID
  // Later this will come from Firebase Authentication
  const clientId = "wyZ9TIGKbXbCeyrKkbix";

  useEffect(() => {
    async function loadWorkout() {
      try {
        const assignment = await getAssignedWorkout(clientId);

        console.log("Client ID:", clientId);
        console.log("Assignment:", assignment);

        if (!assignment) {
          setWorkout(null);
          return;
        }

        const workoutData = await getWorkoutById(
          assignment.workoutId
        );

        setWorkout(workoutData);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadWorkout();
  }, []);

  if (loading) {
    return (
      <div className="text-gray-400">
        Loading workout...
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 text-center text-gray-400">
        No workout has been assigned yet.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold text-orange-500">
        Today's Workout
      </h2>

      <WorkoutCard
  workout={workout}
  clientId={clientId}
/>

    </div>
  );
}