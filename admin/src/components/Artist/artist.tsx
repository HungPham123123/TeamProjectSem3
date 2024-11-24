"use client";

import { useEffect, useState } from "react";
import axios from "axios";


const Artists = () => {
  const [artists, setArtists] = useState<any[]>([]);
  const [allArtists, setAllArtists] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentArtist, setCurrentArtist] = useState<any>(null);
  const [formData, setFormData] = useState({
    artistId: 0,
    name: "",
    biography: "",
    social: "",
    born: "",
    image: "",
  });

  // Fetch danh sách artists
  const token = localStorage.getItem('adminToken')
  const fetchArtists = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://localhost:7071/api/Artist",{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setArtists(response.data);
      setAllArtists(response.data);
    } catch (error) {
      console.error("Error fetching artists:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  // Hàm xóa artist
  const handleDelete = async (artistId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/Artist/${artistId}`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setArtists(artists.filter((artist) => artist.artistId !== artistId));
    } catch (error) {
      console.error("Error deleting artist:", error);
    }
  };

  // Tìm kiếm artist
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchArtists(e.target.value);
  };

  const searchArtists = (term: string) => {
    if (!term.trim()) {
      setArtists(allArtists);
      return;
    }

    const filteredArtists = allArtists.filter((artist) =>
      artist.name?.toLowerCase().includes(term.toLowerCase())
    );
    setArtists(filteredArtists);
  };

  // Hàm mở modal
  const openModal = (artist: any = null) => {
    if (artist) {
      setFormData(artist);
    } else {
      setFormData({
        artistId: 0,
        name: "",
        biography: "",
        social: "",
        born: "",
        image: "",
      });
    }
    setModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setFormData({
      artistId: 0,
      name: "",
      biography: "",
      social: "",
      born: "",
      image: "",
    });
    setModalOpen(false);
  };

  // Hàm xử lý thay đổi dữ liệu form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hàm submit form
  const handleSubmit = async () => {
    try {
      if (formData.artistId === 0) {
        // Add new artist
        const response = await axios.post("https://localhost:7071/api/Artist", formData,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setArtists([...artists, response.data]);
      } else {
        // Edit existing artist
        await axios.put(`https://localhost:7071/api/Artist/${formData.artistId}`, formData,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setArtists(
          artists.map((artist) =>
            artist.artistId === formData.artistId ? formData : artist
          )
        );
      }
      closeModal();
    } catch (error) {
      console.error("Error saving artist:", error);
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
          Add Artist
        </button>
        <div className="px-4 py-6">
          <input
            type="text"
            placeholder="Search Artists..."
            className="px-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-6">Loading artists...</div>
      ) : artists.length === 0 ? (
        <div className="text-center py-6">No artists found.</div>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-8 border-t px-4 py-4.5">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Image</div>
            <div className="col-span-2">Name</div>
            <div className="col-span-2">Social</div>
            <div className="col-span-1">Actions</div>
          </div>

          {/* Artist Rows */}
          {artists.map((artist) => (
            <div className="grid grid-cols-8 border-t px-4 py-4.5" key={artist.artistId}>
              <div className="col-span-1">{artist.artistId}</div>
              <div className="col-span-2">
                <img
                  src={artist.image || "/default-avatar.png"}
                  alt={artist.name}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div className="col-span-2">{artist.name}</div>
              <div className="col-span-2">
                <a
                  href={artist.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {artist.social}
                </a>
              </div>
              <div className="col-span-1 flex space-x-2">
                <button
                  className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  onClick={() => openModal(artist)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(artist.artistId)}
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
              {formData.artistId === 0 ? "Add Artist" : "Edit Artist"}
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
              <textarea
                name="biography"
                placeholder="Biography"
                className="w-full px-4 py-2 border rounded-lg"
                rows={5} // Tăng số hàng
                value={formData.biography}
                onChange={handleChange}
              />
              <input
                type="text"
                name="social"
                placeholder="Social"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.social}
                onChange={handleChange}
              />
              <input
                type="text"
                name="born"
                placeholder="Born"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.born}
                onChange={handleChange}
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.image}
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

export default Artists;
