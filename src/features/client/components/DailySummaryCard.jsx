export default function DailySummaryCard({
  client,
  latestProgress,
  coachNotes,
}) {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white">

      <h2 className="text-3xl font-bold">
        Welcome {client?.fullName || "Client"} 👋
      </h2>

      <p className="mt-2 text-orange-100">
        Stay consistent. Every workout brings you closer to your goal.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white/10 rounded-2xl p-5">
          <p className="text-sm opacity-80">
            Current Weight
          </p>

          <h3 className="text-3xl font-bold mt-2">
            {latestProgress?.weight || "--"} kg
          </h3>
        </div>

        <div className="bg-white/10 rounded-2xl p-5">
          <p className="text-sm opacity-80">
            Goal
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {client?.goal || "--"}
          </h3>
        </div>

        <div className="bg-white/10 rounded-2xl p-5">
          <p className="text-sm opacity-80">
            Coach Note
          </p>

          <p className="mt-2 line-clamp-3">
            {coachNotes || "No new feedback."}
          </p>
        </div>

      </div>

    </div>
  );
}