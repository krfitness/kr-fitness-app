import ClientLayout from "../../../layouts/ClientLayout";
import TodayWorkout from "../components/TodayWorkout";

export default function Dashboard() {
  return (
    <ClientLayout>

      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-orange-500">
            Client Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome back! Here's your assigned workout for today.
          </p>
        </div>

        <TodayWorkout />

      </div>

    </ClientLayout>
  );
}