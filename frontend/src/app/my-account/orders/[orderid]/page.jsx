"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "@/utils/axios"; // Adjust the path if needed
import Cookies from "js-cookie";
import Link from "next/link";

function OrderDetail() {
    const { orderid } = useParams();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [reviewData, setReviewData] = useState({ rating: 0, comment: "" });
    const [reviewStatus, setReviewStatus] = useState({});

    useEffect(() => {
        const fetchOrderDetail = async () => {
            try {
                const token = Cookies.get("token");
                const response = await axios.get(`/api/UserOrder/user/orders/${orderid}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setOrder(response.data);

                // Fetch review status for each product
                const status = {};
                for (let item of response.data.orderItems) {
                    const reviewResponse = await axios.get(`/api/UserReview/${orderid}/items/${item.productId}/review-status`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });

                    console.log(`Product ID: ${item.productId}, Review response:`, reviewResponse.data);

                    // Check the message in the response to determine the review status
                    if (reviewResponse.data.message === "This product has already been reviewed.") {
                        status[item.productId] = true; // Product has been reviewed
                    } else if (reviewResponse.data.message === "You have not reviewed this product yet.") {
                        status[item.productId] = false; // Product has not been reviewed yet
                    } else {
                        status[item.productId] = false; // Default to false if the message is unexpected
                    }
                }
                setReviewStatus(status);
            } catch (err) {
                setError("Error fetching order details.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetail();
    }, [orderid]);

    const openReviewSidebar = (product) => {
        setSelectedProduct(product);
        setShowSidebar(true);
    };

    const closeReviewSidebar = () => {
        setShowSidebar(false);
        setSelectedProduct(null);
        setReviewData({ rating: 0, comment: "" });
    };

    const handleSubmitReview = async () => {
        try {
            const token = Cookies.get("token");
            await axios.post(
                "/api/UserReview/add",
                { productId: selectedProduct.productId, ...reviewData },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert("Review submitted successfully!");
            closeReviewSidebar();
            // Optionally update the order state to mark the product as reviewed
        } catch (error) {
            alert("Failed to submit review.");
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-600">{error}</p>;
    }

    const handleLogout = () => {
        Cookies.remove("token");
        window.location.href = "/";
    };

  return (
    <main>
      <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex md:flex-row w-full">
        <div className="flex flex-col md:flex-row w-full">
        <nav className="flex flex-col pb-2 md:w-2/6 2xl:w-4/12 ltr:md:pr-8 rtl:md:pl-8 ltr:lg:pr-12 rtl:lg:pl-12 ltr:xl:pr-16 rtl:xl:pl-16 ltr:2xl:pr-20 rtl:2xl:pl-20 md:pb-0">
              {/* Navigation links */}
              <Link
                className="flex items-center cursor-pointer text-sm lg:text-base text-black font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
                href="/my-account"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                  />
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
                  />
                </svg>
                <span className="ltr:pl-2 rtl:pr-2 pl-2 pr-2">Dashboard</span>
              </Link>
              <Link
                className="bg-gray-100 font-semibold flex items-center cursor-pointer text-sm lg:text-base text-black py-3.5 px-4 lg:px-5 rounded mb-2 "
                href="/my-account/orders"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx={176}
                    cy={416}
                    r={16}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                  />
                  <circle
                    cx={400}
                    cy={416}
                    r={16}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                  />
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M48 80h64l48 272h256"
                  />
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={32}
                    d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                  />
                </svg>
                <span className="ltr:pl-2 rtl:pr-2 pl-2 pr-2">Orders</span>
              </Link>
              <Link
                              className="flex items-center cursor-pointer text-sm lg:text-base text-black font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
                              href='/my-account/account-details'
                          >
                              <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="w-5 h-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                      d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                                  />
                                  <path
                                      fill="none"
                                      strokeMiterlimit={10}
                                      strokeWidth={32}
                                      d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                                  />
                              </svg>
                              <span className="ltr:pl-2 rtl:pr-2 pl-2 pr-2">Account Details</span>
                          </Link>
                          <Link
                              className="flex items-center cursor-pointer text-sm lg:text-base text-black font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
                              href="/my-account/change-password"
                          >
                              <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="w-5 h-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                      d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
                                  />
                              </svg>
                              <span className="ltr:pl-2 rtl:pr-2 pl-2 pr-2">Change Password</span>
                          </Link>
                          <button
                              className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 focus:outline-none"
                              onClick={handleLogout}
                          >
                              <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="w-5 h-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={32}
                                      d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40m64 160l80-80-80-80m-192 80h256"
                                  />
                              </svg>
                              <span className="ltr:pl-2 rtl:pr-2 pl-2 pr-2">Logout</span>
                          </button>
            </nav>
            <div className="md:w-4/6 2xl:w-8/12 lg:pl-8 xl:pl-16 2xl:pl-20 md:pb-0">
            <h2 className="text-3xl font-semibold">Your Orders Detail</h2>
            <div className="max-w-4xl mx-auto pt-6">
                <Link href="/my-account/orders" className="bg-black text-white p-3 font-bold px-5">
                    Back to Orders
                </Link>

                <div className="mt-4">
                    <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
                    <p><strong>Order ID:</strong> {order.orderId}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
                    <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Order Items</h3>
                    {order.orderItems.map((item) => (
                        <div key={item.productId} className="flex items-center space-x-4 mb-4">
                            <img src={item.productImage} alt={item.productTitle} className="w-16 h-16 object-cover" />
                            <div className="flex-1">
                                <p><strong>{item.productTitle}</strong></p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price.toFixed(2)}</p>

                                {/* Conditionally render review button or message only if the order status is "Completed" */}
                                {order.status === "Completed" && !reviewStatus[item.productId] ? (
                                    <button
                                        className="bg-black mt-3 text-white px-4 py-2 rounded"
                                        onClick={() => openReviewSidebar(item)}
                                    >
                                        Review
                                    </button>
                                ) : (
                                    order.status === "Completed" && reviewStatus[item.productId] && (
                                        <span className="text-green-500 font-semibold">This product has been reviewed</span>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        {showSidebar && (
  <>
    {/* Background Overlay */}
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-[100] cursor-pointer"
      onClick={closeReviewSidebar} // Close sidebar when clicking outside
    ></div>

    {/* Sidebar */}
    <div className="fixed top-0 right-0 h-full w-80 z-[200] bg-gray-100 shadow-lg p-6 flex flex-col">
      <button className="absolute top-4 right-4" onClick={closeReviewSidebar}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          className="w-6 h-6"
          height="1em"
          width="1em"
        >
          <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M368 368L144 144m224 0L144 368" />
        </svg>
      </button>
      <h2 className="text-xl font-semibold mb-4">Write a Review</h2>

      {/* Product Name with Image */}
      <div className="flex items-center">
        <img
          src={selectedProduct?.productImage} // Replace with the actual product image URL
          alt="Product"
          className="w-8 h-8 object-cover mr-2"
        />
        <p>Product: {selectedProduct?.productTitle}</p>
      </div>

      {/* Rating - Star input */}
      <div className="mt-4">
        <label className="block font-medium">Rating</label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-6 h-6 cursor-pointer ${reviewData.rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
              onClick={() => {
                // Only set rating between 1 and 5
                if (star >= 1 && star <= 5) {
                  setReviewData({ ...reviewData, rating: star });
                }
              }}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          ))}
        </div>
        {/* Display validation message for rating */}
        {reviewData.rating < 1 && (
          <div className="text-red-500 text-sm mt-2">Please select a rating between 1 and 5.</div>
        )}
      </div>

      {/* Comment textarea */}
      <div className="mt-4 flex-grow">
        <label className="block font-medium">Comment</label>
        <textarea
          className="border w-full p-2 mt-1 h-5/6 resize-none rounded-md"
          maxLength={500} // Limit to 500 characters
          value={reviewData.comment}
          onChange={(e) => setReviewData({ ...reviewData, comment: e.target.value })}
        />
        {/* Display remaining characters */}
        <div className="mt-2 text-sm text-gray-600">
          {500 - reviewData.comment.length} characters remaining
        </div>
        {/* Display validation message for comment length */}
        {reviewData.comment.length < 20 && reviewData.comment.length > 0 && (
          <div className="text-red-500 text-sm mt-2">Comment must be at least 20 characters long.</div>
        )}
      </div>

      {/* Submit button */}
      <button
        className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        onClick={handleSubmitReview}
        disabled={reviewData.rating < 1 || reviewData.rating > 5 || reviewData.comment.length < 20} // Disable button if validation fails
      >
        Submit Review
      </button>
    </div>
  </>
)}




        </div>
      </div>
    </main>
  );
}

export default OrderDetail;
