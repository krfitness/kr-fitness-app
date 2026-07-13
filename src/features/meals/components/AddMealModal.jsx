import { useState } from "react";
import { toast } from "react-hot-toast";

import MealForm from "./MealForm";
import {
  addMeal,
  updateMeal,
} from "../services/mealService";

export default function AddMealModal({
  show,
  onClose,
  onMealAdded,
  editMeal,
}) {
 const emptyMeal = {
  name: "",
  goal: "",
  week: {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  },
};
  const [mealData, setMealData] = useState(
    editMeal || emptyMeal
  );

  async function handleSave() {
    try {
      if (editMeal) {
        await updateMeal(editMeal.id, mealData);
        toast.success("Meal updated successfully!");
      } else {
        await addMeal(mealData);
        toast.success("Meal created successfully!");
      }

      if (onMealAdded) {
        await onMealAdded();
      }

      onClose();

    } catch (error) {
      console.error(error);
      toast.error("Failed to save meal.");
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50">

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-full max-w-5xl max-h-[90vh] overflow-y-auto">

        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          {editMeal ? "Edit Meal Plan" : "Create Meal Plan"}
        </h2>

        <MealForm
          mealData={mealData}
          setMealData={setMealData}
        />

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="bg-zinc-700 hover:bg-zinc-600 px-6 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl"
          >
            {editMeal ? "Update Meal" : "Save Meal"}
          </button>

        </div>

      </div>

    </div>
  );
}