export default function WorkoutForm({
  workoutData,
  setWorkoutData,
}) {
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
        placeholder="Training Days (Example: Monday, Tuesday, Thursday)"
        value={workoutData.days}
        onChange={(e) =>
          setWorkoutData({
            ...workoutData,
            days: e.target.value,
          })
        }
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <div className="rounded-xl border border-dashed border-zinc-700 p-6 text-center text-gray-400">
        Exercise Builder (Coming Soon)
      </div>

    </div>
  );
}