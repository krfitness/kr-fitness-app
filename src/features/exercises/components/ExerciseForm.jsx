export default function ExerciseForm({
  exerciseData,
  setExerciseData,
}) {
  function updateField(field, value) {
    setExerciseData({
      ...exerciseData,
      [field]: value,
    });
  }

  return (
    <div className="space-y-5">

      <input
        type="text"
        placeholder="Exercise Name"
        value={exerciseData.name}
        onChange={(e) => updateField("name", e.target.value)}
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <div className="grid md:grid-cols-2 gap-4">

        <select
          value={exerciseData.muscleGroup}
          onChange={(e) => updateField("muscleGroup", e.target.value)}
          className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        >
          <option value="">Select Muscle Group</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Biceps">Biceps</option>
          <option value="Triceps">Triceps</option>
          <option value="Legs">Legs</option>
          <option value="Core">Core</option>
          <option value="Cardio">Cardio</option>
        </select>

        <select
          value={exerciseData.equipment}
          onChange={(e) => updateField("equipment", e.target.value)}
          className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        >
          <option value="">Select Equipment</option>
          <option value="Barbell">Barbell</option>
          <option value="Dumbbell">Dumbbell</option>
          <option value="Machine">Machine</option>
          <option value="Cable">Cable</option>
          <option value="Bodyweight">Bodyweight</option>
          <option value="Resistance Band">Resistance Band</option>
        </select>

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <select
          value={exerciseData.difficulty}
          onChange={(e) => updateField("difficulty", e.target.value)}
          className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        >
          <option value="">Select Difficulty</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select
          value={exerciseData.exerciseType}
          onChange={(e) => updateField("exerciseType", e.target.value)}
          className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        >
          <option value="">Exercise Type</option>
          <option value="Compound">Compound</option>
          <option value="Isolation">Isolation</option>
        </select>

      </div>

      <textarea
        rows={4}
        placeholder="Exercise Instructions"
        value={exerciseData.instructions}
        onChange={(e) => updateField("instructions", e.target.value)}
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none resize-none"
      />

    </div>
  );
}