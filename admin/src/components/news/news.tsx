"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const NewsList = () => {
  const [newsList, setNewsList] = useState<any[]>([]);
  const [allNews, setAllNews] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState<any>(null);
  const [formData, setFormData] = useState({
    newsId: 0,
    title: "",
    content: "",
    imageUrl: "",
    categoryName: "",
    tags: "",
    summary: "",
  });

  // Fetch danh sách news
  const token = localStorage.getItem('adminToken')
  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://localhost:7071/api/News",{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setNewsList(response.data);
      setAllNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Tìm kiếm news
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchNews(e.target.value);
  };

  const searchNews = (term: string) => {
    if (!term.trim()) {
      setNewsList(allNews);
      return;
    }

    const filteredNews = allNews.filter((news) =>
      news.title?.toLowerCase().includes(term.toLowerCase())
    );
    setNewsList(filteredNews);
  };

  // Hàm mở modal
  const openModal = (news: any = null) => {
    if (news) {
      setFormData(news);
    } else {
      setFormData({
        newsId: 0,
        title: "",
        content: "",
        imageUrl: "",
        categoryName: "",
        tags: "",
        summary: "",
      });
    }
    setModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setFormData({
      newsId: 0,
      title: "",
      content: "",
      imageUrl: "",
      categoryName: "",
      tags: "",
      summary: "",
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
        title: formData.title,
        content: formData.content,
        imageUrl: formData.imageUrl,
        tags: formData.tags,
        summary: formData.summary,
      };

      if (formData.newsId === 0) {
        // Add new news
        const response = await axios.post("https://localhost:7071/api/News", payload,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setNewsList([...newsList, response.data]);
      } else {
        // Edit existing news
        await axios.put(`https://localhost:7071/api/News/${formData.newsId}`, payload,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setNewsList(
          newsList.map((news) =>
            news.newsId === formData.newsId ? { ...news, ...payload } : news
          )
        );
      }
      fetchNews();
      closeModal();
    } catch (error) {
      console.error("Error saving news:", error);
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
          Add News
        </button>
        <div className="px-4 py-6">
          <input
            type="text"
            placeholder="Search News..."
            className="px-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-6">Loading news...</div>
      ) : newsList.length === 0 ? (
        <div className="text-center py-6">No news found.</div>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-8 border-t px-4 py-4.5">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Title</div>
            <div className="col-span-1">Published At</div>
            <div className="col-span-1">Views</div>
            <div className="col-span-1">Image</div>
            <div className="col-span-1 px-3">Actions</div>
          </div>

          {/* News Rows */}
          {newsList.map((news) => (
            <div className="grid grid-cols-8 border-t px-4 py-4.5" key={news.newsId}>
              <div className="col-span-1">{news.newsId}</div>
              <div className="col-span-2">{news.title}</div>
              <div className="col-span-1">{new Date(news.publishedAt).toLocaleDateString()}</div>
              <div className="col-span-1">{news.views}</div>
              <div className="col-span-1">
                <img src={news.imageUrl} alt={news.title} className="w-30 h-30 object-cover" />
              </div>
              <div className="col-span-1 flex space-x-2 px-2">
                <button
                  className="h-10 px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  onClick={() => openModal(news)}
                >
                  Edit
                </button>
                <button
                  className="h-10 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(news.newsId)}
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
              {formData.newsId === 0 ? "Add News" : "Edit News"}
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
                name="content"
                placeholder="Content"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.content}
                onChange={handleChange}
              />
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.imageUrl}
                onChange={handleChange}
              />
              {/* <input
                type="text"
                name="categoryName"
                placeholder="Category"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.categoryName}
                onChange={handleChange}
              /> */}
              <input
                type="text"
                name="tags"
                placeholder="Tags"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.tags}
                onChange={handleChange}
              />
              <input
                type="text"
                name="summary"
                placeholder="Summary"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.summary}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="px-4 py-2 text-white bg-gray-500 rounded-md"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
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

export default NewsList;
