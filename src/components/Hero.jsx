import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center overflow-hidden">

      <div className="absolute w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full top-20 left-10"></div>

      <div className="absolute w-80 h-80 bg-orange-600/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[6px] text-orange-500 font-semibold"
        >
          Welcome to KR Fitness
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-5xl md:text-8xl font-black leading-tight mt-6"
        >
          STRONGER
          <br />
          <span className="text-orange-500">
            EVERY DAY.
          </span>
          <br />
          BETTER FOR LIFE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8"
        >
          Personalized online coaching for fat loss, muscle gain,
          body recomposition and contest preparation with complete
          workout, nutrition and progress tracking.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-5 mt-12 flex-wrap"
        >
          <button
            onClick={() => navigate("/login")}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-white font-semibold"
          >
            Start Your Journey
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border border-orange-500 text-orange-500 px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white"
          >
            View Programs
          </button>

        </motion.div>

      </div>

    </section>
  );
}