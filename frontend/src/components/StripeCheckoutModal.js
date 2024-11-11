"use client";

import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React from "react";

const StripeCheckoutModal = ({ totalAmount, onClose, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return; // Ensure stripe is loaded

    const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: window.location.origin
        },
        redirect: "if_required"
    });

    if (error) {
      console.error(error.message);
    } else {
      if (paymentIntent.status === 'succeeded') {
        // Payment successful, trigger onSuccess callback
        onSuccess(paymentIntent); // Call the onSuccess function passed as a prop
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-[2000]">
      <div className="bg-white p-6 rounded-lg w-full sm:w-96">
        <h2 className="text-xl font-bold text-center mb-4">Complete Your Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="payment-element">
            <PaymentElement />
          </div>
          <button
            type="submit"
            disabled={!stripe || !elements}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Pay Now
          </button>
        </form>
        <button
          className="w-full text-red-500 mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StripeCheckoutModal;
