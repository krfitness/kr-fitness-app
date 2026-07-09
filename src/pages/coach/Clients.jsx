import { useState, useEffect } from "react";

import SearchBar from "../../components/clients/SearchBar";
import ClientTable from "../../components/clients/ClientTable";
import AddClientModal from "../../components/clients/AddClientModal";

import { getClients } from "../../services/clientService";

export default function Clients() {
  const [showModal, setShowModal] = useState(false);
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  async function loadClients() {
    try {
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
  async function fetchClients() {
    try {
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchClients();
}, []);

  const filteredClients = clients.filter((client) => {
    const search = searchTerm.toLowerCase();

    return (
      client.fullName?.toLowerCase().includes(search) ||
      client.email?.toLowerCase().includes(search) ||
      client.phone?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="text-white">

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-orange-500">
            Clients
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all your fitness clients
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition"
        >
          + Add Client
        </button>

      </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="mt-8">
        <ClientTable
          clients={filteredClients}
          onEdit={(client) => {
            console.log("Edit:", client);
          }}
        />
      </div>

      <AddClientModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onClientAdded={loadClients}
      />

    </div>
  );
}