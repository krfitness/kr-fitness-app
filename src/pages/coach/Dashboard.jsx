import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <DashboardLayout>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Total Clients"
          value="7"
        />

        <StatCard
          title="Active Clients"
          value="7"
        />

        <StatCard
          title="Workout Plans"
          value="12"
        />

        <StatCard
          title="Meal Plans"
          value="10"
        />

      </div>

      <div className="mt-10 bg-zinc-900 rounded-2xl border border-zinc-800 p-8">

        <h2 className="text-2xl font-bold mb-4">
          Welcome to KR Fitness
        </h2>

        <p className="text-gray-400">
          This dashboard will help you manage your clients, assign workouts, create meal plans, track progress, and monitor check-ins.
        </p>

      </div>

    </DashboardLayout>
  );
}