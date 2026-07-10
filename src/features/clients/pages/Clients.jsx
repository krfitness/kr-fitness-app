import { useState, useEffect, useCallback } from "react";

import SearchBar from "../components/SearchBar";
import ClientTable from "../components/ClientTable";
import AddClientModal from "../components/AddClientModal";

import { getClients } from "../services/clientService";

export default function Clients() {
  const [showModal, setShowModal] = useState(false);
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);

  const loadClients = useCallback(async () => {
    try {
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    loadClients();
  }, [loadClients]);

  const filteredClients = clients.filter((client) => {
    const search = searchTerm.toLowerCase();

    return (
      client.fullName?.toLowerCase().includes(search) ||
      client.email?.toLowerCase().includes(search) ||
      client.phone?.toLowerCase().includes(search)
    );
  });

  function handleAddClient() {
    setSelectedClient(null);
    setShowModal(true);
  }

  function handleEditClient(client) {
    setSelectedClient(client);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setSelectedClient(null);
  }

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
          onClick={handleAddClient}
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
          onEdit={handleEditClient}
        />
      </div>

      <AddClientModal
        show={showModal}
        onClose={handleCloseModal}
        onClientAdded={loadClients}
        editClient={selectedClient}
      />

    </div>
  );
}