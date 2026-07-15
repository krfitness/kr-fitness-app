import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* About */}
      <section className="bg-black text-white py-24" id="about">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-orange-500 mb-6">
            Why KR Fitness?
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-4xl">
            KR Fitness provides personalized online coaching designed for
            fat loss, muscle gain, body recomposition and contest
            preparation. Every client receives customized workouts, meal
            plans and continuous progress tracking.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-zinc-950 text-white py-24" id="programs">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-orange-500 mb-12 text-center">
            Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-4">Fat Loss</h3>
              <p className="text-gray-400">
                Lose fat with customized nutrition and training.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-4">Muscle Gain</h3>
              <p className="text-gray-400">
                Structured hypertrophy training with progressive overload.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-4">Body Recomposition</h3>
              <p className="text-gray-400">
                Build muscle while reducing body fat.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-4">Contest Prep</h3>
              <p className="text-gray-400">
                Complete coaching for competitive athletes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing */}
      <section className="bg-black text-white py-24" id="pricing">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-orange-500 mb-6">
            Online Coaching
          </h2>

          <p className="text-gray-400 text-xl mb-10">
            Contact us for customized coaching plans.
          </p>

          <a
  href="/login"
  className="inline-block bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-xl font-bold"
>
  Start Your Journey
</a>

        </div>
      </section>

      {/* Contact */}
      <section className="bg-zinc-950 text-white py-24" id="contact">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold text-orange-500 mb-6">
            Contact
          </h2>

          <p className="text-gray-300 text-xl">
            Email: krfitnessweb@gmail.com
          </p>

          <p className="text-gray-300 text-xl mt-3">
            WhatsApp: +91 9019911080
          </p>

          <p className="text-gray-500 mt-10">
            © 2026 KR Fitness. All Rights Reserved.
          </p>

        
        </div>
      </section>
      <Footer />
    </>
  );
}