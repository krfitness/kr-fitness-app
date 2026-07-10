import { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import {
  addWorkout,
  updateWorkout,
} from "../services/workoutService";
import { toast } from "react-hot-toast";

export default function AddWorkoutModal({
  show,
  onClose,
  onWorkoutAdded,
  editWorkout,
}) {
  const emptyWorkout = {
    name: "",
    goal: "",
    days: "",
    exercises: [],
  };

  const [workoutData, setWorkoutData] = useState(() => {
    if (editWorkout) {
      return {
        name: editWorkout.name || "",
        goal: editWorkout.goal || "",
        days: editWorkout.days || "",
        exercises: editWorkout.exercises || [],
      };
    }

    return { ...emptyWorkout };
  });

  async function handleSave() {
    try {
      if (editWorkout) {
        await updateWorkout(editWorkout.id, workoutData);
        toast.success("Workout updated successfully!");
      } else {
        await addWorkout(workoutData);
        toast.success("Workout created successfully!");
      }

      if (onWorkoutAdded) {
        await onWorkoutAdded();
      }

      setWorkoutData({ ...emptyWorkout });

      onClose();

    } catch (error) {
      console.error(error);
      toast.error("Failed to save workout.");
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-3xl border border-zinc-800">

        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          {editWorkout ? "Edit Workout" : "Create Workout"}
        </h2>

        <WorkoutForm
          workoutData={workoutData}
          setWorkoutData={setWorkoutData}
        />

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-zinc-700 hover:bg-zinc-600"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600"
          >
            {editWorkout ? "Update Workout" : "Save Workout"}
          </button>

        </div>

      </div>

    </div>
  );
}