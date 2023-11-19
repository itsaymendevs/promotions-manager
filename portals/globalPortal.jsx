"use client";

import { createPortal } from "react-dom";
import React from "react";

function GuestPortal({ children }) {
  const [domReady, setDomReady] = React.useState(false);

  React.useEffect(() => {
    setDomReady(true);
  }, []);

  return domReady
    ? createPortal(children, document.getElementById("portals"))
    : null;
} // end function

export default GuestPortal;
