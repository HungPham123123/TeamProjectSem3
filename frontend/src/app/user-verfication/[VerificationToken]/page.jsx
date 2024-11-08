"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/utils/axios';

function UserVerification({ params }) {
  const router = useRouter();
  const { VerificationToken } = React.use(params);

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
    <main className="flex justify-center items-center mt-10">
      <div className="text-center">
        <img className="mb-10 mx-auto" src='/img/website-name-black-theme.png' alt="Website Logo" />
        <h1 className="font-semibold mb-4 text-[30px]">{statusMessage}</h1>
        <h1 className="text-gray-700 mb-4 font-semibold mt-10">
          {statusMessage} You're all set to make some great orders<br /> on Waves.com
        </h1>
        <button
          onClick={() => router.push('/')}
          className="mt-4 bg-black text-white py-2 px-4 rounded transition duration-200 mt-11"
        >
          Continue to Home
        </button>
      </div>
    </main>
  );
}

export default UserVerification;
