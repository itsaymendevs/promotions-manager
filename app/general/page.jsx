import React from "react";
import styles from "./page.module.css";

// * Images
import defaultFileImage from "/public/img/logo/logo.jpg";

// * Components
import SidebarThin from "/components/sidebarThin.jsx";
import MainTitle from "/components/mainTitle.jsx";
import InputFile from "/components/general/inputFile.jsx";
import Input from "/components/input.jsx";
import Button from "/components/button.jsx";

export default function General() {
  return (
    <section className={`${styles.currentBackground} bg-cover`}>
      <div className="container">
        <div className="row min-vh-100 pt-5">
          {/* Sidebar - Thin / Left Column*/}
          <SidebarThin />

          <div className="col-11 border-start">
            <section className="d-block ms-2 mt-3">
              <MainTitle text={"General Settings"} />

              {/* Form - Update */}
              <form className="d-block content--wrapper">
                <div className="row align-items-end mx-0">
                  {/* Input - File */}
                  <div className="col-4 text-center mb-4">
                    <InputFile name="profile" currentImg={defaultFileImage} />
                  </div>

                  {/* Inputs */}
                  <div className="col-4 mb-4">
                    <Input
                      name="name"
                      type="text"
                      required={true}
                      text="Name"
                    />
                  </div>

                  <div className="col-4 mb-4">
                    <Input
                      name="name_ar"
                      type="text"
                      required={true}
                      text="Name - Arabic"
                    />
                  </div>

                  <div className="col-4 mb-4">
                    <Input
                      name="manager_name"
                      type="text"
                      required={true}
                      text="Manager Name"
                    />
                  </div>

                  <div className="col-4 mb-4">
                    <Input
                      name="manager_phone"
                      type="text"
                      required={true}
                      text="Manager Phone"
                    />
                  </div>

                  <div className="col-4 mb-4">
                    <Input
                      name="email"
                      type="email"
                      required={true}
                      text="Email"
                    />
                  </div>

                  <div className="col-8 mb-4">
                    <Input
                      name="location"
                      type="text"
                      required={true}
                      text="Location"
                    />
                  </div>

                  <div className="col-4 mb-4">
                    <Input
                      name="password"
                      type="password"
                      required={false}
                      text="Password"
                    />
                  </div>

                  <div className="col-12 text-end my-2">
                    <Button
                      classes="btn btn-success rounded-1 py-2 px-4"
                      type="submit"
                      text="Save Information"
                    />
                  </div>
                </div>
              </form>
              {/* end Form - Update */}
            </section>
          </div>
          {/* end Right Column */}
        </div>
      </div>
    </section>
  ); // end return
} // end function
