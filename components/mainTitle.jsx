import React from "react";

export default function MainTitle({ text }) {
  return (
    <h2
      className="fw-bold text-center text--alternative"
      style={{ marginBottom: "28px" }}
    >
      {text}
    </h2>
  ); // end return
} // end function
