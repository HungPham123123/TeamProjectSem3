"use client";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './globals.css'; // Your global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Load Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51Q4il8LqGu1kpAE7tc1Mr932T1rBgOb1ZdjpWMwpaK9elFIYiAwqZa40MdhfGeDzu1UkpplxGk5KgBWDgGQm5IIL00aFedfPVk');

// You can pass the `clientSecret` dynamically, probably fetched from your backend
export default function RootLayout({ children, clientSecret }) {
  return (
    <html lang="en">
      <body>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Elements>
      </body>
    </html>
  );
}
