export default function ExerciseItem({
  exercise,
  index,
  onChange,
  onDelete,
}) {
  function handleChange(field, value) {
    onChange(index, {
      ...exercise,
      [field]: value,
    });
  }

  return (
    <div className="bg-zinc-800 rounded-xl p-5 border border-zinc-700 space-y-4">

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-orange-500">
          Exercise {index + 1}
        </h3>

        <button
          type="button"
          onClick={() => onDelete(index)}
          className="text-red-500 hover:text-red-400"
        >
          Remove
        </button>
      </div>

      <input
        type="text"
        placeholder="Exercise Name"
        value={exercise.name}
        onChange={(e) => handleChange("name", e.target.value)}
        className="w-full bg-zinc-900 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <div className="grid grid-cols-3 gap-4">

        <input
          type="number"
          placeholder="Sets"
          value={exercise.sets}
          onChange={(e) => handleChange("sets", e.target.value)}
          className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        />

        <input
          type="number"
          placeholder="Reps"
          value={exercise.reps}
          onChange={(e) => handleChange("reps", e.target.value)}
          className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        />

        <input
          type="text"
          placeholder="Rest"
          value={exercise.rest}
          onChange={(e) => handleChange("rest", e.target.value)}
          className="bg-zinc-900 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        />

      </div>

      <input
        type="text"
        placeholder="Tempo (Optional)"
        value={exercise.tempo}
        onChange={(e) => handleChange("tempo", e.target.value)}
        className="w-full bg-zinc-900 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <textarea
        placeholder="Notes (Optional)"
        value={exercise.notes}
        onChange={(e) => handleChange("notes", e.target.value)}
        rows={3}
        className="w-full bg-zinc-900 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none resize-none"
      />

    </div>
  );
}