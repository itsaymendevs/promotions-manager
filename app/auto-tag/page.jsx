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

// * Portals
import GlobalPortal from "/portals/globalPortal.jsx";
import AddTagModal from "/components/auto-tag/addTagModal.jsx";
import EditTagModal from "/components/auto-tag/editTagModal.jsx";
import AddRankModal from "/components/auto-tag/addRankModal.jsx";
import EditRankModal from "/components/auto-tag/editRankModal.jsx";

export default function AutoTag() {
  // TODO: initial States -----------------------------------------------------

  const initialTagInputs = {
    name: "",
    localization: "",
    branch: "",
    tag: "",
    rank: "",
    type: "",
    times: "",
    rangeFrom: "",
    rangeTo: "",
    reference: "",
    category: "",
    recurring: "",
  };

  const initialRankInputs = {
    name: "",
    localization: "",
    branch: "",
    times: "",
  };

  // TODO: States -----------------------------------------------------

  const [activeBtn, setActiveBtn] = useState("#section--tags");

  // : Tag
  const [isAddTagModalActive, setIsAddTagModalActive] = useState(false);
  const [tagInputs, setTagInputs] = useState(initialTagInputs);

  const [isEditTagModalActive, setIsEditTagModalActive] = useState(false);
  const [tagEditInputs, setTagEditInputs] = useState(initialTagInputs);

  // : Rank
  const [isAddRankModalActive, setIsAddRankModalActive] = useState(false);
  const [rankInputs, setRankInputs] = useState(initialRankInputs);

  const [isEditRankModalActive, setIsEditRankModalActive] = useState(false);
  const [rankEditInputs, setRankEditInputs] = useState(initialRankInputs);

  // TODO: Handlers -----------------------------------------------------

  // : switch menu
  function handleSwitchTabClick(sectionId) {
    console.log(sectionId);
    setActiveBtn(sectionId);
  } // end function

  // =================================

  // : Tags
  const handleAddTagModal = () => {
    setIsAddTagModalActive((oldState) => !oldState);
  }; // end handler

  const handleAddTagInputChange = (event) => {
    console.log(event.target.name);
    setTagInputs((oldState) => ({
      ...oldState,
      [event.target.name]:
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }; // end handler

  const handleEditTagModal = (tagId) => {
    // : get tagData from Api
    console.log(tagId);
    if (tagId) {
      setTagEditInputs((oldState) => ({
        ...oldState,
        name: "Market Tag",
      }));
    } // end if

    setIsEditTagModalActive((oldState) => !oldState);
  }; // end handler

  const handleEditTagInputChange = (event) => {
    setTagEditInputs((oldState) => ({
      ...oldState,
      [event.target.name]:
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }; // end handler

  // =================================

  // : Ranks
  const handleAddRankModal = () => {
    setIsAddRankModalActive((oldState) => !oldState);
  }; // end handler

  const handleAddRankInputChange = (event) => {
    setRankInputs((oldState) => ({
      ...oldState,
      [event.target.name]:
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }; // end handler

  const handleEditRankModal = (rankId) => {
    // : get userData from Api
    console.log(rankId);
    if (rankId) {
      setRankEditInputs((oldState) => ({
        ...oldState,
        name: "Rank Name",
      }));
    } // end if

    setIsEditRankModalActive((oldState) => !oldState);
  }; // end handler

  const handleEditRankInputChange = (event) => {
    setRankEditInputs((oldState) => ({
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

      {/* Add Tag */}
      {isAddTagModalActive && (
        <GlobalPortal>
          <AddTagModal
            handleClose={handleAddTagModal}
            tagInputs={tagInputs}
            handleAddTagInputChange={handleAddTagInputChange}
          />
        </GlobalPortal>
      )}

      {/* Edit Tag */}
      {isEditTagModalActive && (
        <GlobalPortal>
          <EditTagModal
            handleClose={handleEditTagModal}
            tagEditInputs={tagEditInputs}
            handleEditTagInputChange={handleEditTagInputChange}
          />
        </GlobalPortal>
      )}

      {/* Add Rank */}
      {isAddRankModalActive && (
        <GlobalPortal>
          <AddRankModal
            handleClose={handleAddRankModal}
            rankInputs={rankInputs}
            handleAddRankInputChange={handleAddRankInputChange}
          />
        </GlobalPortal>
      )}

      {/* Edit Rank */}
      {isEditRankModalActive && (
        <GlobalPortal>
          <EditRankModal
            handleClose={handleEditRankModal}
            rankEditInputs={rankEditInputs}
            handleEditRankInputChange={handleEditRankInputChange}
          />
        </GlobalPortal>
      )}

      {/* ==================================== */}

      <section className={`${styles.currentBackground} bg-cover`}>
        <div className="container">
          <div className="row min-vh-100 pt-5">
            {/* Sidebar Menu / left column */}
            <Sidebar
              submenuTitle="Auto-Tags"
              activeBtn={activeBtn}
              firstBtnText="Automated Tags"
              firstBtnIcon="fas fa-tags"
              firstBtnTarget="#section--tags"
              secBtnText="Ranks"
              secBtnIcon="fas fa-barcode"
              secBtnTarget="#section--ranks"
              handleClick={handleSwitchTabClick}
            />

            {/* main section / right column */}
            <div className="col-9 border-start">
              {/* section 1: tags */}
              {activeBtn == "#section--tags" && (
                <section
                  id="section--tags"
                  className="d-block ms-2 mt-3"
                  data-group="1"
                >
                  {/* title / search / add button */}
                  <MainTitle text="Automated Tags" />
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <input
                      type="text"
                      className="form--search"
                      placeholder="Search by name .."
                    />
                    <button
                      className="btn btn--regular py-2 px-4 d-flex align-items-center scale--13 rotate--36"
                      type="button"
                      onClick={handleAddTagModal}
                    >
                      <i className="fas fa-plus me-2 text-white fs-13"></i>New
                      Tag
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
                      <TagTable
                        tableData={[]}
                        handleEditTagModal={handleEditTagModal}
                      />
                    </div>
                  </div>
                </section>
              )}

              {/* ================================ */}

              {/* section 2: ranks */}

              {activeBtn == "#section--ranks" && (
                <section
                  id="section--ranks"
                  className="d-block ms-2 mt-3"
                  data-group="1"
                >
                  {/* title / search / add button */}
                  <MainTitle text="Ranks" />

                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <input
                      type="text"
                      className="form--search"
                      placeholder="Search by name .."
                    />
                    <button
                      className="btn btn--regular py-2 px-4 d-flex align-items-center scale--13 rotate--36"
                      type="button"
                      onClick={handleAddRankModal}
                    >
                      <i className="fas fa-plus me-2 text-white fs-13"></i>New
                      Rank
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
                    />

                    {/* Table Content */}
                    <div className="col-12 mt-5 mb-4">
                      <RankTable
                        tableData={[]}
                        handleEditRankModal={handleEditRankModal}
                      />
                    </div>
                  </div>
                </section>
              )}
              {/* end section / right column */}
            </div>
          </div>
        </div>
      </section>
    </>
  ); // end return
} // end function
