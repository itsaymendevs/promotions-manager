import React from "react";

export default function AddTagModal({
  tagInputs,
  handleAddTagInputChange,
  handleClose,
  handleAddTagForm = null,
}) {
  return (
    <div>
      <div
        className="modal fade modal--box show"
        role="dialog"
        tabIndex="-1"
        id="modal--add-tag"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <form className="modal-content" onSubmit={handleAddTagForm}>
            <div className="modal-header">
              <h4 className="modal-title fw-bold">New Tag</h4>
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
                      value={tagInputs.name}
                      onChange={handleAddTagInputChange}
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
                        value={tagInputs.localization}
                        onChange={handleAddTagInputChange}
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
                        value={tagInputs.branch}
                        onChange={handleAddTagInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="">Branch 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Tag</label>
                    <div className="select--single-wrapper">
                      <select
                        className="form--select2 modal--select"
                        name="tag"
                        value={tagInputs.tag}
                        onChange={handleAddTagInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="">Tag 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Rank</label>
                    <div className="select--single-wrapper">
                      <select
                        className="form--select2 modal--select"
                        name="rank"
                        value={tagInputs.rank}
                        onChange={handleAddTagInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="">Rank 1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Type</label>
                    <div className="select--single-wrapper">
                      <select
                        className="form--select2 modal--select"
                        name="type"
                        value={tagInputs.type}
                        onChange={handleAddTagInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="total visits">Total Visits</option>
                        <option value="total order">Total Order</option>
                        <option value="total spend">Total Spend</option>
                        <option value="average spend">Average Spend</option>
                        <option value="last visit">Last Visit</option>
                        <option value="order product">Order Product</option>
                        <option value="order combo">Order Combo</option>
                        <option value="order category">Order Category</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Times</label>
                    <input
                      type="number"
                      className="form--input me-1"
                      step="0.1"
                    />
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">
                      Range From / To
                    </label>
                    <div className="d-flex align-items-center justify-content-evenly">
                      <input
                        type="number"
                        className="form--input me-1"
                        step="0.1"
                        name="rangeFrom"
                        value={tagInputs.rangeFrom}
                        onChange={handleAddTagInputChange}
                      />
                      <input
                        type="number"
                        className="form--input ms-1"
                        step="0.1"
                        name="rangeTo"
                        value={tagInputs.rangeTo}
                        onChange={handleAddTagInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Reference</label>
                    <input
                      type="text"
                      className="form--input"
                      name="reference"
                      value={tagInputs.reference}
                      onChange={handleAddTagInputChange}
                    />
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Category</label>
                    <input
                      type="text"
                      className="form--input"
                      name="category"
                      value={tagInputs.category}
                      onChange={handleAddTagInputChange}
                    />
                  </div>
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">Recurring</label>
                    <div className="select--single-wrapper">
                      <select
                        className="form--select2 modal--select"
                        name="recurring"
                        value={tagInputs.recurring}
                        onChange={handleAddTagInputChange}
                      >
                        <option value="" className="d-none"></option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn--cardlink" onClick={handleClose}>
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
  );
} // end function
