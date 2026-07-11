import { useEffect, useState } from "react";
import { getWorkouts } from "../../workouts/services/workoutService";
import { toast } from "react-hot-toast";
import { assignWorkout } from "../services/assignmentService";

export default function AssignWorkoutModal({
  show,
  onClose,
  client,
}) {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState("");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        setWorkouts(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load workouts.");
      }
    }

    if (show) {
      loadWorkouts();
    }
  }, [show]);

async function handleAssign() {
  if (!selectedWorkout) {
    toast.error("Please select a workout.");
    return;
  }

  try {
    await assignWorkout(
      client.id,
      selectedWorkout
    );

    toast.success("Workout assigned successfully!");

    onClose();

  } catch (error) {
    console.error(error);
    toast.error("Failed to assign workout.");
  }
}

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">

      <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-xl border border-zinc-800">

        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          Assign Workout
        </h2>

        <div className="mb-6">

          <label className="block text-gray-400 mb-2">
            Client
          </label>

          <input
            type="text"
            value={client?.fullName || ""}
            readOnly
            className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700"
          />

        </div>

        <div>

          <label className="block text-gray-400 mb-2">
            Select Workout
          </label>

          <select
            value={selectedWorkout}
            onChange={(e) => setSelectedWorkout(e.target.value)}
            className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
          >
            <option value="">Choose Workout</option>

            {workouts.map((workout) => (
              <option
                key={workout.id}
                value={workout.id}
              >
                {workout.name}
              </option>
            ))}

          </select>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-zinc-700 hover:bg-zinc-600"
          >
            Cancel
          </button>

          <button
            onClick={handleAssign}
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600"
          >
            Assign Workout
          </button>

        </div>

      </div>

    </div>
  );
}