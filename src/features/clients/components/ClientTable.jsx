export default function ClientTable({
  clients,
  onEdit = () => {},
  onAssignWorkout = () => {},
  onDelete = () => {},
}) {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">

      <table className="w-full">

        <thead className="bg-zinc-800">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Goal</th>
            <th className="p-4 text-left">Weight</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>

          {clients.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="text-center p-10 text-gray-400"
              >
                No clients found.
              </td>
            </tr>
          ) : (
            clients.map((client) => (
              <tr
                key={client.id}
                className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
              >
                <td className="p-4 font-medium">
                  {client.fullName}
                </td>

                <td className="p-4">
                  {client.goal}
                </td>

                <td className="p-4">
                  {client.currentWeight} kg
                </td>

                <td className="p-4">
                  <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
                    Active
                  </span>
                </td>

                <td className="p-4">

                  <button
  onClick={() => onEdit(client)}
  className="text-orange-500 hover:text-orange-400 mr-5"
>
  Edit
</button>

<button
  onClick={() => onAssignWorkout(client)}
  className="text-blue-500 hover:text-blue-400 mr-5"
>
  Assign Workout
</button>

<button
  onClick={() => onDelete(client)}
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