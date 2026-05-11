function Analytics({ complaints }) {

  const pending = complaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const review = complaints.filter(
    (c) => c.status === "Under Review"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-10">

      <h2 className="text-3xl font-bold text-blue-700 mb-8">
        Complaint Analytics
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-orange-100 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Pending
          </h3>

          <p className="text-4xl font-bold mt-3">
            {pending}
          </p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Under Review
          </h3>

          <p className="text-4xl font-bold mt-3">
            {review}
          </p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Resolved
          </h3>

          <p className="text-4xl font-bold mt-3">
            {resolved}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Analytics;