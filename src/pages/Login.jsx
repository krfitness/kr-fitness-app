import { useState } from "react";
import { loginUser } from "../firebase/auth";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      await loginUser(email, password);
      alert("Login Successful!");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-2xl p-8 border border-zinc-800">

        <h1 className="text-4xl font-bold text-orange-500 text-center">
          KR FITNESS
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Stronger Every Day. Better for Life.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <Button type="submit">
            Login
          </Button>

        </form>

      </div>
    </div>
  );
}