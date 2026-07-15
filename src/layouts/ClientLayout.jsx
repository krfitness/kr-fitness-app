import { Link } from "react-router-dom";

export default function ClientLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      <aside className="w-64 bg-zinc-900 p-6 border-r border-zinc-800">

        <h1 className="text-3xl font-bold text-orange-500 mb-10">
          KR FITNESS
        </h1>

        <nav className="space-y-4">

          <Link
            to="/client/progress"
            className="block hover:text-orange-500"
          >
            Dashboard
          </Link>

          <Link
            to="/client/progress"
            className="block hover:text-orange-500"
          >
            Today's Workout
          </Link>

          <Link
            to="/client/progress"
            className="block hover:text-orange-500"
          >
            Meal Plan
          </Link>

          <Link
            to="/client/progress"
            className="block hover:text-orange-500"
          >
            Progress
          </Link>

          <Link
            to="/client/progress"
            className="block hover:text-orange-500"
          >
            Profile
          </Link>

        </nav>

      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}