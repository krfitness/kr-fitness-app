export default function SearchWorkout({
  searchTerm = "",
  setSearchTerm = () => {},
}) {
  return (
    <input
      type="text"
      placeholder="Search workouts..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-4 outline-none focus:border-orange-500 text-white"
    />
  );
}