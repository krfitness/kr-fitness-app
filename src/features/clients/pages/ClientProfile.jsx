import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../../layouts/DashboardLayout";

import { getClientById } from "../services/clientProfileService";
import { getAssignedWorkout } from "../../workouts/services/clientWorkoutService";
import { getAssignedMeal } from "../../meals/services/clientMealService";
import { getClientProgressHistory } from "../../progress/services/clientProgressService";

import PersonalInfoCard from "../components/profile/PersonalInfoCard";
import AssignedWorkoutCard from "../components/profile/AssignedWorkoutCard";
import AssignedMealCard from "../components/profile/AssignedMealCard";
import LatestProgressCard from "../components/profile/LatestProgressCard";
import ProgressTimeline from "../components/profile/ProgressTimeline";
import CoachNotesCard from "../components/profile/CoachNotesCard";

export default function ClientProfile() {
  const { id } = useParams();

  const [client, setClient] = useState(null);
  const [workout, setWorkout] = useState(null);
  const [meal, setMeal] = useState(null);
  const [progressList, setProgressList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const clientData = await getClientById(id);
        setClient(clientData);

        if (clientData) {
          const [workoutData, mealData, progressData] =
            await Promise.all([
              getAssignedWorkout(clientData.id),
              getAssignedMeal(clientData.id),
              getClientProgressHistory(clientData.id),
            ]);

          setWorkout(workoutData);
          setMeal(mealData);
          setProgressList(progressData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-white p-10">
          Loading...
        </div>
      </DashboardLayout>
    );
  }

  if (!client) {
    return (
      <DashboardLayout>
        <div className="text-white p-10">
          Client not found.
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8">

          <h1 className="text-4xl font-bold text-white">
            {client.fullName}
          </h1>

          <p className="text-orange-100 mt-2">
            {client.goal || "KR Fitness Client"}
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-1">
            <PersonalInfoCard client={client} />
          </div>

          <div className="lg:col-span-2 space-y-6">

            <AssignedWorkoutCard
              workout={workout}
              onChangeWorkout={() => {}}
            />

            <AssignedMealCard
              meal={meal}
              onChangeMeal={() => {}}
            />

          </div>

        </div>

        <LatestProgressCard
          progress={progressList[0] || null}
        />

        <ProgressTimeline
          progressList={progressList}
        />

        <CoachNotesCard
          clientId={client.id}
        />

      </div>

    </DashboardLayout>
  );
}