import { useEffect, useState } from "react";

import ClientLayout from "../../../layouts/ClientLayout";

import TodayWorkout from "../components/TodayWorkout";
import TodayMeal from "../components/TodayMeal";
import DailySummaryCard from "../components/DailySummaryCard";

import useAuth from "../../auth/hooks/useAuth";

import { getClientById } from "../../clients/services/clientProfileService";
import { getCoachNotes } from "../../clients/services/clientNotesService";
import { getClientProgressHistory } from "../../progress/services/clientProgressService";

export default function Dashboard() {
  const { currentUser } = useAuth();

  const [client, setClient] = useState(null);
  const [latestProgress, setLatestProgress] = useState(null);
  const [coachNotes, setCoachNotes] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        if (!currentUser) return;

        const clientData = await getClientById(currentUser.uid);

        setClient(clientData);

        if (clientData) {
          const [notes, progress] = await Promise.all([
            getCoachNotes(clientData.id),
            getClientProgressHistory(clientData.id),
          ]);

          setCoachNotes(notes);
          setLatestProgress(progress[0] || null);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, [currentUser]);

  return (
    <ClientLayout>

      <div className="space-y-8">

        <DailySummaryCard
          client={client}
          latestProgress={latestProgress}
          coachNotes={coachNotes}
        />

        <TodayWorkout />

        <TodayMeal />

      </div>

    </ClientLayout>
  );
}