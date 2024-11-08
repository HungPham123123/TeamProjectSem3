"use client";

import Cookies from 'js-cookie';
import Link from "next/link";

function AccountDetails() {

    const handleLogout = () => {
        Cookies.remove('token');
        window.location.href = '/';
    };

    return (
        <main>
            <div className="py-16 lg:py-20 px-0 xl:max-w-screen-xl mx-auto flex md:flex-row w-full">
                <div className="flex flex-col md:flex-row w-full">
                    <nav className="flex flex-col pb-2 md:w-2/6 2xl:w-4/12 ltr:md:pr-8 rtl:md:pl-8 ltr:lg:pr-12 rtl:lg:pl-12 ltr:xl:pr-16 rtl:xl:pl-16 ltr:2xl:pr-20 rtl:2xl:pl-20 md:pb-0">
                        <Link
                            className="flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 "
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
                            className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
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
                            className="bg-gray-100 font-semibold flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2 "
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
                            className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 rounded mb-2"
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
                    <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
                        <div
                            className="w-full flex flex-col"
                            style={{ position: "relative", top: 0, opacity: 1 }}
                        >
                            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                                Account Details
                            </h2>
                            <form
                                className="w-full mx-auto flex flex-col justify-center "
                                noValidate=""
                            >
                                <div className="flex flex-col space-y-4 sm:space-y-5">
                                    <div className="flex flex-col sm:flex-row sm:gap-x-3 space-y-4 sm:space-y-0">
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                htmlFor="firstName"
                                                className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                                            >
                                                First Name *
                                            </label>
                                            <input
                                                id="firstName"
                                                name="firstName"
                                                type="text"
                                                placeholder=""
                                                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                autoComplete="off"
                                                spellCheck="false"
                                                aria-invalid="false"
                                            />
                                        </div>
                                        <div className="w-full sm:w-1/2">
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
                                                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                autoComplete="off"
                                                spellCheck="false"
                                                aria-invalid="false"
                                            />
                                        </div>
                                    </div>
                                    <div className="block">
                                        <label
                                            htmlFor="displayName"
                                            className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                                        >
                                            Display Name *
                                        </label>
                                        <input
                                            id="displayName"
                                            name="displayName"
                                            type="text"
                                            placeholder=""
                                            className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                            autoComplete="off"
                                            spellCheck="false"
                                            aria-invalid="false"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:gap-x-3 space-y-4 sm:space-y-0">
                                        <div className="w-full sm:w-1/2">
                                            <label
                                                htmlFor="phoneNumber"
                                                className="block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer"
                                            >
                                                Phone/Mobile *
                                            </label>
                                            <input
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                type="tel"
                                                placeholder=""
                                                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                autoComplete="off"
                                                spellCheck="false"
                                                aria-invalid="false"
                                            />
                                        </div>
                                        <div className="w-full sm:w-1/2">
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
                                                className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12 rounded-md"
                                                autoComplete="off"
                                                spellCheck="false"
                                                aria-invalid="false"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col">
                                        <span className="mt-2 text-sm text-heading font-semibold block pb-1">
                                            Gender
                                        </span>
                                        <div className="mt-2 flex items-center gap-x-6">
                                            <label className="group flex items-center text-heading text-sm cursor-pointer">
                                                <input
                                                    type="radio"
                                                    className="form-radio w-5 h-5 border border-gray-300 text-heading rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                                    name="gender"
                                                    defaultValue="male"
                                                />
                                                <span className="ms-2 text-sm text-heading relative">Male</span>
                                            </label>
                                            <label className="group flex items-center text-heading text-sm cursor-pointer">
                                                <input
                                                    type="radio"
                                                    className="form-radio w-5 h-5 border border-gray-300 text-heading rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                                    name="gender"
                                                    defaultValue="female"
                                                />
                                                <span className="ms-2 text-sm text-heading relative">Female</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <button
                                            data-variant="flat"
                                            className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 mt-3 w-full sm:w-32"
                                            type="submit"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
}

export default AccountDetails