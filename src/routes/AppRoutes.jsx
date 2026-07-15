 import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

import Dashboard from "../pages/coach/Dashboard";
import Clients from "../features/clients/pages/Clients";
import ClientProfile from "../features/clients/pages/ClientProfile";
import Workouts from "../features/workouts/pages/Workouts";
import Exercises from "../features/exercises/pages/Exercises";
import Meals from "../features/meals/pages/Meals";
import Progress from "../pages/coach/Progress";
import Settings from "../pages/coach/Settings";

import ClientDashboard from "../features/client/pages/Dashboard";
import ClientWorkout from "../features/client/pages/Workout";
import ClientMeal from "../features/client/pages/Meal";
import ClientProfilePage from "../features/client/pages/Profile";
import ClientSettings from "../features/client/pages/Settings";

import ClientProgress from "../features/progress/pages/Progress";

import useAuth from "../features/auth/hooks/useAuth";

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Coach */}

        <Route
          path="/coach"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/coach/clients"
          element={
            <ProtectedRoute>
              <Clients />
            </ProtectedRoute>
          }
        />

        <Route
          path="/coach/client/:id"
          element={
            <ProtectedRoute>
              <ClientProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/coach/workouts"
          element={
            <ProtectedRoute>
              <Workouts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/coach/exercises"
          element={
            <ProtectedRoute>
              <Exercises />
            </ProtectedRoute>
          }
        />

        <Route
          path="/coach/meals"
          element={
            <ProtectedRoute>
              <Meals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/coach/progress"
          element={
            <ProtectedRoute>
              <Progress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/coach/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Client */}

        <Route
          path="/client"
          element={
            <ProtectedRoute>
              <ClientDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client/workout"
          element={
            <ProtectedRoute>
              <ClientWorkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client/meal"
          element={
            <ProtectedRoute>
              <ClientMeal />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client/progress"
          element={
            <ProtectedRoute>
              <ClientProgress />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client/profile"
          element={
            <ProtectedRoute>
              <ClientProfilePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/client/settings"
          element={
            <ProtectedRoute>
              <ClientSettings />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}