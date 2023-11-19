import React from "react";

export default function CodeTable({ tableData, handleEditCodeModal }) {
  return (
    <div className="col-12 mt-5 mb-4">
      <div className="table-responsive table--wrapper">
        <table className="table table-hover table-borderless">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Type</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Black Friday</td>
              <td>
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    id="switch--4"
                    className="form-check-input table--switch"
                  />
                </div>
              </td>
              <td>Percentage</td>
              <td>15%</td>
              <td>
                <button
                  className="btn btn--action me-4"
                  type="button"
                  onClick={handleEditCodeModal}
                >
                  <i className="fas fa-edit text-muted"></i>
                </button>
                <button className="btn btn--action" type="button">
                  <i className="fas fa-trash text-danger"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ); // end return
} // end function
