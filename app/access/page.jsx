"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

// * components
import SidebarThin from "/components/sidebarThin.jsx";
import MainTitle from "/components/mainTitle.jsx";
import AccessTable from "/components/access/accessTable.jsx";
import OverviewCard from "/components/overviewCard.jsx";

// * Portals
import GlobalPortal from "/portals/globalPortal.jsx";
import AddModal from "/components/access/addModal.jsx";
import EditModal from "/components/access/editModal.jsx";

export default function Access() {
  // TODO: initial States -----------------------------------------------------

  const initialUserInputs = {
    name: "",
    username: "",
    email: "",
    accessLevel: "",
    generalUpdatePermission: false,
    autoTagCreatePermission: false,
    autoTagUpdatePermission: false,
    emailCampaignCreatePermission: false,
    emailCampaignUpdatePermission: false,
    SMSCampaignCreatePermission: false,
    SMSCampaignUpdatePermission: false,
    codeCampaignCreatePermission: false,
    codeCampaignUpdatePermission: false,
    reportsCreatePermission: false,
    guestsCreatePermission: false,
    guestsUpdatePermission: false,
    accessCreatePermission: false,
    accessUpdatePermission: false,
  };

  // TODO: States -----------------------------------------------------
  const [isAddModalActive, setIsAddModalActive] = useState(false);
  const [userInputs, setUserInputs] = useState(initialUserInputs);

  const [isEditModalActive, setIsEditModalActive] = useState(false);
  const [userEditInputs, setUserEditInputs] = useState(initialUserInputs);

  // TODO: Handlers -----------------------------------------------------
  const handleAddModal = () => {
    setIsAddModalActive((oldState) => !oldState);
  }; // end handler

  const handleAddUserInputChange = (event) => {
    setUserInputs((oldState) => ({
      ...oldState,
      [event.target.name]:
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }; // end handler

  const handleEditModal = (userId) => {
    // : get userData from Api
    console.log(userId);
    if (userId) {
      setUserEditInputs((oldState) => ({
        ...oldState,
        name: "Sami Islam Abdeen",
        username: "@samisam",
        email: "sami-islam@gmail.com",
        accessLevel: "manager",
      }));
    } // end if

    setIsEditModalActive((oldState) => !oldState);
  }; // end handler

  const handleEditUserInputChange = (event) => {
    setUserEditInputs((oldState) => ({
      ...oldState,
      [event.target.name]:
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }; // end handler

  // TODO: Render -----------------------------------------------------

  return (
    <>
      {/* Portals */}
      {isAddModalActive && (
        <GlobalPortal>
          <AddModal
            handleClose={handleAddModal}
            userInputs={userInputs}
            handleAddUserInputChange={handleAddUserInputChange}
          />
        </GlobalPortal>
      )}

      {/* Portals */}
      {isEditModalActive && (
        <GlobalPortal>
          <EditModal
            handleClose={handleEditModal}
            userEditInputs={userEditInputs}
            handleEditUserInputChange={handleEditUserInputChange}
          />
        </GlobalPortal>
      )}

      {/* ==================================== */}

      <section className={`${styles.currentBackground} bg-cover`}>
        <div className="container">
          <div className="row min-vh-100 pt-5">
            {/* sidebar thin / left column */}
            <SidebarThin />

            {/* right column */}
            <div className="col-11 border-start">
              <section className="d-block ms-2 mt-3">
                {/* title / search / add button */}
                <MainTitle text="Access Users" />

                <div className="d-flex justify-content-between align-items-center mb-5">
                  <input
                    type="text"
                    className="form--search"
                    placeholder="Search by name .."
                  />
                  <button
                    className="btn btn--regular py-2 px-4 d-flex align-items-center scale--13 rotate--36"
                    type="button"
                    onClick={handleAddModal}
                  >
                    <i className="fas fa-plus me-2 text-white fs-13"></i>New
                    User
                  </button>
                </div>

                {/* overview cards */}
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
                    <AccessTable
                      tableData={[]}
                      handleEditModal={handleEditModal}
                    />
                  </div>
                </div>
              </section>
              {/* end section 2 / right column */}
            </div>
          </div>
        </div>
      </section>
    </>
  ); // end return
} // end function
