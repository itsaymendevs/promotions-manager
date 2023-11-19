import React from "react";

export default function EditSMSModal({
  SMSEditInputs,
  handleEditSMSInputChange,
  handleClose,
  handleEditSMSForm = null,
}) {
  return (
    <div>
      <div
        className="modal fade modal--box show"
        role="dialog"
        tabIndex="-1"
        id="modal--add-campaign"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <form className="modal-content" onSubmit={handleEditSMSForm}>
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Edit Campaign</h4>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
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
                Free Juice
              </p>

              {/* ========================= */}

              <div className="mb-5">
                <div className="row mx-0">
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Name</label>
                    <input
                      type="text"
                      className="form--input"
                      name="name"
                      value={SMSEditInputs.name}
                      onChange={handleEditSMSInputChange}
                    />
                  </div>
                  <div className="col-8 mb-4">
                    <label className="form-label form--label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form--input"
                      name="desc"
                      value={SMSEditInputs.desc}
                      onChange={handleEditSMSInputChange}
                    />
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Type</label>
                    <div className="select--single-wrapper">
                      <select
                        className="form--select2 modal--select"
                        name="type"
                        value={SMSEditInputs.type}
                        onChange={handleEditSMSInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="one time">One-time</option>
                        <option value="automated">Automated</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">
                      Message-Type
                    </label>
                    <div className="select--single-wrapper">
                      <select
                        className="form--select2 modal--select"
                        name="messageType"
                        value={SMSEditInputs.messageType}
                        onChange={handleEditSMSInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="sms">SMS</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">
                      Send After
                      <small className="text-success ms-1 fs-11">
                        (in hours)
                      </small>
                    </label>
                    <input
                      type="number"
                      className="form--input"
                      min="1"
                      max="24"
                      step="1"
                      name="sendAfter"
                      value={SMSEditInputs.sendAfter}
                      onChange={handleEditSMSInputChange}
                    />
                  </div>
                  <div className="col-12 mb-4">
                    <label className="form-label form--label">
                      Content
                      <small className="text-success ms-1 fs-11">
                        (use 'name' / 'code' subsequently for guest name /
                        promotion code)
                      </small>
                    </label>
                    <textarea className="form--textarea"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn--cardlink"
                type="button"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="btn btn--outline-regular px-5 rounded-1"
                type="button"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} // end function
