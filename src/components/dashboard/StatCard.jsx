export default function StatCard({
  title,
  value,
}) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-orange-500 mt-3">
        {value}
      </h2>

    </div>
  );
}