import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

import { getAssignedWorkout } from "../services/clientService";
import { getWorkoutById } from "../../workouts/services/workoutService";

import useAuth from "../../auth/hooks/useAuth";
import { getClientByEmail } from "../services/clientProfileService";

export default function TodayWorkout() {
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clientId, setClientId] = useState(null);

  const { currentUser, loading: authLoading } = useAuth();

  useEffect(() => {
    async function loadWorkout() {
      if (authLoading) return;

      try {
        if (!currentUser) {
          setLoading(false);
          return;
        }

        const client = await getClientByEmail(currentUser.email);

        if (!client) {
          setLoading(false);
          return;
        }

        const id = client.id;
        setClientId(id);

        const assignment = await getAssignedWorkout(id);

        if (!assignment) {
          setWorkout(null);
          setLoading(false);
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
  }, [currentUser, authLoading]);

  if (authLoading || loading) {
    return (
      <div className="text-gray-400">
        Loading...
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