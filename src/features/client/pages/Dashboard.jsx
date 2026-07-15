import { useEffect, useState } from "react";
import ClientLayout from "../../../layouts/ClientLayout";
import useAuth from "../../auth/hooks/useAuth";
import { getClientByEmail } from "../services/clientProfileService";
import DashboardStats from "../components/DashboardStats";

export default function Dashboard() {
  const { currentUser } = useAuth();

  const [client, setClient] = useState(null);

  useEffect(() => {
    async function loadClient() {
      if (!currentUser) return;

      const data = await getClientByEmail(currentUser.email);

      setClient(data);
    }

    loadClient();
  }, [currentUser]);

  return (
    <ClientLayout>

      <div className="space-y-10">

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 shadow-xl">

          <h1 className="text-5xl font-black text-white">
            Welcome Back,
            <br />
            {client?.fullName || "Client"} 👋
          </h1>

          <DashboardStats client={client} />
           
          <p className="text-orange-100 mt-4 text-xl">
            Stay consistent. Trust the process. Results will follow.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">

            <div className="text-6xl mb-5">🏋️</div>

            <h2 className="text-2xl font-bold">
              Workout
            </h2>

            <p className="text-gray-400 mt-3">
              Your workout is ready.
              Open it from the sidebar.
            </p>

          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">

            <div className="text-6xl mb-5">🍽️</div>

            <h2 className="text-2xl font-bold">
              Meal Plan
            </h2>

            <p className="text-gray-400 mt-3">
              Follow today's nutrition plan.
            </p>

          </div>

          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 text-center">

            <div className="text-6xl mb-5">📈</div>

            <h2 className="text-2xl font-bold">
              Weekly Progress
            </h2>

            <p className="text-gray-400 mt-3">
              Upload your progress every week.
            </p>

          </div>

        </div>

        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-10">

          <h2 className="text-3xl font-bold text-orange-500 mb-5">
            Coach's Message
          </h2>

          <p className="text-lg text-gray-300 leading-8">
            Welcome to KR Fitness.

            <br /><br />

            Stay disciplined with your workouts,
            complete every meal,
            drink enough water,
            sleep well and trust the process.

            <br /><br />

            Every day counts.

            Let's build the best version of you.
          </p>

        </div>

      </div>

    </ClientLayout>
  );
}