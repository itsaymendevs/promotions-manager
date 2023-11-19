import React from "react";
import Image from "next/image";

export default function InputFile({ name, currentImg }) {
  return (
    <>
      {/* label */}
      <label
        className="form-label d-block file--label"
        htmlFor={`file--${name}`}
      >
        <Image
          id="file--preview"
          className="dashboard--logo"
          src={currentImg}
          alt="File Input"
          width="100%"
          height="100%"
        />
        <i className="far fa-edit"></i>
      </label>

      {/* input */}
      <input
        className="form-control d-none"
        type="file"
        id={`file--${name}`}
        name={name}
        accept="image/*"
      />
    </>
  ); // end return
} //end function
