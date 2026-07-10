export default function ClientForm({ formData, setFormData }) {
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form className="space-y-4">

      <input
        name="fullName"
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <div className="grid grid-cols-2 gap-4">

        <input
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        >
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <input
          name="height"
          type="number"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        />

        <input
          name="currentWeight"
          type="number"
          placeholder="Current Weight (kg)"
          value={formData.currentWeight}
          onChange={handleChange}
          className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
        />

      </div>

      <input
        name="goalWeight"
        type="number"
        placeholder="Goal Weight (kg)"
        value={formData.goalWeight}
        onChange={handleChange}
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      />

      <select
        name="goal"
        value={formData.goal}
        onChange={handleChange}
        className="w-full bg-zinc-800 p-3 rounded-lg border border-zinc-700 focus:border-orange-500 outline-none"
      >
        <option value="">Select Goal</option>
        <option>Fat Loss</option>
        <option>Muscle Gain</option>
        <option>Body Recomposition</option>
        <option>Contest Prep</option>
        <option>General Fitness</option>
      </select>

    </form>
  );
}