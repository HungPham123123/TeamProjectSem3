import Link from 'next/link';
import React from 'react';

function OrderSuccess({ orderDetails }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white  rounded-lg h-screen">
      <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Order Successful!</h2>
      <p className="text-lg text-center text-gray-700 mb-6">Thank you for your purchase. Your order has been successfully placed.</p>



      <div className="flex justify-center gap-4">

        <Link
        href="/"
          className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;
