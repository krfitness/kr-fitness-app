export default function PersonalInfoCard({ client }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Personal Information
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">Full Name</span>
          <span className="font-semibold">
            {client.fullName || "--"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Email</span>
          <span>
            {client.email || "--"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Phone</span>
          <span>
            {client.phone || "--"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Height</span>
          <span>
            {client.height || "--"} cm
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Current Weight</span>
          <span>
            {client.currentWeight || "--"} kg
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Goal</span>
          <span>
            {client.goal || "--"}
          </span>
        </div>

      </div>

    </div>
  );
}