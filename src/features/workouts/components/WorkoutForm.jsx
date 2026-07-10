import WorkoutDay from "./WorkoutDay";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function WorkoutForm({
  workoutData,
  setWorkoutData,
}) {
  function updateWorkout(field, value) {
    setWorkoutData({
      ...workoutData,
      [field]: value,
    });
  }

  function addExercise(day) {
    const week = { ...workoutData.week };

    week[day] = [
      ...(week[day] || []),
      {
        name: "",
        sets: "",
        reps: "",
        rest: "",
        tempo: "",
        notes: "",
      },
    ];

    setWorkoutData({
      ...workoutData,
      week,
    });
  }

  function updateExercise(day, index, updatedExercise) {
    const week = { ...workoutData.week };

    week[day][index] = updatedExercise;

    setWorkoutData({
      ...workoutData,
      week,
    });
  }

  function deleteExercise(day, index) {
    const week = { ...workoutData.week };

    week[day] = week[day].filter((_, i) => i !== index);

    setWorkoutData({
      ...workoutData,
      week,
    });
  }

  return (
    <div className="space-y-6">

      <input
        type="text"
        placeholder="Workout Name"
        value={workoutData.name}
        onChange={(e) => updateWorkout("name", e.target.value)}
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <select
        value={workoutData.goal}
        onChange={(e) => updateWorkout("goal", e.target.value)}
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      >
        <option value="">Select Goal</option>
        <option value="Muscle Gain">Muscle Gain</option>
        <option value="Fat Loss">Fat Loss</option>
        <option value="Body Recomposition">Body Recomposition</option>
        <option value="Strength">Strength</option>
        <option value="Contest Prep">Contest Prep</option>
      </select>

      <div className="space-y-8">
        {DAYS.map((day) => (
          <WorkoutDay
            key={day}
            day={day}
            exercises={workoutData.week?.[day] || []}
            onAddExercise={() => addExercise(day)}
            onUpdateExercise={(index, exercise) =>
              updateExercise(day, index, exercise)
            }
            onDeleteExercise={(index) =>
              deleteExercise(day, index)
            }
          />
        ))}
      </div>

    </div>
  );
}