import { Link } from "react-router-dom";

import { auth } from "../firebase";

import { signOut } from "firebase/auth";

import { useEffect, useState } from "react";

function Navbar({ darkMode, setDarkMode }) {

  const [user, setUser] = useState(null);

 useEffect(() => {

  const unsubscribe = auth.onAuthStateChanged(
    (currentUser) => {

      setUser(currentUser);

    }
  );

  return () => unsubscribe();

}, []);

  const handleLogout = async () => {

    await signOut(auth);

    window.location.reload();

  };

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center">

        {/* LOGO */}

        <div>

          <h1 className="text-3xl font-extrabold text-cyan-400">
            RoadWatch AI
          </h1>

          <p className="text-slate-400 text-sm">
            Smart Infrastructure Platform
          </p>

        </div>

        {/* NAVIGATION */}

        <div className="flex items-center gap-4 md:gap-8">

          <div className="hidden md:flex gap-8 text-slate-300 font-medium">

            <Link
              to="/"
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/report"
              className="hover:text-cyan-400 transition duration-300"
            >
              Report
            </Link>

            <Link
              to="/track"
              className="hover:text-cyan-400 transition duration-300"
            >
              Track
            </Link>

            <Link
              to="/admin"
              className="hover:text-cyan-400 transition duration-300"
            >
              Dashboard
            </Link>

          </div>

          {/* USER PROFILE / LOGIN */}

          {user ? (

            <div className="flex items-center gap-4">

              {/* PROFILE CIRCLE */}

              <div className="bg-cyan-400 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">

                {user.email.charAt(0).toUpperCase()}

              </div>

              {/* EMAIL */}

              <div className="hidden md:block">

                <p className="text-sm text-white">
                  {user.email}
                </p>

              </div>

              {/* LOGOUT */}

              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-xl text-white transition duration-300 hover:scale-105"
              >

                Logout

              </button>

            </div>

          ) : (

            <Link
              to="/login"
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-5 py-2 rounded-xl font-semibold shadow-lg hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition duration-300 cursor-pointer"
            >

              Login

            </Link>

          )}

          {/* DARK MODE BUTTON */}

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20 px-5 py-2 rounded-xl text-cyan-300 transition duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >

            {darkMode ? "☀ Light" : "🌙 Dark"}

          </button>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;