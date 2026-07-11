import ExerciseCard from "./ExerciseCard";

export default function WorkoutCard({
  workout,
  clientId,
}) {
  // Temporary: always show Monday
  const exercises = workout.week?.Monday || [];

  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

      <h3 className="text-2xl font-bold">
        {workout.name}
      </h3>

      <p className="text-gray-400 mt-1 mb-6">
        Goal: {workout.goal}
      </p>

      {exercises.length === 0 ? (
        <div className="text-gray-400">
          No exercises for today.
        </div>
      ) : (
        <div className="space-y-4">

          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              exercise={exercise}
              clientId={clientId}
              workoutId={workout.id}
              day="Monday"
            />
          ))}

        </div>
      )}

    </div>
  );
}