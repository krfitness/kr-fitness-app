import { useState } from "react";
import { updateClient } from "../../services/updateClientService";

export default function PersonalInfoCard({ client }) {
  const [form, setForm] = useState({
    weight: client?.weight || "",
    goalWeight: client?.goalWeight || "",
    calories: client?.calories || "",
    water: client?.water || "",
    week: client?.week || 1,
    streak: client?.streak || 0,
  });

  const [saving, setSaving] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSave() {
    setSaving(true);

    await updateClient(client.id, form);

    setSaving(false);

    alert("Client updated successfully.");
  }

  return (
    <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-6">

      <h2 className="text-2xl font-bold text-orange-500 mb-6">
        Client Details
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="weight"
          value={form.weight}
          onChange={handleChange}
          className="bg-zinc-800 rounded-xl p-3"
          placeholder="Current Weight"
        />

        <input
          name="goalWeight"
          value={form.goalWeight}
          onChange={handleChange}
          className="bg-zinc-800 rounded-xl p-3"
          placeholder="Goal Weight"
        />

        <input
          name="calories"
          value={form.calories}
          onChange={handleChange}
          className="bg-zinc-800 rounded-xl p-3"
          placeholder="Calories"
        />

        <input
          name="water"
          value={form.water}
          onChange={handleChange}
          className="bg-zinc-800 rounded-xl p-3"
          placeholder="Water (L)"
        />

        <input
          name="week"
          value={form.week}
          onChange={handleChange}
          className="bg-zinc-800 rounded-xl p-3"
          placeholder="Training Week"
        />

        <input
          name="streak"
          value={form.streak}
          onChange={handleChange}
          className="bg-zinc-800 rounded-xl p-3"
          placeholder="Streak"
        />

      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>

    </div>
  );
}