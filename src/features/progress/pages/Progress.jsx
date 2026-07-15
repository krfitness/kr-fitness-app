import { useState, useEffect } from "react";
import ClientLayout from "../../../layouts/ClientLayout";
import useAuth from "../../auth/hooks/useAuth";
import { getClientByEmail } from "../../client/services/clientProfileService";
import { submitCheckin } from "../services/checkinService";

export default function Progress() {

  const { currentUser } = useAuth();

  const [client, setClient] = useState(null);

  const [form, setForm] = useState({
    weight: "",
    water: "",
    sleep: "",
    workout: "Yes",
    meal: "Yes",
  });

  useEffect(() => {
    async function loadClient() {
      if (!currentUser) return;

      const data = await getClientByEmail(currentUser.email);

      setClient(data);
    }

    loadClient();
  }, [currentUser]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await submitCheckin({
      clientId: client.id,
      clientName: client.fullName,
      ...form,
    });

    alert("Weekly Check-in Submitted ✅");

    setForm({
      weight: "",
      water: "",
      sleep: "",
      workout: "Yes",
      meal: "Yes",
    });
  }

  return (
    <ClientLayout>

      <div className="max-w-3xl">

        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          Weekly Check-in
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 space-y-5"
        >

          <input
            name="weight"
            placeholder="Current Weight"
            value={form.weight}
            onChange={handleChange}
            className="w-full bg-zinc-800 rounded-xl p-4"
          />

          <input
            name="water"
            placeholder="Water Intake (Litres)"
            value={form.water}
            onChange={handleChange}
            className="w-full bg-zinc-800 rounded-xl p-4"
          />

          <input
            name="sleep"
            placeholder="Sleep Hours"
            value={form.sleep}
            onChange={handleChange}
            className="w-full bg-zinc-800 rounded-xl p-4"
          />

          <select
            name="workout"
            value={form.workout}
            onChange={handleChange}
            className="w-full bg-zinc-800 rounded-xl p-4"
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <select
            name="meal"
            value={form.meal}
            onChange={handleChange}
            className="w-full bg-zinc-800 rounded-xl p-4"
          >
            <option>Yes</option>
            <option>No</option>
          </select>

          <button
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold"
          >
            Submit Check-in
          </button>

        </form>

      </div>

    </ClientLayout>
  );
}