            export default function WorkoutTable({ workouts = [], onEdit = () => {} }) {
            return (
                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">

                <table className="w-full">

                    <thead className="bg-zinc-800">
                    <tr>
                        <th className="p-4 text-left">Workout Name</th>
                        <th className="p-4 text-left">Goal</th>
                        <th className="p-4 text-left">Days</th>
                        <th className="p-4 text-left">Exercises</th>
                        <th className="p-4 text-left">Actions</th>
                    </tr>
                    </thead>

                    <tbody>

                    {workouts.length === 0 ? (
                        <tr>
                        <td
                            colSpan="5"
                            className="text-center p-10 text-gray-400"
                        >
                            No workouts found.
                        </td>
                        </tr>
                    ) : (
                        workouts.map((workout) => (
                        <tr
                            key={workout.id}
                            className="border-t border-zinc-800"
                        >
                            <td className="p-4">{workout.name}</td>

                            <td className="p-4">{workout.goal}</td>

                            <td className="p-4">{workout.days}</td>

                            <td className="p-4">
                            {workout.exercises?.length || 0}
                            </td>

                            <td className="p-4">

                            <button
                                onClick={() => onEdit(workout)}
                                className="text-orange-500 hover:underline mr-4"
                            >
                                Edit
                            </button>

                            <button
                                className="text-red-500 hover:underline"
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