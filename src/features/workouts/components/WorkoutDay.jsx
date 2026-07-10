import ExerciseItem from "./ExerciseItem";

export default function WorkoutDay({
  day,
  exercises = [],
  onAddExercise,
  onUpdateExercise,
  onDeleteExercise,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-orange-500">
          {day}
        </h2>

        <button
          type="button"
          onClick={onAddExercise}
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg"
        >
          + Add Exercise
        </button>

      </div>

      {exercises.length === 0 ? (
        <div className="border border-dashed border-zinc-700 rounded-xl p-6 text-center text-gray-400">
          No exercises added for {day}
        </div>
      ) : (
        <div className="space-y-5">

          {exercises.map((exercise, index) => (
            <ExerciseItem
              key={index}
              exercise={exercise}
              index={index}
              onChange={onUpdateExercise}
              onDelete={onDeleteExercise}
            />
          ))}

        </div>
      )}

    </div>
  );
}