export default function AssignedMealCard({
  meal,
  onChangeMeal,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-full">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          🍽️ Assigned Meal Plan
        </h2>

        <button
          onClick={onChangeMeal}
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
          Change
        </button>

      </div>

      {meal ? (
        <div className="space-y-4">

          <div>

            <p className="text-gray-400 text-sm">
              Meal Plan
            </p>

            <p className="text-xl font-semibold mt-1">
              {meal.name}
            </p>

          </div>

          <div>

            <p className="text-gray-400 text-sm">
              Goal
            </p>

            <p className="mt-1">
              {meal.goal || "--"}
            </p>

          </div>

          <div>

            <p className="text-gray-400 text-sm">
              Weekly Schedule
            </p>

            <p className="mt-1">
              {meal.week
                ? Object.keys(meal.week).length
                : 0}{" "}
              Days
            </p>

          </div>

        </div>
      ) : (
        <div className="text-center py-10">

          <div className="text-5xl mb-3">
            🍽️
          </div>

          <p className="text-gray-400">
            No meal plan assigned yet.
          </p>

        </div>
      )}

    </div>
  );
}