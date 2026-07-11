import { useState } from "react";
import { completeExercise } from "../services/progressService";
import { toast } from "react-hot-toast";

export default function ExerciseCard({
  exercise,
  clientId,
  workoutId,
  day,
}) {
  const [completed, setCompleted] = useState(false);

async function handleComplete() {
  try {
    await completeExercise({
      clientId,
      workoutId,
      exerciseName: exercise.name,
      day,
    });

    setCompleted(true);

    toast.success("Exercise completed!");

  } catch (error) {
    console.error(error);
    toast.error("Failed to save progress.");
  }
}

  return (
    <div className="bg-zinc-800 rounded-xl p-5 flex justify-between items-center">

      <div>

        <h4 className="font-semibold text-lg">
          {exercise.name}
        </h4>

        <p className="text-gray-400">
          {exercise.sets} Sets × {exercise.reps} Reps
        </p>

      </div>

      <button
        onClick={handleComplete}
        className={`px-5 py-2 rounded-lg transition ${
          completed
            ? "bg-green-600"
            : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {completed ? "Completed" : "Mark Complete"}
      </button>

    </div>
  );
}