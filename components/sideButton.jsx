import React from "react";

export default function SideButton({
  active,
  target,
  icon,
  text,
  handleClick,
}) {
  return (
    <button
      className={`btn ${
        active == target ? "btn--regular " : "btn--outline-regular"
      } w-100 rounded-0 d-flex align-items-center py-2 ps-4 justify-content-start switch--btn`}
      type="button"
      data-group="1"
      data-target={target}
      onClick={(e) => handleClick(target)}
    >
      <i className={`${icon} ${active == target && "text-white"} me-3`}></i>
      {text}
    </button>
  ); // end return
} // end function
