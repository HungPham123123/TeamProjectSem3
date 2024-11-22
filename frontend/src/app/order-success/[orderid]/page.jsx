"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "@/utils/axios";
import Link from "next/link";

function OrderSuccess() {
  const { orderid } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/orders/user/order/${orderid}`)
      .then((response) => {
        setOrderDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
      });
  }, [orderid]);

  if (!orderDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      {/* Checkmark Icon */}
      <div className="flex items-center justify-center bg-green-100 w-16 h-16 rounded-full mb-4">
        <svg
          className="w-8 h-8 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12l2 2l4-4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>

      {/* Confirmation Message */}
      <h1 className="text-2xl font-semibold text-gray-800">Thank you for your purchase!</h1>
      <p className="text-gray-600 mt-2">
        We've received your order and it will ship in <span className="font-medium">5-7 business days</span>.
      </p>
      <p className="text-gray-600 mt-1">
        Your order number is <span className="font-bold">#{orderDetails.orderId}</span>.
      </p>

      {/* Customer Details */}
      <div className="bg-white shadow rounded-lg mt-8 w-full max-w-md p-6 grid grid-cols-3 gap-4 text-sm mb-6">
                <div>
                  <h2 className="text-gray-700 font-medium mb-2">Customer Details</h2>
                  <p>{orderDetails.firstName} {orderDetails.lastName}</p>
                  <p>{orderDetails.address}</p>
                  <p>{orderDetails.city}, {orderDetails.country}</p>
                  <p>Email: <a href={`mailto:${orderDetails.email}`} className="text-blue-600">{orderDetails.email}</a></p>
                  <p>Phone: {orderDetails.phoneNumber}</p>
                </div>
                <div>
                  <h2 className="text-gray-700 font-medium mb-2">Shipping Info</h2>
                  <p>{orderDetails.address}</p>
                  <p>Zip Code: {orderDetails.zipCode}</p>
                </div>
                <div>
                  <h2 className="text-gray-700 font-medium mb-2">Summary</h2>
                  <p>Total Amount: ${orderDetails.totalAmount}</p>
                </div>
              </div>  

      {/* Order Summary */}
      <div className="bg-white shadow rounded-lg mt-8 w-full max-w-md">
        <h2 className="text-lg font-medium text-gray-800 border-b border-gray-200 px-6 py-4">
          Order Summary
        </h2>
        <div className="px-6 py-4 space-y-4">
          {orderDetails.orderItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={item.productImage}
                  alt={item.productTitle}
                  className="w-12 h-12 rounded object-cover"
                />
                <p className="ml-4 text-gray-700 text-sm">{item.productTitle}</p>
              </div>
              <p className="text-gray-700 font-medium">
                ${((item.price * item.quantity).toFixed(2))}
              </p>
            </div>
          ))}
        </div>
        {/* Total */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-between items-center">
          <span className="text-gray-800 font-semibold">Total Amount</span>
          <span className="text-gray-800 font-bold">${orderDetails.totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <Link href="/"
        className="mt-6 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default OrderSuccess;
