import Clients from "../features/clients/pages/Clients";
import Workouts from "../features/workouts/pages/Workouts";
import Meals from "../pages/coach/Meals";
import Progress from "../pages/coach/Progress";
import Settings from "../pages/coach/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/coach/Dashboard";
import ClientDashboard from "../pages/ClientDashboard";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />

  <Route path="/coach" element={<Dashboard />} />
  <Route path="/coach/clients" element={<Clients />} />
  <Route path="/coach/workouts" element={<Workouts />} />
  <Route path="/coach/meals" element={<Meals />} />
  <Route path="/coach/progress" element={<Progress />} />
  <Route path="/coach/settings" element={<Settings />} />

  <Route path="/client" element={<ClientDashboard />} />

  <Route path="*" element={<NotFound />} />
</Routes>
    </BrowserRouter>
  );
}