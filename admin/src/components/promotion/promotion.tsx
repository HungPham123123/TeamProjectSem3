"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const PromotionManagement = () => {
  const [promotions, setPromotions] = useState<any[]>([]);
  const [allPromotions, setAllPromotions] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    promotionId: 0,
    productId: 0,
    discountPercentage: 0,
    startDate: "",
    endDate: "",
  });

  // Fetch danh sách promotions
  const token = localStorage.getItem('adminToken');
  const fetchPromotions = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://localhost:7071/api/Promotion",{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setPromotions(response.data);
      setAllPromotions(response.data);
    } catch (error) {
      console.error("Error fetching promotions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPromotions();
  }, []);

  // Xóa promotion
  const handleDelete = async (promotionId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/Promotion/${promotionId}`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setPromotions(promotions.filter((promotion) => promotion.promotionId !== promotionId));
    } catch (error) {
      console.error("Error deleting promotion:", error);
    }
  };

  // Tìm kiếm promotions
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchPromotions(e.target.value);
  };

  const searchPromotions = (term: string) => {
    if (!term.trim()) {
      setPromotions(allPromotions);
      return;
    }

    const filteredPromotions = allPromotions.filter((promotion) =>
      promotion.productTitle?.toLowerCase().includes(term.toLowerCase())
    );
    setPromotions(filteredPromotions);
  };

  // Mở/đóng modal
  const openModal = (promotion: any = null) => {
    if (promotion) {
      setFormData(promotion);
    } else {
      setFormData({
        promotionId: 0,
        productId: 0,
        discountPercentage: 0,
        startDate: "",
        endDate: "",
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setFormData({
      promotionId: 0,
      productId: 0,
      discountPercentage: 0,
      startDate: "",
      endDate: "",
    });
    setModalOpen(false);
  };

  // Xử lý form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (formData.promotionId === 0) {
        // Thêm mới promotion
        const response = await axios.post("https://localhost:7071/api/Promotion", formData,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setPromotions([...promotions, response.data]);
      } else {
        // Cập nhật promotion
        await axios.put(`https://localhost:7071/api/Promotion/${formData.promotionId}`, formData,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setPromotions(
          promotions.map((promotion) =>
            promotion.promotionId === formData.promotionId ? { ...promotion, ...formData } : promotion
          )
        );
      }
      fetchPromotions();
      closeModal();
    } catch (error) {
      console.error("Error saving promotion:", error);
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
          Add Promotion
        </button>
        <div className="px-4 py-6">
          <input
            type="text"
            placeholder="Search Promotions..."
            className="px-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-6">Loading promotions...</div>
      ) : promotions.length === 0 ? (
        <div className="text-center py-6">No promotions found.</div>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-8 border-t px-4 py-4.5">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">Product</div>
            <div className="col-span-1">Discount</div>
            <div className="col-span-2">Start Date</div>
            <div className="col-span-2">End Date</div>
          </div>

          {/* Promotion Rows */}
          {promotions.map((promotion) => (
            <div className="grid grid-cols-8 border-t px-4 py-4.5" key={promotion.promotionId}>
              <div className="col-span-1">{promotion.promotionId}</div>
              <div className="col-span-2">{promotion.productTitle}</div>
              <div className="col-span-1">{promotion.discountPercentage}%</div>
              <div className="col-span-2">{new Date(promotion.startDate).toLocaleString()}</div>
              <div className="col-span-2">{new Date(promotion.endDate).toLocaleString()}</div>
            </div>
          ))}
        </>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-xl font-bold mb-4">
              {formData.promotionId === 0 ? "Add Promotion" : "Edit Promotion"}
            </h3>
            {/* Form */}
            <div className="space-y-4">
              <input
                type="number"
                name="productId"
                placeholder="Product ID"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.productId}
                onChange={handleChange}
              />
              <input
                type="number"
                name="discountPercentage"
                placeholder="Discount (%)"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.discountPercentage}
                onChange={handleChange}
              />
              <input
                type="datetime-local"
                name="startDate"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.startDate}
                onChange={handleChange}
              />
              <input
                type="datetime-local"
                name="endDate"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.endDate}
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

export default PromotionManagement;
