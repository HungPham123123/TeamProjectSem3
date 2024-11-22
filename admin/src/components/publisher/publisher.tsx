"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Publishers = () => {
  const [publishers, setPublishers] = useState<any[]>([]);
  const [allPublishers, setAllPublishers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPublisher, setCurrentPublisher] = useState<any>(null);
  const [formData, setFormData] = useState({
    publisherId: 0,
    name: "",
    contactInfo: "",
  });
  const token = localStorage.getItem('adminToken')
  // Fetch danh sách publishers
  const fetchPublishers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://localhost:7071/api/Publisher",{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setPublishers(response.data);
      setAllPublishers(response.data);
    } catch (error) {
      console.error("Error fetching publishers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublishers();
  }, []);

  // Hàm xóa publisher
  const handleDelete = async (publisherId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/Publisher/${publisherId}`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setPublishers(publishers.filter((publisher) => publisher.publisherId !== publisherId));
    } catch (error) {
      console.error("Error deleting publisher:", error);
    }
  };

  // Tìm kiếm publisher
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchPublishers(e.target.value);
  };

  const searchPublishers = (term: string) => {
    if (!term.trim()) {
      setPublishers(allPublishers);
      return;
    }

    const filteredPublishers = allPublishers.filter((publisher) =>
      publisher.name?.toLowerCase().includes(term.toLowerCase())
    );
    setPublishers(filteredPublishers);
  };

  // Hàm mở modal
  const openModal = (publisher: any = null) => {
    if (publisher) {
      setFormData(publisher);
    } else {
      setFormData({
        publisherId: 0,
        name: "",
        contactInfo: "",
      });
    }
    setModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setFormData({
      publisherId: 0,
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

      if (formData.publisherId === 0) {
        // Add new publisher
        const response = await axios.post("https://localhost:7071/api/Publisher", payload,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setPublishers([...publishers, response.data]);
      } else {
        // Edit existing publisher
        await axios.put(`https://localhost:7071/api/Publisher/${formData.publisherId}`, payload,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setPublishers(
          publishers.map((publisher) =>
            publisher.publisherId === formData.publisherId ? { ...publisher, ...payload } : publisher
          )
        );
      }
      fetchPublishers();
      closeModal();
    } catch (error) {
      console.error("Error saving publisher:", error);
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
          Add Publisher
        </button>
        <div className="px-4 py-6">
          <input
            type="text"
            placeholder="Search Publishers..."
            className="px-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-6">Loading publishers...</div>
      ) : publishers.length === 0 ? (
        <div className="text-center py-6">No publishers found.</div>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-8 border-t px-4 py-4.5">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Name</div>
            <div className="col-span-2">Contact Info</div>
            <div className="col-span-1 px-3">Actions</div>
          </div>

          {/* Publisher Rows */}
          {publishers.map((publisher) => (
            <div className="grid grid-cols-8 border-t px-4 py-4.5" key={publisher.publisherId}>
              <div className="col-span-1">{publisher.publisherId}</div>
              <div className="col-span-2">{publisher.name}</div>
              <div className="col-span-2">{publisher.contactInfo}</div>
              <div className="col-span-1 flex space-x-2 px-2">
                <button
                  className="h-10 px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  onClick={() => openModal(publisher)}
                >
                  Edit
                </button>
                <button
                  className="h-10 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(publisher.publisherId)}
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
              {formData.publisherId === 0 ? "Add Publisher" : "Edit Publisher"}
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

export default Publishers;
