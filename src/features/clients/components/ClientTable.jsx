import { Link } from "react-router-dom";
import { updateClientStatus } from "../services/updateClientStatus";

export default function ClientTable({
  clients,
  onEdit = () => {},
  onAssignWorkout = () => {},
  onRefresh = () => {},
}) {
  async function changeStatus(client, status) {
    try {
      const uid = client.uid || client.userId;

      if (!uid) {
        alert("Client UID not found.");
        return;
      }

      await updateClientStatus(uid, status);

      alert(`Client ${status} successfully`);

      onRefresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  return (
    <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">

      <table className="w-full">

        <thead className="bg-zinc-800">
          <tr>
            <th className="p-4 text-left">Client</th>
            <th className="p-4 text-left">Goal</th>
            <th className="p-4 text-center">Weight</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {clients.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="p-10 text-center text-gray-400"
              >
                No clients found.
              </td>
            </tr>
          ) : (
            clients.map((client) => (

              <tr
                key={client.id}
                className="border-t border-zinc-800 hover:bg-zinc-800 transition"
              >

                <td className="p-4">
                  <div>
                    <h3 className="font-semibold">
                      {client.fullName}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {client.email}
                    </p>
                  </div>
                </td>

                <td className="p-4">
                  {client.goal || "--"}
                </td>

                <td className="p-4 text-center">
                  {client.currentWeight || client.weight || "--"} kg
                </td>

                <td className="p-4 text-center">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      client.status === "Active"
                        ? "bg-green-600"
                        : "bg-yellow-600"
                    }`}
                  >
                    {client.status || "Pending"}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex flex-wrap gap-2">

                    <Link
                      to={`/coach/client/${client.id}`}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => onEdit(client)}
                      className="bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded-lg text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onAssignWorkout(client)}
                      className="bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-lg text-sm"
                    >
                      Workout
                    </button>

                    <button
                      onClick={() => changeStatus(client, "Active")}
                      className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg text-sm"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => changeStatus(client, "Pending")}
                      className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm"
                    >
                      Deactivate
                    </button>

                  </div>

                </td>

              </tr>

            ))
          )}

        </tbody>

      </table>

    </div>
  );
}