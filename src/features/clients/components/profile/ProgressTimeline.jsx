export default function ProgressTimeline({ progressList = [] }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        📸 Weekly Check-ins
      </h2>

      {progressList.length === 0 ? (
        <div className="text-center py-12">

          <div className="text-5xl mb-4">
            📸
          </div>

          <p className="text-gray-400">
            No check-ins submitted yet.
          </p>

        </div>
      ) : (
        <div className="space-y-6">

          {progressList.map((progress) => (
            <div
              key={progress.id}
              className="bg-zinc-800 rounded-2xl p-5"
            >

              <div className="flex justify-between items-center mb-4">

                <div>

                  <h3 className="font-bold text-lg">
                    {progress.weight} kg
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {progress.date}
                  </p>

                </div>

              </div>

              <div className="grid grid-cols-3 gap-4">

                <img
                  src={progress.frontPhoto}
                  alt="Front"
                  className="rounded-xl border border-zinc-700 aspect-square object-cover"
                />

                <img
                  src={progress.sidePhoto}
                  alt="Side"
                  className="rounded-xl border border-zinc-700 aspect-square object-cover"
                />

                <img
                  src={progress.backPhoto}
                  alt="Back"
                  className="rounded-xl border border-zinc-700 aspect-square object-cover"
                />

              </div>

              {progress.notes && (
                <div className="mt-4">

                  <p className="text-gray-400 text-sm mb-1">
                    Notes
                  </p>

                  <p>
                    {progress.notes}
                  </p>

                </div>
              )}

            </div>
          ))}

        </div>
      )}

    </div>
  );
}