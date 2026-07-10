import { useState } from "react";
import { toast } from "react-hot-toast";
import ClientForm from "./ClientForm";
import {
  addClient,
  updateClient,
} from "../services/clientService";

export default function AddClientModal({
  show,
  onClose,
  onClientAdded,
  editClient,
}) {

  const emptyForm = {
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    height: "",
    currentWeight: "",
    goalWeight: "",
    goal: "",
  };

  const [formData, setFormData] = useState(() => {
    if (editClient) {
      return {
        fullName: editClient.fullName || "",
        email: editClient.email || "",
        phone: editClient.phone || "",
        age: editClient.age || "",
        gender: editClient.gender || "",
        height: editClient.height || "",
        currentWeight: editClient.currentWeight || "",
        goalWeight: editClient.goalWeight || "",
        goal: editClient.goal || "",
      };
    }

    return { ...emptyForm };
  });

  async function handleSave() {
    try {
      if (editClient) {
        await updateClient(editClient.id, formData);
        toast.success("Client updated successfully!");
      } else 
        
        {
        await addClient(formData);
        toast.success("Client added successfully!");
      }

      if (onClientAdded) {
        await onClientAdded();
      }

      setFormData({ ...emptyForm });

      onClose();

    } catch (error) {
      console.error(error);
      toast.error("Operation failed.");
    }
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-zinc-900 rounded-2xl p-8 w-full max-w-2xl border border-zinc-800">

        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          {editClient ? "Edit Client" : "Add New Client"}
        </h2>

        <ClientForm
          formData={formData}
          setFormData={setFormData}
        />

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-zinc-700 hover:bg-zinc-600"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600"
          >
            {editClient ? "Update Client" : "Save Client"}
          </button>

        </div>

      </div>

    </div>
  );
}