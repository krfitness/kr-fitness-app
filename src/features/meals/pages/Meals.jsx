import { useEffect, useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import AddMealModal from "../components/AddMealModal";
import AssignMealModal from "../components/AssignMealModal";
import { getMeals } from "../services/mealService";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedMealId, setSelectedMealId] = useState(null);

  async function loadMeals() {
    const data = await getMeals();
    setMeals(data);
  }

  useEffect(() => {
    loadMeals();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Meal Plans
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl"
        >
          + New Meal Plan
        </button>

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

        {meals.length === 0 ? (
          <div className="text-center text-gray-400 py-10">
            No meal plans found.
          </div>
        ) : (
          <div className="space-y-4">

            {meals.map((meal) => (
              <div
                key={meal.id}
                className="bg-zinc-800 rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {meal.name}
                  </h3>

                  <p className="text-gray-400">
                    {meal.goal}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedMealId(meal.id);
                    setShowAssignModal(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
                >
                  Assign
                </button>

              </div>
            ))}

          </div>
        )}

      </div>

      <AddMealModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onMealAdded={loadMeals}
      />

      <AssignMealModal
        show={showAssignModal}
        onClose={() => setShowAssignModal(false)}
        mealId={selectedMealId}
      />

    </DashboardLayout>
  );
}