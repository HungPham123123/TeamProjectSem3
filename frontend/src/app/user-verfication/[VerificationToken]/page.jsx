"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/utils/axios';

function UserVerification({ params }) {
  const router = useRouter();
  const { VerificationToken } = React.use(params); // Unwrap params

  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      if (!VerificationToken) {
        setStatusMessage('No verification token provided.');
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(`/api/Auth/verify`, {
          params: { VerificationToken },
        });
        setStatusMessage(response.data.message || 'Email verified successfully!');
      } catch (error) {
        console.error('Verification error:', error);
        setStatusMessage(error?.response?.data?.message || 'Verification failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [VerificationToken]);

  if (isLoading) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 w-[500px] text-center">
        <h1 className="text-xl font-semibold mb-4">Verification Status</h1>
        <h1 className="text-gray-700 mb-4 ">{statusMessage}</h1>
        <button
          onClick={() => router.push('/login')}
          className="mt-4 bg-[#F64F4F] text-white py-2 px-4 rounded transition duration-200"
        >
          Go to Login
        </button>
      </div>
    </main>
  );
}

export default UserVerification;
