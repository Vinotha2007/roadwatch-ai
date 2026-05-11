import Loader from "../components/Loader";

import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

function TrackComplaints() {

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {

    setLoading(true);

    const querySnapshot = await getDocs(
      collection(db, "complaints")
    );

    const complaintsData = querySnapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );

    setComplaints(complaintsData);

    setLoading(false);
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-extrabold text-cyan-400 mb-4">
          Complaint Tracking
        </h1>

        <p className="text-slate-400 mb-14 text-lg">
          Monitor road issue reports and maintenance progress in real time.
        </p>

        {loading ? (

          <Loader />

        ) : (

          <div className="grid lg:grid-cols-2 gap-10">

            {complaints.map((complaint) => (

              <div
                key={complaint.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-300"
              >

                {complaint.imageUrl && (

                  <img
                    src={complaint.imageUrl}
                    alt="Road Damage"
                    className="w-full h-72 object-cover"
                  />

                )}

                <div className="p-8">

                  <div className="flex justify-between items-start">

                    <div>

                      <h2 className="text-3xl font-bold text-white">
                        {complaint.location}
                      </h2>

                      <p className="text-slate-400 mt-4 leading-relaxed">
                        {complaint.description}
                      </p>

                    </div>

                  </div>

                  <div className="mt-8 flex justify-between items-center">

                    <span className="bg-orange-400/20 border border-orange-400/20 text-orange-300 px-5 py-2 rounded-full font-medium">
                      {complaint.status}
                    </span>

                    <div className="text-slate-400 text-sm">
                      Live Tracking
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );
}

export default TrackComplaints;