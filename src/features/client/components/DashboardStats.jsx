export default function DashboardStats({ client }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <p className="text-gray-400 text-sm">Current Weight</p>
        <h2 className="text-4xl font-bold text-orange-500 mt-2">
          {client?.weight || "--"} kg
        </h2>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <p className="text-gray-400 text-sm">Goal Weight</p>
        <h2 className="text-4xl font-bold text-orange-500 mt-2">
          {client?.goalWeight || "--"} kg
        </h2>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <p className="text-gray-400 text-sm">Daily Calories</p>
        <h2 className="text-4xl font-bold text-orange-500 mt-2">
          {client?.calories || "--"}
        </h2>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <p className="text-gray-400 text-sm">Water Goal</p>
        <h2 className="text-4xl font-bold text-orange-500 mt-2">
          {client?.water || "4"} L
        </h2>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <p className="text-gray-400 text-sm">Training Week</p>
        <h2 className="text-4xl font-bold text-orange-500 mt-2">
          {client?.week || "1"}
        </h2>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <p className="text-gray-400 text-sm">Consistency</p>
        <h2 className="text-4xl font-bold text-green-500 mt-2">
          🔥 {client?.streak || 0}
        </h2>
      </div>

    </div>
  );
}