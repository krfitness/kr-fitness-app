import { useState } from "react";
import { toast } from "react-hot-toast";
import ExerciseForm from "./ExerciseForm";
import {
  addExercise,
  updateExercise,
} from "../services/exerciseService";

export default function AddExerciseModal({
  show,
  onClose,
  onExerciseAdded,
  editExercise,
}) {
  const emptyExercise = {
    name: "",
    muscleGroup: "",
    equipment: "",
    difficulty: "",
    exerciseType: "",
    instructions: "",
  };

  const [exerciseData, setExerciseData] = useState(() => {
    if (editExercise) {
      return {
        name: editExercise.name || "",
        muscleGroup: editExercise.muscleGroup || "",
        equipment: editExercise.equipment || "",
        difficulty: editExercise.difficulty || "",
        exerciseType: editExercise.exerciseType || "",
        instructions: editExercise.instructions || "",
      };
    }

    return { ...emptyExercise };
  });

  async function handleSave() {
    try {
      if (editExercise) {
        await updateExercise(editExercise.id, exerciseData);
        toast.success("Exercise updated successfully!");
      } else {
        await addExercise(exerciseData);
        toast.success("Exercise added successfully!");
      }

      if (onExerciseAdded) {
        await onExerciseAdded();
      }

      setExerciseData({ ...emptyExercise });

      onClose();

    } catch (error) {
      console.error(error);
      toast.error("Failed to save exercise.");
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">

      <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-zinc-800">

        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          {editExercise ? "Edit Exercise" : "Add Exercise"}
        </h2>

        <ExerciseForm
          exerciseData={exerciseData}
          setExerciseData={setExerciseData}
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
            {editExercise ? "Update Exercise" : "Save Exercise"}
          </button>

        </div>

      </div>

    </div>
  );
}