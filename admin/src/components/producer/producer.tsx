"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Producers = () => {
  const [producers, setProducers] = useState<any[]>([]);
  const [allProducers, setAllProducers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProducer, setCurrentProducer] = useState<any>(null);
  const [formData, setFormData] = useState({
    producerId: 0,
    name: "",
    contactInfo: "",
  });

  // Fetch danh sách producers
  const fetchProducers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://localhost:7071/api/Producer");
      setProducers(response.data);
      setAllProducers(response.data);
    } catch (error) {
      console.error("Error fetching producers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducers();
  }, []);

  // Hàm xóa producer
  const handleDelete = async (producerId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/Producer/${producerId}`);
      setProducers(producers.filter((producer) => producer.producerId !== producerId));
    } catch (error) {
      console.error("Error deleting producer:", error);
    }
  };

  // Tìm kiếm producer
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchProducers(e.target.value);
  };

  const searchProducers = (term: string) => {
    if (!term.trim()) {
      setProducers(allProducers);
      return;
    }

    const filteredProducers = allProducers.filter((producer) =>
      producer.name?.toLowerCase().includes(term.toLowerCase())
    );
    setProducers(filteredProducers);
  };

  // Hàm mở modal
  const openModal = (producer: any = null) => {
    if (producer) {
      setFormData(producer);
    } else {
      setFormData({
        producerId: 0,
        name: "",
        contactInfo: "",
      });
    }
    setModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setFormData({
      producerId: 0,
      name: "",
      contactInfo: "",
    });
    setModalOpen(false);
  };

  // Hàm xử lý thay đổi dữ liệu form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        name: formData.name,
        contactInfo: formData.contactInfo,
      };

      if (formData.producerId === 0) {
        // Add new producer
        const response = await axios.post("https://localhost:7071/api/Producer", payload);
        setProducers([...producers, response.data]);
      } else {
        // Edit existing producer
        await axios.put(`https://localhost:7071/api/Producer/${formData.producerId}`, payload);
        setProducers(
          producers.map((producer) =>
            producer.producerId === formData.producerId ? { ...producer, ...payload } : producer
          )
        );
      }
      fetchProducers();
      closeModal();
    } catch (error) {
      console.error("Error saving producer:", error);
      if (error.response) {
        console.error("API error response:", error.response.data);
      }
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          className="mt-3 ml-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => openModal()}
        >
          Add Producer
        </button>
        <div className="px-4 py-6">
          <input
            type="text"
            placeholder="Search Producers..."
            className="px-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-6">Loading producers...</div>
      ) : producers.length === 0 ? (
        <div className="text-center py-6">No producers found.</div>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-8 border-t px-4 py-4.5">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Name</div>
            <div className="col-span-2">Contact Info</div>
            <div className="col-span-1 px-3">Actions</div>
          </div>

          {/* Producer Rows */}
          {producers.map((producer) => (
            <div className="grid grid-cols-8 border-t px-4 py-4.5" key={producer.producerId}>
              <div className="col-span-1">{producer.producerId}</div>
              <div className="col-span-2">{producer.name}</div>
              <div className="col-span-2">{producer.contactInfo}</div>
              <div className="col-span-1 flex space-x-2 px-2">
                <button
                  className="h-10 px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  onClick={() => openModal(producer)}
                >
                  Edit
                </button>
                <button
                  className="h-10 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(producer.producerId)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">
              {formData.producerId === 0 ? "Add Producer" : "Edit Producer"}
            </h3>
            {/* Form */}
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="contactInfo"
                placeholder="Contact Info"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.contactInfo}
                onChange={handleChange}
              />
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Producers;
