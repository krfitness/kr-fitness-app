export default function ExerciseTable({
  exercises = [],
  onEdit = () => {},
  onDelete = () => {},
}) {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">

      <table className="w-full">

        <thead className="bg-zinc-800">
          <tr>
            <th className="p-4 text-left">Exercise</th>
            <th className="p-4 text-left">Muscle Group</th>
            <th className="p-4 text-left">Equipment</th>
            <th className="p-4 text-left">Difficulty</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>

          {exercises.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="text-center p-10 text-gray-400"
              >
                No exercises found.
              </td>
            </tr>
          ) : (
            exercises.map((exercise) => (
              <tr
                key={exercise.id}
                className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
              >
                <td className="p-4 font-medium">
                  {exercise.name}
                </td>

                <td className="p-4">
                  {exercise.muscleGroup}
                </td>

                <td className="p-4">
                  {exercise.equipment}
                </td>

                <td className="p-4">
                  {exercise.difficulty}
                </td>

                <td className="p-4">

                  <button
                    onClick={() => onEdit(exercise)}
                    className="text-orange-500 hover:text-orange-400 mr-5"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(exercise)}
                    className="text-red-500 hover:text-red-400"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}