import MealDay from "./MealDay";
import MealItem from "./MealItem";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function MealForm({
  mealData,
  setMealData,
}) {
  function updateField(field, value) {
    setMealData({
      ...mealData,
      [field]: value,
    });
  }

  function addMeal(day) {
    const week = { ...(mealData.week || {}) };

    week[day] = [
      ...(week[day] || []),
      {
        name: "",
        foods: "",
        protein: "",
        carbs: "",
        fat: "",
        calories: "",
      },
    ];

    setMealData({
      ...mealData,
      week,
    });
  }

  function updateMeal(day, index, updatedMeal) {
    const week = { ...(mealData.week || {}) };

    week[day][index] = updatedMeal;

    setMealData({
      ...mealData,
      week,
    });
  }

  function deleteMeal(day, index) {
    const week = { ...(mealData.week || {}) };

    week[day] = week[day].filter((_, i) => i !== index);

    setMealData({
      ...mealData,
      week,
    });
  }

  return (
    <div className="space-y-6">

      <input
        type="text"
        placeholder="Meal Plan Name"
        value={mealData.name}
        onChange={(e) => updateField("name", e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 outline-none focus:border-orange-500"
      />

      <select
        value={mealData.goal}
        onChange={(e) => updateField("goal", e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 outline-none focus:border-orange-500"
      >
        <option value="">Select Goal</option>
        <option value="Muscle Gain">Muscle Gain</option>
        <option value="Fat Loss">Fat Loss</option>
        <option value="Body Recomposition">Body Recomposition</option>
        <option value="Strength">Strength</option>
        <option value="Contest Prep">Contest Prep</option>
      </select>

      {DAYS.map((day) => (
        <MealDay
          key={day}
          day={day}
          meals={mealData.week?.[day] || []}
          onAddMeal={() => addMeal(day)}
        >
          {(mealData.week?.[day] || []).map((meal, index) => (
            <MealItem
              key={index}
              meal={meal}
              onChange={(updatedMeal) =>
                updateMeal(day, index, updatedMeal)
              }
              onDelete={() =>
                deleteMeal(day, index)
              }
            />
          ))}
        </MealDay>
      ))}

    </div>
  );
}