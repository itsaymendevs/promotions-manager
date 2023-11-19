import React from "react";

export default function EditModal({
  userEditInputs,
  handleEditUserInputChange,
  handleClose,
  handleEditUserForm = null,
}) {
  return (
    <div>
      <div
        className="modal fade modal--box show"
        role="dialog"
        tabIndex="-1"
        id="modal--add-user"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div
          className="modal-dialog modal-xl modal-dialog-centered"
          role="document"
        >
          <form className="modal-content" onSubmit={handleEditUserForm}>
            <div className="modal-header">
              <h4 className="modal-title fw-bold">Edit User</h4>
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
                {userEditInputs.name}
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
                      value={userEditInputs.name}
                      onChange={handleEditUserInputChange}
                    />
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Username</label>
                    <input
                      type="text"
                      className="form--input"
                      name="username"
                      value={userEditInputs.username}
                      onChange={handleEditUserInputChange}
                    />
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Email</label>
                    <input
                      type="email"
                      className="form--input"
                      name="email"
                      value={userEditInputs.email}
                      onChange={handleEditUserInputChange}
                    />
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">
                      Access Level
                    </label>
                    <div className="select--single-wrapper">
                      <select
                        className="form--select2 modal--select"
                        name="accessLevel"
                        value={userEditInputs.accessLevel}
                        onChange={handleEditUserInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="manager">Manager</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 mb-3"></div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--1"
                      >
                        General<small className="switch--caption">update</small>
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--1"
                          className="form-check-input table--switch"
                          name="generalUpdatePermission"
                          checked={userEditInputs.generalUpdatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--2"
                      >
                        Auto-tag
                        <small className="switch--caption">create</small>
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--2"
                          className="form-check-input table--switch"
                          name="autoTagCreatePermission"
                          checked={userEditInputs.autoTagCreatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--3"
                      >
                        Auto-tag
                        <small className="switch--caption">update</small>
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--3"
                          className="form-check-input table--switch"
                          name="autoTagUpdatePermission"
                          checked={userEditInputs.autoTagUpdatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--4"
                      >
                        Email Campaign
                        <small className="switch--caption">create</small>
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--4"
                          className="form-check-input table--switch"
                          name="emailCampaignCreatePermission"
                          checked={userEditInputs.emailCampaignCreatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--5"
                      >
                        Email Campaign
                        <small className="switch--caption">update</small>
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--5"
                          className="form-check-input table--switch"
                          name="emailCampaignUpdatePermission"
                          checked={userEditInputs.emailCampaignUpdatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--6"
                      >
                        SMS Campaign
                        <small className="switch--caption">create</small>
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--6"
                          className="form-check-input table--switch"
                          name="SMSCampaignCreatePermission"
                          checked={userEditInputs.SMSCampaignCreatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--7"
                      >
                        <strong>SMS Campaign</strong>
                        <small className="switch--caption">update</small>
                        <br />
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--7"
                          className="form-check-input table--switch"
                          name="SMSCampaignUpdatePermission"
                          checked={userEditInputs.SMSCampaignUpdatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--14"
                      >
                        <strong>Code Campaign</strong>
                        <small className="switch--caption">create</small>
                        <br />
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--14"
                          className="form-check-input table--switch"
                          name="codeCampaignCreatePermission"
                          checked={userEditInputs.CodeCampaignCreatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--8"
                      >
                        <strong>Code Campaign</strong>
                        <small className="switch--caption">update</small>
                        <br />
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--8"
                          className="form-check-input table--switch"
                          name="codeCampaignUpdatePermission"
                          checked={userEditInputs.CodeCampaignUpdatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--9"
                      >
                        <strong>Repots</strong>
                        <small className="switch--caption">create</small>
                        <br />
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--9"
                          className="form-check-input table--switch"
                          name="reportsCreatePermission"
                          checked={userEditInputs.reportsCreatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--10"
                      >
                        <strong>Guests</strong>
                        <small className="switch--caption">create</small>
                        <br />
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--10"
                          className="form-check-input table--switch"
                          name="guestsCreatePermission"
                          checked={userEditInputs.guestsCreatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--11"
                      >
                        <strong>Guests</strong>
                        <small className="switch--caption">update</small>
                        <br />
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--11"
                          className="form-check-input table--switch"
                          name="guestsUpdatePermission"
                          checked={userEditInputs.guestsUpdatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--12"
                      >
                        <strong>Access</strong>
                        <small className="switch--caption">create</small>
                        <br />
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--12"
                          className="form-check-input table--switch"
                          name="accessCreatePermission"
                          checked={userEditInputs.accessCreatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label
                        className="form-label form--label mb-0"
                        htmlFor="switch--13"
                      >
                        <strong>Access</strong>
                        <small className="switch--caption">update</small>
                        <br />
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          id="switch--13"
                          className="form-check-input table--switch"
                          name="accessUpdatePermission"
                          checked={userEditInputs.accessUpdatePermission}
                          onChange={handleEditUserInputChange}
                        />
                      </div>
                    </div>
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
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ); // end return
} //end function
