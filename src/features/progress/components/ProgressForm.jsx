import { useState } from "react";
import PhotoUpload from "./PhotoUpload";

export default function ProgressForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    weight: "",
    waist: "",
    chest: "",
    leftArm: "",
    rightArm: "",
    leftThigh: "",
    rightThigh: "",
    water: "",
    sleep: "",
    energy: "Good",
    notes: "",
    frontPhoto: null,
    sidePhoto: null,
    backPhoto: null,
  });

  function updateField(field, value) {
    setFormData({
      ...formData,
      [field]: value,
    });
  }

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 gap-4">

        <input
          type="number"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={(e) => updateField("weight", e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3"
        />

        <input
          type="number"
          placeholder="Water Intake (L)"
          value={formData.water}
          onChange={(e) => updateField("water", e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3"
        />

        <input
          type="number"
          placeholder="Waist (cm)"
          value={formData.waist}
          onChange={(e) => updateField("waist", e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3"
        />

        <input
          type="number"
          placeholder="Chest (cm)"
          value={formData.chest}
          onChange={(e) => updateField("chest", e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3"
        />

        <input
          type="number"
          placeholder="Left Arm (cm)"
          value={formData.leftArm}
          onChange={(e) => updateField("leftArm", e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3"
        />

        <input
          type="number"
          placeholder="Right Arm (cm)"
          value={formData.rightArm}
          onChange={(e) => updateField("rightArm", e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3"
        />

        <input
          type="number"
          placeholder="Left Thigh (cm)"
          value={formData.leftThigh}
          onChange={(e) => updateField("leftThigh", e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3"
        />

        <input
          type="number"
          placeholder="Right Thigh (cm)"
          value={formData.rightThigh}
          onChange={(e) => updateField("rightThigh", e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-xl p-3"
        />

      </div>

      <input
        type="number"
        placeholder="Sleep (hours)"
        value={formData.sleep}
        onChange={(e) => updateField("sleep", e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3"
      />

      <select
        value={formData.energy}
        onChange={(e) => updateField("energy", e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3"
      >
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Poor</option>
      </select>

      <textarea
        placeholder="Daily Notes"
        value={formData.notes}
        onChange={(e) => updateField("notes", e.target.value)}
        rows={4}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <PhotoUpload
          label="Front Photo"
          onChange={(file) => updateField("frontPhoto", file)}
        />

        <PhotoUpload
          label="Side Photo"
          onChange={(file) => updateField("sidePhoto", file)}
        />

        <PhotoUpload
          label="Back Photo"
          onChange={(file) => updateField("backPhoto", file)}
        />

      </div>

      <button
        type="button"
        onClick={() => onSubmit(formData)}
        className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl"
      >
        Submit Progress
      </button>

    </div>
  );
}