import React from "react";

export default function Button({ classes, text, type }) {
  return (
    <button className={classes} type={type}>
      {text}
    </button>
  ); //end return
} // end function
