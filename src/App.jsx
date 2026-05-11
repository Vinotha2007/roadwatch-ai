import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import Register from "./pages/Register";

import Footer from "./components/Footer";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ReportIssue from "./pages/ReportIssue";
import TrackComplaints from "./pages/TrackComplaints";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode ? "dark bg-gray-900" : "bg-white"}>

      <div className="bg-white dark:bg-gray-900 min-h-screen transition duration-300">

        <BrowserRouter>

          <Navbar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/" element={<Home />} />

            <Route
              path="/report"
              element={<ReportIssue />}
            />

            <Route
              path="/track"
              element={<TrackComplaints />}
            />

            <Route
  path="/admin"
  element={
    <ProtectedRoute>

      <AdminDashboard />

    </ProtectedRoute>
  }
/>

          </Routes>
          <Footer />
          <ToastContainer />

        </BrowserRouter>

      </div>

    </div>
  );
}

export default App;