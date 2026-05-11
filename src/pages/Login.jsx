import { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful");

      navigate("/admin");

    } catch (error) {

      console.error(error);

      alert("Invalid Email or Password");

    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex justify-center items-center px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 shadow-2xl">

        <h1 className="text-5xl font-extrabold text-cyan-400 mb-4 text-center">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mb-10">
          Login to continue to RoadWatch AI
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-slate-900 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-slate-900 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-cyan-400"
          />

          <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 py-4 rounded-2xl font-bold text-lg transition duration-300 hover:scale-105">

            Login

          </button>

        </form>

        <p className="text-slate-400 text-center mt-8">

          Don’t have an account?

          <Link
            to="/register"
            className="text-cyan-400 ml-2 hover:underline"
          >

            Register

          </Link>

        </p>

      </div>

    </div>

  );
}

export default Login;