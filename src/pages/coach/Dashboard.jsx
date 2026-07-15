import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";

import { getDashboardStats } from "../../features/dashboard/services/dashboardService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalClients: 0,
    workoutPlans: 0,
    mealPlans: 0,
    checkIns: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 shadow-xl">

          <h1 className="text-4xl font-bold text-white">
            Welcome Back, Kiran 👋
          </h1>

          <p className="text-orange-100 mt-2 text-lg">
            Manage your clients, workouts and meal plans from one place.
          </p>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="Total Clients"
            value={loading ? "..." : stats.totalClients}
          />

          <StatCard
            title="Workout Plans"
            value={loading ? "..." : stats.workoutPlans}
          />

          <StatCard
            title="Meal Plans"
            value={loading ? "..." : stats.mealPlans}
          />

          <StatCard
            title="Weekly Check-ins"
            value={loading ? "..." : stats.checkIns}
          />

        </div>

        {/* Quick Actions */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

            <Link
              to="/coach/clients"
              className="bg-zinc-800 hover:bg-orange-500 transition rounded-2xl p-6 text-center font-semibold"
            >
              👥<br />
              Add / Manage Clients
            </Link>

            <Link
              to="/coach/workouts"
              className="bg-zinc-800 hover:bg-orange-500 transition rounded-2xl p-6 text-center font-semibold"
            >
              🏋️<br />
              Workout Plans
            </Link>

            <Link
              to="/coach/meals"
              className="bg-zinc-800 hover:bg-orange-500 transition rounded-2xl p-6 text-center font-semibold"
            >
              🍽️<br />
              Meal Plans
            </Link>

            <Link
              to="/coach/progress"
              className="bg-zinc-800 hover:bg-orange-500 transition rounded-2xl p-6 text-center font-semibold"
            >
              📸<br />
              Weekly Check-ins
            </Link>

          </div>

        </div>

        {/* Recent Activity */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="bg-zinc-800 rounded-2xl p-5 flex justify-between items-center">

              <div>

                <h3 className="font-semibold">
                  Client Management
                </h3>

                <p className="text-gray-400 text-sm">
                  View, edit and manage your clients.
                </p>

              </div>

              <Link
                to="/coach/clients"
                className="text-orange-500 font-semibold"
              >
                Open →
              </Link>

            </div>

            <div className="bg-zinc-800 rounded-2xl p-5 flex justify-between items-center">

              <div>

                <h3 className="font-semibold">
                  Workout Library
                </h3>

                <p className="text-gray-400 text-sm">
                  Create and assign workout plans.
                </p>

              </div>

              <Link
                to="/coach/workouts"
                className="text-orange-500 font-semibold"
              >
                Open →
              </Link>

            </div>

            <div className="bg-zinc-800 rounded-2xl p-5 flex justify-between items-center">

              <div>

                <h3 className="font-semibold">
                  Meal Library
                </h3>

                <p className="text-gray-400 text-sm">
                  Create and assign meal plans.
                </p>

              </div>

              <Link
                to="/coach/meals"
                className="text-orange-500 font-semibold"
              >
                Open →
              </Link>

            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}