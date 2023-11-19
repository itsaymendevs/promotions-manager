"use client";

// * Packages
import Link from "next/link";

// * icons
import SideButton from "./sideButton";

export default function Sidebar({
  activeBtn,
  firstBtnTarget,
  firstBtnText,
  firstBtnIcon,
  secBtnTarget,
  secBtnText,
  secBtnIcon,
  submenuTitle,
  handleClick,
}) {
  return (
    <div className="col-3">
      {/* submenu Title */}
      <div className="d-flex justify-content-between align-items-center">
        <Link href="/">
          <i className="material-icons fs-2">arrow_back</i>
        </Link>
        <h4 className="fw-bold text-center mb-1 w-100">
          {submenuTitle}
          <br />
        </h4>
      </div>

      {/* submenu */}
      <div className="menu--div mt-4">
        {/* first button */}
        <SideButton
          active={activeBtn}
          target={firstBtnTarget}
          icon={firstBtnIcon}
          text={firstBtnText}
          handleClick={handleClick}
        />

        {/* second button */}
        <SideButton
          active={activeBtn}
          target={secBtnTarget}
          icon={secBtnIcon}
          text={secBtnText}
          handleClick={handleClick}
        />
      </div>
    </div>
  ); // end return
} // end function
