export default function AssignedWorkoutCard({
  workout,
  onChangeWorkout,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-full">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          🏋️ Assigned Workout
        </h2>

        <button
          onClick={onChangeWorkout}
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
          Change
        </button>

      </div>

      {workout ? (
        <div className="space-y-4">

          <div>

            <p className="text-gray-400 text-sm">
              Workout Name
            </p>

            <p className="text-xl font-semibold mt-1">
              {workout.name}
            </p>

          </div>

          <div>

            <p className="text-gray-400 text-sm">
              Goal
            </p>

            <p className="mt-1">
              {workout.goal || "--"}
            </p>

          </div>

          <div>

            <p className="text-gray-400 text-sm">
              Days
            </p>

            <p className="mt-1">
              {workout.days?.length || 0} Days
            </p>

          </div>

        </div>
      ) : (
        <div className="text-center py-10">

          <div className="text-5xl mb-3">
            🏋️
          </div>

          <p className="text-gray-400">
            No workout assigned yet.
          </p>

        </div>
      )}

    </div>
  );
}