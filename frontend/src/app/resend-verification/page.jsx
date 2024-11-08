"use client";

import { useEffect, useState } from 'react';
import axios from '@/utils/axios'; // Assuming axios is set up properly
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ResendVerification() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Get email from query parameter
        const emailParam = searchParams.get('email');
        if (emailParam) {
            setEmail(emailParam);
        }
    }, [searchParams]);

    const handleResend = async () => {
        setLoading(true);
        try {
            // Make POST request to resend verification email
            const response = await axios.post('/api/Auth/resend-verification', { email });
            setSuccessMessage('Verification email has been resent!');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Failed to resend verification email. Please try again.');
            setSuccessMessage('');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="mb-[145px]">
            <div>
                <div className="text-center">
                    <img className="mx-auto w-96 h-auto" src='/img/website-name-black-theme.png' alt="Website Logo" />
                    <h1 className="font-semibold text-[30px]">Check Email</h1>
                    <h1 className="text-gray-700 mb-4 font-semibold mt-7 mb-7">
                        Check your email for the verification link sent to <br />
                        <strong>{email}</strong>
                    </h1>

                    {successMessage && (
                        <p className="text-green-500 font-semibold mb-4">{successMessage}</p>
                    )}
                    {errorMessage && (
                        <p className="text-red-500 font-semibold mb-4">{errorMessage}</p>
                    )}

                    <button 
                        onClick={handleResend} 
                        className="text-[#408BE8] mb-6 font-semibold"
                        disabled={loading}
                    >
                        {loading ? 'Resending...' : 'Not in inbox or spam folder? Resend'}
                    </button><br />
                    <Link
                        href="/"
                        className="mt-4 bg-black text-white py-2 px-4 rounded transition duration-200 mt-11"
                    >
                        Go back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default ResendVerification;
