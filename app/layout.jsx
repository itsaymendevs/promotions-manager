"use client";

import React from "react";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import ReduxProvider from "/reducers/reduxProvider";

// * Fonts / Packages CSS
import "/public/bootstrap/css/bootstrap.min.css";
import "/public/css/Helvetica.css";
import "/public/css/select2.css";
import "/public/css/Toggle-Switch-toggle-switch.css";
import "/public/css/Toggle-Switch.css";
import "/public/fonts/fontawesome-all.min.css";
import "/public/fonts/material-icons.min.css";

// * Custom CSS
import "/public/css/globals.css";
import "/public/css/styles.css";
import "/public/css/select2-custom.css";
import "/public/css/dashboard.css";
import "/public/css/switch.css";

// * JQUERY
import $ from "jquery";
import "/public/js/select2.js";
import "/public/js/globals.js";
// import "/public/js/switch-menu.js";

// * -----------------------------------------------------------------------------------------------------

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
        <div id="portals"></div>
      </body>
    </html>
  ); //end return
} //end function
