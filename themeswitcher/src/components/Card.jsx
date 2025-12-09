import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="data:image/jpeg;base64,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"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
