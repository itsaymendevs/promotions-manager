"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

// * Components
import MainTitle from "/components/mainTitle.jsx";
import Input from "/components/input.jsx";
import Button from "/components/button.jsx";
import Sidebar from "/components/sidebar.jsx";
import OverviewCard from "/components/overviewCard.jsx";
import TagTable from "/components/auto-tag/tagTable.jsx";
import RankTable from "/components/auto-tag/rankTable.jsx";
import SMSTable from "/components/market-automation/smsTable.jsx";
import CodeTable from "/components/market-automation/codeTable.jsx";

// * Portals
import GlobalPortal from "/portals/globalPortal.jsx";
import AddSMSModal from "/components/market-automation/addSMSModal.jsx";
import EditSMSModal from "/components/market-automation/editSMSModal.jsx";
import AddCodeModal from "/components/market-automation/addCodeModal.jsx";
import EditCodeModal from "/components/market-automation/editCodeModal.jsx";

export default function MarketAutomation() {
  // TODO: initial States -----------------------------------------------------

  const initialSMSInputs = {
    name: "",
    desc: "",
    type: "",
    messageType: "",
    sendAfter: "",
    content: "",
  };

  const initialCodeInputs = {
    name: "",
    type: "",
    amount: "",
    desc: "",
  };

  // TODO: States -----------------------------------------------------
  const [activeBtn, setActiveBtn] = useState("#section--sms");

  // : SMS
  const [isAddSMSModalActive, setIsAddSMSModalActive] = useState(false);
  const [SMSInputs, setSMSInputs] = useState(initialSMSInputs);

  const [isEditSMSModalActive, setIsEditSMSModalActive] = useState(false);
  const [SMSEditInputs, setSMSEditInputs] = useState(initialSMSInputs);

  // : Code
  const [isAddCodeModalActive, setIsAddCodeModalActive] = useState(false);
  const [codeInputs, setCodeInputs] = useState(initialCodeInputs);

  const [isEditCodeModalActive, setIsEditCodeModalActive] = useState(false);
  const [codeEditInputs, setCodeEditInputs] = useState(initialCodeInputs);

  // TODO: Handlers -----------------------------------------------------

  function handleSwitchTabClick(sectionId) {
    console.log(sectionId);
    setActiveBtn(sectionId);
  } // end function

  // =================================

  // : SMS
  const handleAddSMSModal = () => {
    setIsAddSMSModalActive((oldState) => !oldState);
  }; // end handler

  const handleAddSMSInputChange = (event) => {
    console.log(event.target.name);
    setSMSInputs((oldState) => ({
      ...oldState,
      [event.target.name]:
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }; // end handler

  const handleEditSMSModal = (SMSId) => {
    // : get SMSData from Api
    console.log(SMSId);
    if (SMSId) {
      setSMSEditInputs((oldState) => ({
        ...oldState,
        name: "Free Juice",
      }));
    } // end if

    setIsEditSMSModalActive((oldState) => !oldState);
  }; // end handler

  const handleEditSMSInputChange = (event) => {
    setSMSEditInputs((oldState) => ({
      ...oldState,
      [event.target.name]:
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }; // end handler

  // =================================

  // : Code
  const handleAddCodeModal = () => {
    setIsAddCodeModalActive((oldState) => !oldState);
  }; // end handler

  const handleAddCodeInputChange = (event) => {
    setCodeInputs((oldState) => ({
      ...oldState,
      [event.target.name]:
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }; // end handler

  const handleEditCodeModal = (codeId) => {
    // : get userData from Api
    console.log(codeId);
    if (codeId) {
      setCodeEditInputs((oldState) => ({
        ...oldState,
        name: "Black Friday",
      }));
    } // end if

    setIsEditCodeModalActive((oldState) => !oldState);
  }; // end handler

  const handleEditCodeInputChange = (event) => {
    setCodeEditInputs((oldState) => ({
      ...oldState,
      [event.target.name]:
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }; // end handler

  // TODO: Render -----------------------------------------------------

  return (
    <div>
      {/* Portals */}

      {/* Add SMS */}
      {isAddSMSModalActive && (
        <GlobalPortal>
          <AddSMSModal
            handleClose={handleAddSMSModal}
            SMSInputs={SMSInputs}
            handleAddSMSInputChange={handleAddSMSInputChange}
          />
        </GlobalPortal>
      )}

      {/* Edit SMS */}
      {isEditSMSModalActive && (
        <GlobalPortal>
          <EditSMSModal
            handleClose={handleEditSMSModal}
            SMSEditInputs={SMSEditInputs}
            handleEditSMSInputChange={handleEditSMSInputChange}
          />
        </GlobalPortal>
      )}

      {/* Add Code */}
      {isAddCodeModalActive && (
        <GlobalPortal>
          <AddCodeModal
            handleClose={handleAddCodeModal}
            codeInputs={codeInputs}
            handleAddCodeInputChange={handleAddCodeInputChange}
          />
        </GlobalPortal>
      )}

      {/* Edit Code */}
      {isEditCodeModalActive && (
        <GlobalPortal>
          <EditCodeModal
            handleClose={handleEditCodeModal}
            codeEditInputs={codeEditInputs}
            handleEditCodeInputChange={handleEditCodeInputChange}
          />
        </GlobalPortal>
      )}

      {/* ==================================== */}

      <section className={`${styles.currentBackground} bg-cover`}>
        <div className="container">
          <div className="row min-vh-100 pt-5">
            {/* Sidebar Menu / left column */}
            <Sidebar
              submenuTitle="Market Automation"
              activeBtn={activeBtn}
              firstBtnText="Automated SMS"
              firstBtnIcon="fas fa-comment-alt"
              firstBtnTarget="#section--sms"
              secBtnText="Promotion Code"
              secBtnIcon="fas fa-barcode"
              secBtnTarget="#section--code"
              handleClick={handleSwitchTabClick}
            />

            {/* main section / right column */}
            <div className="col-9 border-start">
              {/* section 1: sms */}
              {activeBtn == "#section--sms" && (
                <section
                  id="section--sms"
                  className="d-block ms-2 mt-3"
                  data-group="1"
                >
                  {/* title / search / add button */}
                  <MainTitle text="Automated SMS" />

                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <input
                      type="text"
                      className="form--search"
                      placeholder="Search by name .."
                    />
                    <button
                      className="btn btn--regular py-2 d-flex align-items-center scale--13 rotate--36"
                      type="button"
                      onClick={handleAddSMSModal}
                    >
                      <i className="fas fa-plus me-2 text-white fs-13"></i>New
                      Campaign
                    </button>
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

                    <OverviewCard
                      counter="80"
                      icon="fas fa-box"
                      text="Orders"
                    />

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

                    {/* Table Content */}
                    <div className="col-12 mt-5 mb-4">
                      <SMSTable
                        tableData={[]}
                        handleEditSMSModal={handleEditSMSModal}
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* ================================ */}

              {/* section 2: codes */}

              {activeBtn == "#section--code" && (
                <section
                  id="section--code"
                  className="d-block ms-2 mt-3"
                  data-group="1"
                >
                  {/* title / search / add button */}
                  <MainTitle text="Promotion Codes" />

                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <input
                      type="text"
                      className="form--search"
                      placeholder="Search by name .."
                    />
                    <button
                      className="btn btn--regular py-2 d-flex align-items-center scale--13 rotate--36"
                      type="button"
                      onClick={handleAddCodeModal}
                    >
                      <i className="fas fa-plus me-2 text-white fs-13"></i>New
                      Code
                    </button>
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

                    <OverviewCard
                      counter="80"
                      icon="fas fa-box"
                      text="Orders"
                    />

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

                    {/* Table Content */}
                    <div className="col-12 mt-5 mb-4">
                      <CodeTable
                        tableData={[]}
                        handleEditCodeModal={handleEditCodeModal}
                      />
                    </div>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} // end function
