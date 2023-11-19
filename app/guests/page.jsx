"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

// * Components
import SidebarThin from "/components/sidebarThin.jsx";
import MainTitle from "/components/mainTitle.jsx";
import Input from "/components/input.jsx";
import Button from "/components/button.jsx";
import OverviewCard from "/components/overviewCard.jsx";
import TagTable from "/components/auto-tag/tagTable.jsx";
import GuestsTable from "/components/guests/guestsTable.jsx";

// * Portals
import GlobalPortal from "/portals/globalPortal.jsx";
import InfoModal from "/components/guests/infoModal.jsx";

export default function Guest() {
  // TODO: States -----------------------------------------------------
  const [isInfoModalActive, setIsInfoModalActive] = useState(false);

  // TODO: Handlers -----------------------------------------------------
  const handleInfoModal = (guestId) => {
    setIsInfoModalActive((oldState) => !oldState);
  };

  // TODO: Render -----------------------------------------------------
  return (
    <>
      {/* Portals */}
      {isInfoModalActive && (
        <GlobalPortal>
          <InfoModal
            name="Sami Islam Abdeen"
            phone="+966 50 127 845"
            birthdate="12 / 5 / 1998"
            gender="Male"
            handleClose={handleInfoModal}
          />
        </GlobalPortal>
      )}

      {/* ==================================== */}

      {/* Page */}
      <section className={`${styles.currentBackground} bg-cover`}>
        <div className="container">
          <div className="row min-vh-100 pt-5">
            {/* Sidebar - Thin / Left Column*/}
            <SidebarThin />

            {/* content / right column */}
            <div className="col-11 border-start">
              <section className="d-block ms-2 mt-3">
                {/* Title / Search */}
                <MainTitle text={"Guests"} />
                <div className="d-flex justify-content-center align-items-center mb-5">
                  <input
                    type="text"
                    className="form--search text-center"
                    placeholder="Search by name .."
                    style={{ maxWidth: "400px" }}
                  />
                </div>

                {/* overview content */}
                <div className="row g-0">
                  <OverviewCard
                    counter="52"
                    icon="fas fa-users"
                    text="Recipients"
                  />

                  <OverviewCard
                    counter="9"
                    icon="fas fa-user-tie"
                    text="Customers"
                  />

                  <OverviewCard counter="80" icon="fas fa-box" text="Orders" />

                  <OverviewCard
                    counter="11,270"
                    text="Revenue"
                    extra={
                      <span className="fw-bold text-success fs-13 ms-1">
                        (SAR)
                      </span>
                    }
                    lastInstance={true}
                  />

                  {/* table */}

                  {/* Table Content */}
                  <div className="col-12 mt-5 mb-4">
                    <GuestsTable
                      tableData={[]}
                      handleInfoModal={handleInfoModal}
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  ); // end return
} // end function
