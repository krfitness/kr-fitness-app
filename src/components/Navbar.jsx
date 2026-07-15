import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link to="/">
          <h1 className="text-3xl font-extrabold">
            <span className="text-orange-500">KR</span>{" "}
            <span className="text-white">FITNESS</span>
          </h1>
        </Link>

        <nav className="hidden md:flex gap-8 text-white">

          <a href="#about" className="hover:text-orange-500">About</a>

          <a href="#programs" className="hover:text-orange-500">Programs</a>

          <a href="#pricing" className="hover:text-orange-500">Pricing</a>

          <a href="#contact" className="hover:text-orange-500">Contact</a>

        </nav>

        <button
          onClick={() => navigate("/login")}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl text-white font-semibold"
        >
          Join Now
        </button>

      </div>

    </header>
  );
}