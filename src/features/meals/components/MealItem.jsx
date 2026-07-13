export default function MealItem({
  meal,
  onChange,
  onDelete,
}) {
  function update(field, value) {
    onChange({
      ...meal,
      [field]: value,
    });
  }

  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 space-y-3">

      <input
        type="text"
        placeholder="Meal Name (Breakfast)"
        value={meal.name}
        onChange={(e) => update("name", e.target.value)}
        className="w-full bg-zinc-900 rounded-lg p-3 border border-zinc-700 outline-none focus:border-orange-500"
      />

      <input
        type="text"
        placeholder="Foods (100g Oats, 6 Eggs...)"
        value={meal.foods}
        onChange={(e) => update("foods", e.target.value)}
        className="w-full bg-zinc-900 rounded-lg p-3 border border-zinc-700 outline-none focus:border-orange-500"
      />

      <div className="grid grid-cols-4 gap-3">

        <input
          type="number"
          placeholder="Protein"
          value={meal.protein}
          onChange={(e) => update("protein", e.target.value)}
          className="bg-zinc-900 rounded-lg p-3 border border-zinc-700"
        />

        <input
          type="number"
          placeholder="Carbs"
          value={meal.carbs}
          onChange={(e) => update("carbs", e.target.value)}
          className="bg-zinc-900 rounded-lg p-3 border border-zinc-700"
        />

        <input
          type="number"
          placeholder="Fat"
          value={meal.fat}
          onChange={(e) => update("fat", e.target.value)}
          className="bg-zinc-900 rounded-lg p-3 border border-zinc-700"
        />

        <input
          type="number"
          placeholder="Calories"
          value={meal.calories}
          onChange={(e) => update("calories", e.target.value)}
          className="bg-zinc-900 rounded-lg p-3 border border-zinc-700"
        />

      </div>

      <button
        onClick={onDelete}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
      >
        Delete Meal
      </button>

    </div>
  );
}