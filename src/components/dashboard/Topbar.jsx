import { FaBell } from "react-icons/fa";

export default function Topbar() {
  return (
    <header className="h-20 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-8">

      <div>
        <h2 className="text-2xl font-bold">
          Coach Dashboard
        </h2>

        <p className="text-gray-400">
          Welcome back, Kiran 👋
        </p>
      </div>

      <div className="flex items-center gap-6">

        <FaBell
          className="text-orange-500 text-xl cursor-pointer"
        />

        <div className="text-right">
          <h3 className="font-semibold">
            Kiran Reddy
          </h3>

          <p className="text-sm text-gray-400">
            Head Coach
          </p>
        </div>

      </div>

    </header>
  );
}