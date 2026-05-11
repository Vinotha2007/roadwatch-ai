import { Link } from "react-router-dom";

import ComplaintMap from "../components/ComplaintMap";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm mb-8">
              Smart Civic Infrastructure Platform
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

              Road
              <span className="text-cyan-400">
                Watch
              </span>

              <br />

              AI System

            </h1>

            <p className="text-slate-300 text-lg md:text-xl mt-8 leading-relaxed max-w-2xl">

              Monitor road conditions, report damages,
              track complaints, and improve public safety
              through an intelligent and transparent
              infrastructure monitoring platform.

            </p>

            {/* BUTTONS */}

            <div className="flex flex-col sm:flex-row gap-5 mt-12">

              <Link
                to="/report"
                className="bg-cyan-400 hover:bg-cyan-300 hover:shadow-cyan-400/40 hover:shadow-2xl text-slate-900 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl hover:scale-105 active:scale-95 transition duration-300 text-center cursor-pointer"
              >

                Report Issue

              </Link>

              <Link
                to="/admin"
                className="border border-cyan-400/30 hover:bg-cyan-400/10 hover:shadow-cyan-400/20 hover:shadow-2xl px-8 py-4 rounded-2xl text-lg transition duration-300 text-center hover:scale-105 active:scale-95 cursor-pointer"
              >

                Explore Dashboard

              </Link>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 hover:-translate-y-2 hover:border-cyan-400/30 cursor-pointer transition duration-300">

                <h2 className="text-4xl font-bold text-cyan-400 animate-pulse">
                  250+
                </h2>

                <p className="text-slate-400 mt-2">
                  Complaints Tracked
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 hover:-translate-y-2 hover:border-cyan-400/30 cursor-pointer transition duration-300">

                <h2 className="text-4xl font-bold text-cyan-400 animate-pulse">
                  92%
                </h2>

                <p className="text-slate-400 mt-2">
                  Resolution Rate
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 hover:-translate-y-2 hover:border-cyan-400/30 cursor-pointer transition duration-300">

                <h2 className="text-4xl font-bold text-cyan-400 animate-pulse">
                  24/7
                </h2>

                <p className="text-slate-400 mt-2">
                  Monitoring
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
              alt="Road Infrastructure"
              className="relative rounded-[2rem] shadow-2xl border border-white/10 hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-cyan-400/20 hover:shadow-2xl cursor-pointer transition duration-300">

            <div className="text-5xl mb-6">
              📍
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Geo-tagged Reports
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Automatically detect user location and
              map road complaints accurately.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-cyan-400/20 hover:shadow-2xl cursor-pointer transition duration-300">

            <div className="text-5xl mb-6">
              📊
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Smart Analytics
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Analyze complaint trends and road
              maintenance statistics in real time.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-cyan-400/20 hover:shadow-2xl cursor-pointer transition duration-300">

            <div className="text-5xl mb-6">
              🚧
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Transparent Tracking
            </h3>

            <p className="text-slate-300 leading-relaxed">
              Citizens can monitor complaint status
              and maintenance progress live.
            </p>

          </div>

        </div>

      </section>

      {/* MAP SECTION */}

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Live Road Issue Map
        </h2>

        <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.01] transition duration-500">

          <ComplaintMap />

        </div>

      </section>

    </div>
  );
}

export default Home;