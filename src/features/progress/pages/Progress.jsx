import { useState } from "react";
import { toast } from "react-hot-toast";

import ClientLayout from "../../../layouts/ClientLayout";
import ProgressForm from "../components/ProgressForm";

import useAuth from "../../auth/hooks/useAuth";
import { getClientByEmail } from "../../client/services/clientProfileService";
import { addProgress } from "../services/progressService";
import { uploadProgressPhoto } from "../services/photoService";

export default function Progress() {
  const { currentUser } = useAuth();
  const [saving, setSaving] = useState(false);

  async function handleSubmit(formData) {
    try {
      setSaving(true);

      const client = await getClientByEmail(currentUser.email);

      if (!client) {
        toast.error("Client not found.");
        return;
      }

      const frontPhoto = await uploadProgressPhoto(
        formData.frontPhoto,
        client.id,
        "front"
      );

      const sidePhoto = await uploadProgressPhoto(
        formData.sidePhoto,
        client.id,
        "side"
      );

      const backPhoto = await uploadProgressPhoto(
        formData.backPhoto,
        client.id,
        "back"
      );

      await addProgress({
        clientId: client.id,

        weight: formData.weight,
        waist: formData.waist,
        chest: formData.chest,
        leftArm: formData.leftArm,
        rightArm: formData.rightArm,
        leftThigh: formData.leftThigh,
        rightThigh: formData.rightThigh,
        water: formData.water,
        sleep: formData.sleep,
        energy: formData.energy,
        notes: formData.notes,

        frontPhoto,
        sidePhoto,
        backPhoto,
      });

      toast.success("Progress submitted successfully!");

    } catch (error) {
      console.error(error);
      toast.error("Failed to submit progress.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <ClientLayout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-orange-500 mb-2">
          Weekly Progress Check-In
        </h1>

        <p className="text-gray-400 mb-8">
          Submit your latest measurements and progress photos.
        </p>

        <ProgressForm onSubmit={handleSubmit} />

        {saving && (
          <p className="text-gray-400 mt-4">
            Uploading...
          </p>
        )}

      </div>
    </ClientLayout>
  );
}