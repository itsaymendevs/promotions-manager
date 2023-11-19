import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function menuItem({ img, title, link }) {
  return (
    <div className="col-4 mb-4">
      <section className="section--card section--card-hover d-flex align-items-center justify-content-between position-relative">
        <div className="d-block w-100">
          <Link className="stretched-link d-block" href={link}>
            <Image
              className="dashboard--card-img of-contain"
              src={img}
              alt={title}
            />
          </Link>
          <h4 className="fw-bold text-center mb-1">{title}</h4>
        </div>
      </section>
    </div>
  ); //end return
} //end function
