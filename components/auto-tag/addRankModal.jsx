import React from "react";

export default function AddRankModal({
  rankInputs,
  handleAddRankInputChange,
  handleClose,
  handleAddRankForm = null,
}) {
  return (
    <div>
      <div
        className="modal fade modal--box show"
        role="dialog"
        tabIndex="-1"
        id="modal--add-rank"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <form className="modal-content" onSubmit={handleAddRankForm}>
            <div className="modal-header">
              <h4 className="modal-title fw-bold">New Rank</h4>
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
                Please fill the fields below
              </p>

              {/* ========================= */}

              <div className="mb-5">
                <div className="row mx-0">
                  <div className="col-8 mb-4">
                    <label className="form-label form--label">Name</label>
                    <input
                      type="text"
                      className="form--input"
                      name="name"
                      value={rankInputs.name}
                      onChange={handleAddRankInputChange}
                    />
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">
                      Localization
                    </label>
                    <div className="select--single-wrapper">
                      <select
                        className="form--select2 modal--select"
                        name="localization"
                        value={rankInputs.localization}
                        onChange={handleAddRankInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="group">Group</option>
                        <option value="local">Local</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Branch</label>
                    <div className="select--single-wrapper">
                      <select
                        className="form--select2 modal--select"
                        name="branch"
                        value={rankInputs.branch}
                        onChange={handleAddRankInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="">Branch 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Times</label>
                    <input
                      type="number"
                      className="form--input me-1"
                      step="0.1"
                      name="times"
                      value={rankInputs.times}
                      onChange={handleAddRankInputChange}
                    />
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ); // end return
} // end function
