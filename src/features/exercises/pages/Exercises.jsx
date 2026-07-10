import { useState, useEffect, useCallback } from "react";

import SearchExercise from "../components/SearchExercise";
import ExerciseTable from "../components/ExerciseTable";
import AddExerciseModal from "../components/AddExerciseModal";

import { getExercises } from "../services/exerciseService";

export default function Exercises() {
  const [showModal, setShowModal] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExercise, setSelectedExercise] = useState(null);

  const loadExercises = useCallback(async () => {
    try {
      const data = await getExercises();
      setExercises(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadExercises();
  }, [loadExercises]);

  const filteredExercises = exercises.filter((exercise) => {
    const search = searchTerm.toLowerCase();

    return (
      exercise.name?.toLowerCase().includes(search) ||
      exercise.muscleGroup?.toLowerCase().includes(search) ||
      exercise.equipment?.toLowerCase().includes(search)
    );
  });

  function handleAddExercise() {
    setSelectedExercise(null);
    setShowModal(true);
  }

  function handleEditExercise(exercise) {
    setSelectedExercise(exercise);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setSelectedExercise(null);
  }

  return (
    <div className="text-white">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-orange-500">
            Exercise Library
          </h1>

          <p className="text-gray-400 mt-2">
            Create and manage your exercise database
          </p>
        </div>

        <button
          onClick={handleAddExercise}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition"
        >
          + Add Exercise
        </button>

      </div>

      <SearchExercise
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="mt-8">
        <ExerciseTable
          exercises={filteredExercises}
          onEdit={handleEditExercise}
        />
      </div>

      <AddExerciseModal
        show={showModal}
        onClose={handleCloseModal}
        onExerciseAdded={loadExercises}
        editExercise={selectedExercise}
      />

    </div>
  );
}