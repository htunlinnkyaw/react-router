import React from "react";
import { Link } from "react-router-dom";

const BookListComponents = ({ data }) => {
  return (
    <div>
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <span href="#">
          <img
            className="rounded-t-lg w-[100px] mx-auto mt-2"
            src={data.image}
            alt="book.png"
          />
        </span>
        <div className="p-5">
          <span href="#">
            <h5 className="mb-2 line-clamp-1 text-xl text-justify font-bold tracking-tight text-gray-900 dark:text-white">
              {data.book}
            </h5>
          </span>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
            {data.description}
          </p>
          <span
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link to={`/detail/${data.id}`}>View More</Link>
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookListComponents;
