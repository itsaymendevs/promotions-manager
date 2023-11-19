import React from "react";

export default function Input({ name, type, required, text }) {
  return (
    <>
      <label className="form-label form--label">{text}</label>
      <input
        className="form-control form--input"
        type={type}
        name={name}
        required={required}
      />
    </>
  ); // end return
} // end function
