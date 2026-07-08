export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

       <h1 className="text-3xl font-extrabold tracking-wide">
          <span className="text-orange-500">KR</span>{" "}
          <span className="text-white">FITNESS</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#" className="hover:text-orange-500 transition">Home</a>
          <a href="#" className="hover:text-orange-500 transition">Programs</a>
          <a href="#" className="hover:text-orange-500 transition">About</a>
          <a href="#" className="hover:text-orange-500 transition">Pricing</a>
          <a href="#" className="hover:text-orange-500 transition">Contact</a>
        </nav>

        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl text-white font-semibold transition">
          Join Now
        </button>

      </div>
    </header>
  );
}