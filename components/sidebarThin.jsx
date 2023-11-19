"use client";

import React from "react";
import Link from "next/link";
import ArrowBack from "@material-ui/icons/ArrowBack";

export default function SidebarThin() {
  return (
    <div className="col-1">
      <div className="d-flex justify-content-center align-items-start h-100 pt-4">
        <Link href="/" replace>
          <ArrowBack className="fs-2" />
        </Link>
      </div>
    </div>
  ); // end return
} //end function
