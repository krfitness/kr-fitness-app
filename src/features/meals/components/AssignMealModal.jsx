import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { getClients } from "../../clients/services/clientService";
import { assignMealToClient } from "../services/mealService";

export default function AssignMealModal({
  show,
  onClose,
  mealId,
}) {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");

  useEffect(() => {
    async function loadClients() {
      const data = await getClients();
      setClients(data);
    }

    if (show) {
      loadClients();
    }
  }, [show]);

  async function handleAssign() {
    if (!selectedClient) {
      toast.error("Please select a client.");
      return;
    }

    try {
      await assignMealToClient(selectedClient, mealId);
      toast.success("Meal assigned successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to assign meal.");
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Assign Meal Plan
        </h2>

        <select
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3"
        >
          <option value="">Select Client</option>

          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-4 mt-6">

          <button
            onClick={onClose}
            className="bg-zinc-700 px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleAssign}
            className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg"
          >
            Assign
          </button>

        </div>

      </div>

    </div>
  );
}