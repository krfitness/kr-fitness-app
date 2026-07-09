import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const clientsCollection = collection(db, "clients");

// ======================
// Add Client
// ======================
export async function addClient(clientData) {
  const docRef = await addDoc(clientsCollection, {
    ...clientData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

// ======================
// Get All Clients
// ======================
export async function getClients() {
  const snapshot = await getDocs(clientsCollection);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// ======================
// Update Client
// ======================
export async function updateClient(id, clientData) {
  const clientRef = doc(db, "clients", id);

  await updateDoc(clientRef, {
    ...clientData,
  });
}

// ======================
// Delete Client
// ======================
export async function deleteClient(id) {
  const clientRef = doc(db, "clients", id);

  await deleteDoc(clientRef);
}