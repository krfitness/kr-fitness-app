import { useEffect, useState } from "react";
import useAuth from "../../auth/hooks/useAuth";

import { getClientByEmail } from "../services/clientProfileService";
import { getAssignedMeal } from "../services/clientMealService";
import { getMealById } from "../../meals/services/mealService";

export default function TodayMeal() {
  const { currentUser, loading: authLoading } = useAuth();

  const [mealPlan, setMealPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeal() {
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

        const assignment = await getAssignedMeal(client.id);

        if (!assignment) {
          setLoading(false);
          return;
        }

        const meal = await getMealById(assignment.mealId);

        setMealPlan(meal);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadMeal();
  }, [currentUser, authLoading]);

  if (loading) {
    return (
      <div className="text-gray-400">
        Loading meal...
      </div>
    );
  }

  if (!mealPlan) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-gray-400">
        No meal plan assigned.
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-orange-500 mb-2">
        Today's Meal Plan
      </h2>

      <h3 className="text-xl font-semibold mb-2">
  {mealPlan.name}
</h3>

<p className="text-gray-400 mb-6">
  Goal: {mealPlan.goal}
</p>

{mealPlan.week &&
  Object.entries(mealPlan.week).map(([day, meals]) => (
    meals.length > 0 && (
      <div key={day} className="mb-6">

        <h4 className="text-lg font-bold text-orange-400 mb-3">
          {day}
        </h4>

        <div className="space-y-3">

          {meals.map((meal, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-xl p-4"
            >
              <h5 className="font-semibold">
                {meal.name}
              </h5>

              <p className="text-gray-400">
                {meal.foods}
              </p>

              <div className="grid grid-cols-4 gap-2 mt-3 text-sm text-gray-300">
                <div>P: {meal.protein}g</div>
                <div>C: {meal.carbs}g</div>
                <div>F: {meal.fat}g</div>
                <div>{meal.calories} kcal</div>
              </div>

            </div>
          ))}

        </div>

      </div>
    )
  ))
}
    </div>
  );
}