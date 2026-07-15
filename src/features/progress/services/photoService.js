import { storage } from "../../../firebase/firebaseConfig";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export async function uploadProgressPhoto(file, clientId, type) {
  if (!file) return "";

  const fileRef = ref(
    storage,
    `progress/${clientId}/${Date.now()}-${type}`
  );

  await uploadBytes(fileRef, file);

  return await getDownloadURL(fileRef);
}