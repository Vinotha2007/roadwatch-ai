import { useState, useEffect } from "react";

import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebase";

function ReportIssue() {

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {

    navigator.geolocation.getCurrentPosition(

      (position) => {

        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);

      },

      (error) => {

        console.log(error);

      }
    );
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await addDoc(collection(db, "complaints"), {

        location,
        description,
        imageUrl,
        latitude,
        longitude,
        status: "Pending",
        createdAt: new Date(),

      });

      alert("Complaint Submitted Successfully");

      setLocation("");
      setDescription("");
      setImageUrl("");

    } catch (error) {

      console.error(error);

      alert("Error submitting complaint");

    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-6">

      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] shadow-2xl">

        <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
          Report Road Issue
        </h1>

        <p className="text-slate-400 mb-10">
          Submit road damages and infrastructure issues for faster maintenance tracking.
        </p>

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
            className="w-full bg-slate-900 border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400"
          />

          <textarea
            placeholder="Describe the issue"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            rows="5"
            className="w-full bg-slate-900 border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400"
          ></textarea>

          <input
            type="text"
            placeholder="Paste Image URL"
            value={imageUrl}
            onChange={(e) =>
              setImageUrl(e.target.value)
            }
            className="w-full bg-slate-900 border border-white/10 p-4 rounded-2xl outline-none focus:border-cyan-400"
          />

          <div className="bg-slate-900 border border-white/10 rounded-2xl p-5">

            <p className="text-slate-300">
              Latitude:
              <span className="text-cyan-400 ml-2">
                {latitude}
              </span>
            </p>

            <p className="text-slate-300 mt-2">
              Longitude:
              <span className="text-cyan-400 ml-2">
                {longitude}
              </span>
            </p>

          </div>

          <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-xl">

            Submit Complaint

          </button>

        </form>

      </div>

    </div>
  );
}

export default ReportIssue;