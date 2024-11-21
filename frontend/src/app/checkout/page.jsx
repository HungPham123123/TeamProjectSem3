"use client";

import React, { useEffect, useState } from 'react';
import axios from '@/utils/axios';
import StripeCheckoutModal from '@/components/StripeCheckoutModal';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function Checkout() {
  const [cart, setCart] = useState({ cartItems: [] });
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const stripePromise = loadStripe('pk_test_51Q4il8LqGu1kpAE7tc1Mr932T1rBgOb1ZdjpWMwpaK9elFIYiAwqZa40MdhfGeDzu1UkpplxGk5KgBWDgGQm5IIL00aFedfPVk');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    city: '',
    zipCode: '',
    note: '',
  });
  const [errors, setErrors] = useState({});
  const [clientSecret, setClientSecret] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("/api/Auth/info");
        const user = response.data;
        setFormData((prev) => ({
          ...prev,
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          phone: user.phone || "",
        }));
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('/api/Cart');
        setCart(response.data);
        setTotal(response.data.totalAmount);
      } catch (error) {
        console.log("Error fetching cart data:", error);
      }
    };

    fetchCart();
  }, []);

  const handleSelectPayment = (method) => {
    setPaymentMethod(method);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createPaymentIntent = async (totalAmount) => {
    try {
      const paymentIntentResponse = await axios.post('/api/Payment/create-payment-intent', { totalAmount });
      const { clientSecret } = paymentIntentResponse.data;
      setClientSecret(clientSecret);  // Set the clientSecret here
    } catch (error) {
      console.error("Error creating payment intent:", error);
      alert('Error creating payment intent.');
    }
  };

  const handlePaymentSuccessWithCashOnDelivery = async () => {
    const totalAmount = cart?.cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    try {
      
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: 'USA',
        city: formData.city,
        address: formData.address,
        optional: formData.note,
        zipCode: formData.zipCode,
        email: formData.email,
        phoneNumber: formData.phone,
        tax: 10,
        totalAmount: totalAmount
      };
  
      const response = await axios.post(
        `/api/Payment/create-order-cash-on-delivery`,
        payload
      );
  
      if (response.status === 200) {
        alert('Payment successful and order created!');
        setShowPaymentModal(false);
        console.log(response.data);
        window.location.href = '/order-success';
      } else {
        alert('Payment confirmation failed.');
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
      alert('Error confirming payment.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    const totalAmount = cart?.cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  
    if (paymentMethod === 'credit') {
      await createPaymentIntent(totalAmount);
      setShowPaymentModal(true);
    } else if (paymentMethod === 'cash') {
      await handlePaymentSuccessWithCashOnDelivery();
    } else {
      alert('Please select a valid payment method.');
    }
  };

  const handlePaymentSuccess = async (paymentIntent) => {
    const totalAmount = cart?.cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    try {
      
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: 'USA',
        city: formData.city,
        address: formData.address,
        optional: formData.note,
        zipCode: formData.zipCode,
        email: formData.email,
        phoneNumber: formData.phone,
        tax: 10,
        totalAmount: totalAmount
      };
  
      const response = await axios.post(
        `/api/Payment/confirm-payment-and-create-order?paymentIntentId=${paymentIntent.id}`,
        payload
      );
  
      if (response.status === 200) {
        alert('Payment successful and order created!');
        setShowPaymentModal(false);
        console.log(response.data);
        window.location.href = '/order-success';
      } else {
        alert('Payment confirmation failed.');
      }
    } catch (error) {
      console.error('Error confirming payment:', error);
      alert('Error confirming payment.');
    }
  };

  const closeModal = () => {
    setShowPaymentModal(false);
  };
  



  return (
    <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
      <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
        <div className="md:w-full lg:w-3/5 flex h-full flex-col -mt-1.5">
          <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
            Shipping Address
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full mx-auto flex flex-col justify-center "
            noValidate=""
          >
            <div className="flex flex-col space-y-4 lg:space-y-5">
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    First Name *
                  </label>
                  <input id="firstName"name="firstName"
                    type="text"
                    placeholder=""
                    value={formData.firstName}
                    onChange={handleChange}
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="true"
                  />
                  {errors.firstName && <p className="my-2 text-xs text-red-500">{errors.firstName}</p>}
                </div>
                <div className="w-full lg:w-1/2 lg:ml-3 lg:mr-3 mt-2 md:mt-0">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder=""
                    value={formData.lastName}
                    onChange={handleChange}
                    className="py-2 px-4 md:px-5 w-full  appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="true"
                  />
                  {errors.lastName && <p className="my-2 text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>
              <div className="block">
                <label
                  htmlFor="address"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                >
                  Address *
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder=""
                  value={formData.address}
                  onChange={handleChange}
                  className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="true"
                />
                {errors.address && <p className="my-2 text-xs text-red-500">{errors.address}</p>}
              </div>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="phone"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Phone/Mobile *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder=""
                    value={formData.phone}
                    onChange={handleChange}
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="true"
                  />
                  {errors.phone && <p className="my-2 text-xs text-red-500">{errors.phone}</p>}
                </div>
                <div className="w-full lg:w-1/2 lg:ml-3 lg:mr-3 mt-2 md:mt-0">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    value={formData.email}
                    onChange={handleChange}
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="true"
                  />
                  {errors.email && <p className="my-2 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
              <div className="w-full lg:w-1/2 ">
  <label
    htmlFor="city"
    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
  >
    City/Town
  </label>
  <select
    id="city"
    name="city"
    value={formData.city}
    onChange={handleChange}
    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
    aria-invalid="false"
  >
    <option value="">Select a City</option>
    <option value="Hanoi">Hanoi</option>
    <option value="Ho Chi Minh City">Ho Chi Minh City</option>
    <option value="Da Nang">Da Nang</option>
    <option value="Hai Phong">Hai Phong</option>
    <option value="Can Tho">Can Tho</option>
    <option value="Vinh">Vinh</option>
    <option value="Nha Trang">Nha Trang</option>
    <option value="Hue">Hue</option>
    <option value="Quy Nhon">Quy Nhon</option>
    <option value="Rach Gia">Rach Gia</option>
    {/* Add more cities as needed */}
  </select>
</div>
                <div className="w-full lg:w-1/2 lg:ml-3 lg:mr-3 mt-2 md:mt-0">
                  <label
                    htmlFor="zipCode"
                    className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                  >
                    Postcode
                  </label>
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    placeholder=""
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
              </div>
              <div className="relative flex items-center ">
                <label className="group flex items-center text-heading text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading checked:hover:bg-heading checked:focus:bg-heading"
                  />
                  <span className="ms-4 -mt-0.5">
                    Save this information for next time
                  </span>
                </label>
              </div>
              <div className="relative pt-3 xl:pt-6">
                <label
                  htmlFor="note"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-3"
                >
                  Order Notes (Optional)
                </label>
                <textarea
                  id="note"
                  name="note"
                  className="px-4 py-3 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body"
                  autoComplete="off"
                  spellCheck="false"
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                  value={formData.note}
                  onChange={handleChange}
                />
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  data-variant="flat"
                  className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart w-full sm:w-auto"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-full lg:w-2/5 md:ml-7 md:mr-7 lg:ml-10 lg:mr-10 xl:ml-14 rtl:xl:mr-14 flex flex-col h-full -mt-1.5">
          <div className="pt-12 md:pt-0 ltr:2xl:pl-4 rtl:2xl:pr-4">
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
              Your Order
            </h2>
            <div className="flex p-4 rounded-md mt-6 md:mt-7 justify-between xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
              <span>Product</span>
              <span className="ltr:ml-auto rtl:mr-auto flex-shrink-0">
                Subtotal
              </span>
            </div>

            {cart?.cartItems?.map((item, index) => (
              <div key={index} className="flex py-4 items-center lg:px-3 border-b border-gray-300">
                <div className="flex border rounded-md border-gray-300 w-16 h-16 flex-shrink-0 mr-3">
                  <img
                    src={item.productImage}
                    alt={item.productTitle}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <h6 className="text-sm ltr:pl-3 rtl:pr-3 font-regular text-heading">
                  {item.productTitle}
                </h6>
                <div className="flex ml-auto text-heading text-sm pl-2 pr-2 flex-shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <div className="flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
              Subtotal
              <span className="ml-auto rtl:mr-auto flex-shrink-0">
                ${cart?.cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
              </span>
            </div>
            <div className="flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
              Shipping
              <span className="ml-auto rtl:mr-auto flex-shrink-0">Free</span>
            </div>
            <div className="flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
              Total
              <span className="ml-auto rtl:mr-auto flex-shrink-0">
                ${cart?.cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
              </span>
            </div>
            <div className='flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0'></div>
            <button
          onClick={() => handleSelectPayment('cash')}
          className={`w-full py-3 px-4 rounded-lg transition-all duration-300 ${
            paymentMethod === 'cash'
              ? 'bg-gray-900 text-white border-4 border-white transform scale-105'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          Pay on Cash Delivery
        </button>
          </div>

          <div className="w-full mt-4">
          <button
          onClick={() => handleSelectPayment('credit')}
          className={`w-full py-3 px-4 rounded-lg transition-all duration-300 ${
            paymentMethod === 'credit'
              ? 'bg-blue-700 text-white border-4 border-white transform scale-105'
              : 'bg-blue-600 text-white hover:bg-blue-500'
          }`}
        >
          Pay with Credit Card
        </button>
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-8 md:px-16 2xl:px-24 flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16">
        <div className="lg:-mt-2 xl:-mt-0.5 text-center ltr:xl:text-left rtl:xl:text-right mb-7 md:mb-8 lg:mb-9 xl:mb-0">
          <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading sm:mb-0 md:mb-2.5 lg:mb-3 xl:mb-3.5">
            Get Expert Tips In Your Inbox
          </h3>
          <p className="text-body text-xs md:text-sm leading-6 md:leading-7">
            Subscribe to our newsletter and stay updated.
          </p>
        </div>
        <form className="flex-shrink-0 w-full sm:w-96 md:w-[545px]" noValidate="">
          <div className="flex flex-col sm:flex-row items-start justify-end">
            <div className="w-full">
              <input
                id="subscription_email"
                name="subscription_email"
                type="email"
                placeholder="Write your email here"
                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 px-4 lg:px-7 h-12 lg:h-14 text-center ltr:sm:text-left rtl:sm:text-right bg-white rounded-md"
                autoComplete="off"
                spellCheck="false"
                aria-invalid="false"
              />
            </div>
            <button
              data-variant="flat"
              className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-full flex-shrink-0"
            >
              <span className="lg:py-0.5">Subscribe</span>
            </button>
          </div>
        </form>
      </div>
      {showPaymentModal && clientSecret && (
  <Elements stripe={stripePromise} options={{ clientSecret }}>
    <StripeCheckoutModal
      totalAmount={{ clientSecret }} 
      onClose={closeModal}
      onSuccess={handlePaymentSuccess}
    />
  </Elements>
)}

    </div>

  );
}

export default Checkout;