import { useState, useEffect, useCallback } from "react";

import SearchWorkout from "../components/SearchWorkout";
import WorkoutTable from "../components/WorkoutTable";
import AddWorkoutModal from "../components/AddWorkoutModal";

import { getWorkouts } from "../services/workoutService";

export default function Workouts() {
  const [showModal, setShowModal] = useState(false);
  const [workouts, setWorkouts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const loadWorkouts = useCallback(async () => {
    try {
      const data = await getWorkouts();
      setWorkouts(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadWorkouts();
  }, [loadWorkouts]);

  const filteredWorkouts = workouts.filter((workout) => {
    const search = searchTerm.toLowerCase();

    return (
      workout.name?.toLowerCase().includes(search) ||
      workout.goal?.toLowerCase().includes(search)
    );
  });

  function handleAddWorkout() {
    setSelectedWorkout(null);
    setShowModal(true);
  }

  function handleEditWorkout(workout) {
    setSelectedWorkout(workout);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setSelectedWorkout(null);
  }

  return (
    <div className="text-white">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-orange-500">
            Workouts
          </h1>

          <p className="text-gray-400 mt-2">
            Create and manage workout plans
          </p>
        </div>

        <button
          onClick={handleAddWorkout}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition"
        >
          + New Workout
        </button>

      </div>

      <SearchWorkout
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="mt-8">
        <WorkoutTable
          workouts={filteredWorkouts}
          onEdit={handleEditWorkout}
        />
      </div>

      <AddWorkoutModal
        show={showModal}
        onClose={handleCloseModal}
        onWorkoutAdded={loadWorkouts}
        editWorkout={selectedWorkout}
      />

    </div>
  );
}