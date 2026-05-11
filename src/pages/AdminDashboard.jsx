import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

function AdminDashboard() {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {

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
  };

  const updateStatus = async (
    id,
    newStatus
  ) => {

    const complaintRef = doc(
      db,
      "complaints",
      id
    );

    await updateDoc(complaintRef, {
      status: newStatus,
    });

    fetchComplaints();
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-6xl font-extrabold text-cyan-400 mb-4">
          Authority Dashboard
        </h1>

        <p className="text-slate-400 mb-14 text-lg">
          Manage road complaints and monitor maintenance updates.
        </p>

        <div className="overflow-x-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl">

          <table className="w-full">

            <thead>

              <tr className="border-b border-white/10 text-slate-300">

                <th className="p-6 text-left">
                  Location
                </th>

                <th className="p-6 text-left">
                  Description
                </th>

                <th className="p-6 text-left">
                  Status
                </th>

                <th className="p-6 text-left">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {complaints.map((complaint) => (

                <tr
                  key={complaint.id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >

                  <td className="p-6 font-medium">
                    {complaint.location}
                  </td>

                  <td className="p-6 text-slate-300">
                    {complaint.description}
                  </td>

                  <td className="p-6">

                    <span className="bg-orange-400/20 border border-orange-400/20 text-orange-300 px-4 py-2 rounded-full text-sm">

                      {complaint.status}

                    </span>

                  </td>

                  <td className="p-6">

                    <button
                      onClick={() =>
                        updateStatus(
                          complaint.id,
                          "Resolved"
                        )
                      }
                      className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-5 py-2 rounded-xl font-bold transition"
                    >

                      Mark Resolved

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;