export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          <span className="text-orange-500">KR</span>{" "}
          <span className="text-white">FITNESS</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Stronger Every Day. Better for Life.
        </p>

        <div className="flex justify-center gap-8 mt-8">

          <a href="#about" className="hover:text-orange-500">
            About
          </a>

          <a href="#programs" className="hover:text-orange-500">
            Programs
          </a>

          <a href="#pricing" className="hover:text-orange-500">
            Pricing
          </a>

          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>

        </div>

        <p className="text-gray-500 mt-8">
          © 2026 KR Fitness. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}