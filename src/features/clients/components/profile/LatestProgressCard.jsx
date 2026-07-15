export default function LatestProgressCard({ progress }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          📸 Latest Check-In
        </h2>

        {progress && (
          <span className="text-sm text-gray-400">
            Latest
          </span>
        )}

      </div>

      {progress ? (
        <>
          <div className="grid grid-cols-3 gap-4">

            <div>
              <p className="text-sm text-gray-400 mb-2">
                Front
              </p>

              <img
                src={progress.frontPhoto}
                alt="Front"
                className="rounded-xl h-48 w-full object-cover border border-zinc-700"
              />
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">
                Side
              </p>

              <img
                src={progress.sidePhoto}
                alt="Side"
                className="rounded-xl h-48 w-full object-cover border border-zinc-700"
              />
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">
                Back
              </p>

              <img
                src={progress.backPhoto}
                alt="Back"
                className="rounded-xl h-48 w-full object-cover border border-zinc-700"
              />
            </div>

          </div>

          <div className="mt-6 flex justify-between">

            <span className="text-gray-400">
              Current Weight
            </span>

            <span className="font-semibold">
              {progress.weight} kg
            </span>

          </div>
        </>
      ) : (
        <div className="text-center py-12">

          <div className="text-5xl mb-4">
            📸
          </div>

          <p className="text-gray-400">
            No progress check-ins yet.
          </p>

        </div>
      )}

    </div>
  );
}