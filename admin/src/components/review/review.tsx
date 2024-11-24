"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [allReviews, setAllReviews] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    reviewId: 0,
    comment: "",
    rating: 0,
    userId: 0,
  });

  // Fetch danh sách reviews
  const token = localStorage.getItem('adminToken');
  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://localhost:7071/api/Review",{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setReviews(response.data);
      setAllReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Hàm xóa review
  const handleDelete = async (reviewId: number) => {
    try {
      await axios.delete(`https://localhost:7071/api/Review/${reviewId}`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      setReviews(reviews.filter((review) => review.reviewId !== reviewId));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  // Tìm kiếm review
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchReviews(e.target.value);
  };

  const searchReviews = (term: string) => {
    if (!term.trim()) {
      setReviews(allReviews);
      return;
    }

    const filteredReviews = allReviews.filter((review) =>
      review.productTitle?.toLowerCase().includes(term.toLowerCase())
    );
    setReviews(filteredReviews);
  };

  // Hàm mở modal
  const openModal = (review: any = null) => {
    if (review) {
      setFormData(review);
    } else {
      setFormData({
        reviewId: 0,
        comment: "",
        rating: 0,
        userId: 0,
      });
    }
    setModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setFormData({
      reviewId: 0,
      comment: "",
      rating: 0,
      userId: 0,
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
      const payload =
        formData.reviewId === 0
          ? {
              // Dữ liệu khi thêm mới
              userId: formData.userId,
              productId: formData.productId,
              rating: formData.rating,
              comment: formData.comment,
            }
          : {
              // Dữ liệu khi cập nhật
              rating: formData.rating,
              comment: formData.comment,
            };
  
      if (formData.reviewId === 0) {
        // Add new review
        const response = await axios.post("https://localhost:7071/api/Review", payload,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setReviews([...reviews, response.data]);
      } else {
        // Edit existing review
        await axios.put(`https://localhost:7071/api/Review/${formData.reviewId}`, payload,{
          headers: {
            Authorization: `Bearer ${token}`, 
          }
        });
        setReviews(
          reviews.map((review) =>
            review.reviewId === formData.reviewId ? { ...review, ...payload } : review
          )
        );
      }
      fetchReviews();
      closeModal();
    } catch (error) {
      console.error("Error saving review:", error);
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
          Add Review
        </button>
        <div className="px-4 py-6">
          <input
            type="text"
            placeholder="Search Reviews..."
            className="px-4 py-2 border rounded-lg w-full"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-6">Loading reviews...</div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-6">No reviews found.</div>
      ) : (
        <>
          {/* Table Header */}
          <div className="grid grid-cols-10 border-t px-4 py-4.5">
            <div className="col-span-1">ID</div>
            <div className="col-span-2">productTitle</div>
            <div className="col-span-3 pl-12">Comment</div>
            <div className="col-span-1 pl-10">Rating</div>
            <div className="col-span-1">Username</div>
            <div className="col-span-2 px-3">Actions</div>
          </div>

          {/* Review Rows */}
          {reviews.map((review) => (
            <div className="grid grid-cols-10 border-t px-4 py-4.5" key={review.reviewId}>
              <div className="col-span-1">{review.reviewId}</div>
              <div className="col-span-2">{review.productTitle}</div>
              <div className="col-span-3 pl-10">{review.comment}</div>
              <div className="col-span-1 pl-11">{review.rating}</div>
              <div className="col-span-1">{review.username}</div>
              <div className="col-span-2 flex space-x-2 px-2">
                <button
                  className="h-10 px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  onClick={() => openModal(review)}
                >
                  Edit
                </button>
                <button
                  className="h-10 px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(review.reviewId)}
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
              {formData.reviewId === 0 ? "Add Review" : "Edit Review"}
            </h3>
            {/* Form */}
            <div className="space-y-4">
            {formData.reviewId === 0 && (
                <input
                type="number"
                name="productId"
                placeholder="Product ID"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.productId}
                onChange={handleChange}
                />
            )}
            <textarea
                name="comment"
                placeholder="Comment"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.comment}
                onChange={handleChange}
            />
            <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.rating}
                onChange={handleChange}
            />
            {formData.reviewId === 0 && (
                <input
                type="number"
                name="userId"
                placeholder="User ID"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.userId}
                onChange={handleChange}
                />
            )}
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

export default Reviews;
