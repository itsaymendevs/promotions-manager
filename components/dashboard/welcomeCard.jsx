"use client";

import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function WelcomeCard() {
  // * Slices
  const { firstName, lastName } = useSelector((store) => store.UserReducer);

  return (
    <section className="section--card d-flex align-items-center justify-content-between">
      <div>
        <Link
          className="btn btn--cardlink mb-4 ls-05 text-uppercase fs-13 d-inline-flex align-items-center"
          role="button"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="bi bi-box-arrow-in-left me-1"
          >
            <path
              fillRule="evenodd"
              d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
            ></path>
            <path
              fillRule="evenodd"
              d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
            ></path>
          </svg>
          Logout
        </Link>

        {/* Full Name */}
        <h2 className="fw-bold">
          Hello,&nbsp;
          <span className="theme--highlighted px-1 rounded-1">
            {firstName} {lastName}
          </span>
        </h2>
      </div>
      {/* end div */}

      {/* total sms */}
      <div className="me-4">
        <h1 className="display-1 fw-bold text--theme my-4 mb-0">
          423
          <span className="fs-5 fw-bold text-end ms-1 text-decoration-underline">
            SMS
          </span>
        </h1>
      </div>
    </section>
  ); //end return
} // end function
