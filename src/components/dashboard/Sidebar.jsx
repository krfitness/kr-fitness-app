import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-3xl font-bold text-orange-500 mb-10">
        KR FITNESS
      </h1>

      <nav className="space-y-4">
        <Link to="/coach" className="block hover:text-orange-500">
          Dashboard
        </Link>

        <Link to="/coach/clients" className="block hover:text-orange-500">
          Clients
        </Link>

        <Link to="/coach/workouts" className="block hover:text-orange-500">
          Workouts
        </Link>

        <Link to="/coach/meals" className="block hover:text-orange-500">
          Meals
        </Link>

        <Link to="/coach/progress" className="block hover:text-orange-500">
         Progress
        </Link>
        
        <Link to="/coach/settings" className="block hover:text-orange-500">
          Settings
        </Link>
      </nav>
    </aside>
  )
}