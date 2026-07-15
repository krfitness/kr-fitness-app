import DashboardLayout from "../../layouts/DashboardLayout";

export default function Progress() {
  return (
    <DashboardLayout>
      <div className="text-white">
        <h1 className="text-4xl font-bold text-orange-500">
          Progress
        </h1>

        <p className="mt-3 text-gray-400">
          Client progress tracking will appear here.
        </p>
      </div>
    </DashboardLayout>
  );
}