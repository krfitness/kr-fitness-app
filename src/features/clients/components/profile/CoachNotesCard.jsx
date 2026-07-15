import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import {
  getCoachNotes,
  saveCoachNotes,
} from "../../services/clientNotesService";

export default function CoachNotesCard({ clientId }) {
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadNotes() {
      try {
        const data = await getCoachNotes(clientId);
        setNotes(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (clientId) {
      loadNotes();
    }
  }, [clientId]);

  async function handleSave() {
    try {
      setSaving(true);

      await saveCoachNotes(clientId, notes);

      toast.success("Coach notes saved successfully!");

    } catch (error) {
      console.error(error);
      toast.error("Failed to save coach notes.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        💬 Coach Notes
      </h2>

      <textarea
        rows={6}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write coaching feedback..."
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 outline-none focus:border-orange-500 resize-none"
      />

      <button
        onClick={handleSave}
        disabled={saving}
        className="mt-5 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 px-6 py-3 rounded-xl font-semibold transition"
      >
        {saving ? "Saving..." : "Save Notes"}
      </button>

    </div>
  );
}