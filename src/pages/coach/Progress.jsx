import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getCheckins } from "../../features/progress/services/getCheckins";

export default function Progress() {

  const [checkins, setCheckins] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getCheckins();
      setCheckins(data);
    }

    load();
  }, []);

  return (
    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold text-orange-500 mb-8">
          Weekly Check-ins
        </h1>

        <div className="overflow-x-auto rounded-2xl border border-zinc-800">

          <table className="w-full">

            <thead className="bg-orange-500 text-white">

              <tr>
                <th className="p-4 text-left">Client</th>
                <th className="p-4">Weight</th>
                <th className="p-4">Water</th>
                <th className="p-4">Sleep</th>
                <th className="p-4">Workout</th>
                <th className="p-4">Meal</th>
              </tr>

            </thead>

            <tbody>

              {checkins.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-zinc-800 bg-zinc-900"
                >

                  <td className="p-4">
                    {item.clientName}
                  </td>

                  <td className="text-center">
                    {item.weight}
                  </td>

                  <td className="text-center">
                    {item.water} L
                  </td>

                  <td className="text-center">
                    {item.sleep} hrs
                  </td>

                  <td className="text-center">
                    {item.workout}
                  </td>

                  <td className="text-center">
                    {item.meal}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>
  );
}