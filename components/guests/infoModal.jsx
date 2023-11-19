import React from "react";

export default function InfoModal({
  name,
  phone,
  birthdate,
  gender,
  handleClose,
}) {
  return (
    <div
      className="modal fade modal--box show"
      role="dialog"
      tabIndex="-1"
      id="modal--info"
      aria-modal="true"
      style={{ display: "block" }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title fw-bold">Guest Information</h4>
            <button
              type="button"
              className="btn-close"
              onClick={() => handleClose(0)}
            ></button>
          </div>
          <div className="modal-body">
            <p className="d-flex align-items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                className="me-2 fill--theme"
              >
                <path
                  d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
                  fill="currentColor"
                ></path>
              </svg>
              {name}
            </p>
            <div className="mb-5">
              <div className="row mx-0">
                <div className="col-4 mb-4">
                  <label className="form-label form--label">Name</label>
                  <input
                    type="text"
                    className="form--input"
                    readOnly=""
                    value={name}
                    onChange={() => console.log("")}
                  />
                </div>
                <div className="col-4 mb-4">
                  <label className="form-label form--label">Phone</label>
                  <input
                    type="text"
                    className="form--input"
                    readOnly=""
                    value={phone}
                    onChange={() => console.log("")}
                  />
                </div>
                <div className="col-4 mb-4">
                  <label className="form-label form--label">Birthdate</label>
                  <input
                    type="text"
                    className="form--input"
                    readOnly=""
                    value={birthdate}
                    onChange={() => console.log("")}
                  />
                </div>
                <div className="col-4 mb-4">
                  <label className="form-label form--label">Gender</label>
                  <input
                    type="text"
                    className="form--input"
                    readOnly=""
                    value={gender}
                    onChange={() => console.log("")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn--cardlink"
              type="button"
              onClick={() => handleClose(0)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  ); // end return
} // end function
