import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import useAuth from "../../features/auth/hooks/useAuth";

export default function Topbar() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  async function handleLogout() {
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <header className="h-20 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-8">

      <div>
        <h2 className="text-2xl font-bold">
          Coach Dashboard
        </h2>

        <p className="text-gray-400">
          Welcome back, {currentUser?.displayName || "Coach"} 👋
        </p>
      </div>

      <div className="flex items-center gap-6">

        <FaBell
          className="text-orange-500 text-xl cursor-pointer"
        />

        <div className="text-right">
          <h3 className="font-semibold">
            {currentUser?.displayName || currentUser?.email}
          </h3>

          <p className="text-sm text-gray-400">
            Head Coach
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium"
        >
          Logout
        </button>

      </div>

    </header>
  );
}