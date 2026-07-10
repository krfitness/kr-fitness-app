import ExerciseItem from "./ExerciseItem";

export default function WorkoutForm({
  workoutData,
  setWorkoutData,
}) {
  function addExercise() {
    setWorkoutData({
      ...workoutData,
      exercises: [
        ...(workoutData.exercises || []),
        {
          name: "",
          sets: "",
          reps: "",
          rest: "",
          tempo: "",
          notes: "",
        },
      ],
    });
  }

  function updateExercise(index, updatedExercise) {
    const exercises = [...(workoutData.exercises || [])];
    exercises[index] = updatedExercise;

    setWorkoutData({
      ...workoutData,
      exercises,
    });
  }

  function deleteExercise(index) {
    const exercises = [...(workoutData.exercises || [])];
    exercises.splice(index, 1);

    setWorkoutData({
      ...workoutData,
      exercises,
    });
  }

  return (
    <div className="space-y-6">

      <input
        type="text"
        placeholder="Workout Name"
        value={workoutData.name}
        onChange={(e) =>
          setWorkoutData({
            ...workoutData,
            name: e.target.value,
          })
        }
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <select
        value={workoutData.goal}
        onChange={(e) =>
          setWorkoutData({
            ...workoutData,
            goal: e.target.value,
          })
        }
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      >
        <option value="">Select Goal</option>
        <option value="Muscle Gain">Muscle Gain</option>
        <option value="Fat Loss">Fat Loss</option>
        <option value="Body Recomposition">Body Recomposition</option>
        <option value="Strength">Strength</option>
        <option value="Contest Prep">Contest Prep</option>
      </select>

      <input
        type="text"
        placeholder="Training Days"
        value={workoutData.days}
        onChange={(e) =>
          setWorkoutData({
            ...workoutData,
            days: e.target.value,
          })
        }
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <div className="space-y-4">

        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-orange-500">
            Exercises
          </h3>

          <button
            type="button"
            onClick={addExercise}
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg"
          >
            + Add Exercise
          </button>
        </div>

        {(workoutData.exercises || []).length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-700 p-6 text-center text-gray-400">
            No exercises added yet.
          </div>
        ) : (
          workoutData.exercises.map((exercise, index) => (
            <ExerciseItem
              key={index}
              exercise={exercise}
              index={index}
              onChange={updateExercise}
              onDelete={deleteExercise}
            />
          ))
        )}

      </div>

    </div>
  );
}