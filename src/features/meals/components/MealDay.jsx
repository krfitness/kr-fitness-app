export default function MealDay({
  day,
  meals,
  onAddMeal,
  children,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-orange-500">
          {day}
        </h2>

        <button
          type="button"
          onClick={onAddMeal}
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg"
        >
          + Add Meal
        </button>

      </div>

      {meals.length === 0 ? (
        <div className="text-gray-500">
          No meals added.
        </div>
      ) : (
        <div className="space-y-4">
          {children}
        </div>
      )}

    </div>
  );
}