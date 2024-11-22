"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Albums = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [allAlbums, setAllAlbums] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState<any>(null);
  const [formData, setFormData] = useState({
    albumId: 0,
    title: "",
    biography: "",
    releaseDate: "",
    songs: [],
  });

  // Fetch danh sách albums
  const token = localStorage.getItem('adminToken')
  const fetchAlbums = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://localhost:7071/api/Albums",{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setAlbums(response.data);
      setAllAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  // Hàm xóa album
  const handleDelete = async (albumId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/Albums/${albumId}`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setAlbums(albums.filter((album) => album.albumId !== albumId));
    } catch (error) {
      console.error("Error deleting album:", error);
    }
  };

  // Tìm kiếm album
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchAlbums(e.target.value);
  };

  const searchAlbums = (term: string) => {
    if (!term.trim()) {
      setAlbums(allAlbums);
      return;
    }

    const filteredAlbums = allAlbums.filter((album) =>
      album.title?.toLowerCase().includes(term.toLowerCase())
    );
    setAlbums(filteredAlbums);
  };

  // Hàm mở modal
  const openModal = (album: any = null) => {
    if (album) {
      setFormData(album);
    } else {
      setFormData({
        albumId: 0,
        title: "",
        biography: "",
        releaseDate: "",
        songs: [],
      });
    }
    setModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setFormData({
      albumId: 0,
      title: "",
      biography: "",
      releaseDate: "",
      songs: [],
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
      // Chuyển đổi songs thành mảng các chuỗi (titles)
      const songTitles = formData.songs.map((song) => song.title || song); // Đảm bảo xử lý đúng cả chuỗi hoặc object
  
      // Chuẩn bị payload đúng định dạng
      const payload = {
        title: formData.title,
        biography: formData.biography,
        songTitles: songTitles, // Gửi mảng chuỗi
      };
  
      if (formData.albumId === 0) {
        // Add new album
        const response = await axios.post("https://localhost:7071/api/Albums", payload,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setAlbums([...albums, response.data]);
      } else {
        // Edit existing album
        await axios.put(`https://localhost:7071/api/Albums/${formData.albumId}`, payload,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setAlbums(
          albums.map((album) =>
            album.albumId === formData.albumId ? { ...album, ...payload } : album
          )
        );
      }
      fetchAlbums();
      closeModal();
    } catch (error) {
      console.error("Error saving album:", error);
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
          Add Album
        </button>
        <div className="px-4 py-6">
          <input
            type="text"
            placeholder="Search Albums..."
            className="px-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-6">Loading albums...</div>
      ) : albums.length === 0 ? (
        <div className="text-center py-6">No albums found.</div>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-8 border-t px-4 py-4.5">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Title</div>
            <div className="col-span-2">Release Date</div>
            <div className="col-span-2">Biography</div>
            <div className="col-span-1 px-3">Actions</div>
          </div>

          {/* Album Rows */}
          {albums.map((album) => (
            <div className="grid grid-cols-8 border-t px-4 py-4.5" key={album.albumId}>
              <div className="col-span-1">{album.albumId}</div>
              <div className="col-span-2">{album.title}</div>
              <div className="col-span-1">{new Date(album.releaseDate).toLocaleDateString()}</div>
              <div className="col-span-3">{album.biography}</div>
              <div className="col-span-1 flex space-x-2 px-2">
                <button
                  className="h-10 px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  onClick={() => openModal(album)}
                >
                  Edit
                </button>
                <button
                  className="h-10 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(album.albumId)}
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
              {formData.albumId === 0 ? "Add Album" : "Edit Album"}
            </h3>
            {/* Form */}
            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.title}
                onChange={handleChange}
              />
              <textarea
                name="biography"
                placeholder="Biography"
                className="w-full px-4 py-2 border rounded-lg"
                rows={5}
                value={formData.biography}
                onChange={handleChange}
              />
              <input
                type="text"
                name="releaseDate"
                placeholder="Release Date"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.releaseDate}
                onChange={handleChange}
              />
              <textarea
                name="songs"
                placeholder="Songs (separate by commas)"
                className="w-full px-4 py-2 border rounded-lg"
                rows={3}
                value={formData.songs.map((song) => song.title).join(", ")} // Chỉ lấy tên bài hát
                onChange={(e) => {
                  const songTitles = e.target.value.split(",").map((title) => title.trim());
                  const updatedSongs = songTitles.map((title) => ({ title })); // Chuyển đổi thành mảng đối tượng
                  setFormData({ ...formData, songs: updatedSongs });
                }}
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

export default Albums;
