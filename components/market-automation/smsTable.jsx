import React from "react";

export default function SMSTable({ tableData, handleEditSMSModal }) {
  return (
    <div className="col-12 mt-5 mb-4">
      <div className="table-responsive table--wrapper">
        <table className="table table-hover table-borderless">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Recipients</th>
              <th>Customers</th>
              <th>Revenue</th>
              <th>Orders</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Free Juice</td>
              <td>
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    id="switch--1"
                    className="form-check-input table--switch"
                  />
                </div>
              </td>
              <td>13</td>
              <td>5</td>
              <td>1,200</td>
              <td>8</td>
              <td>
                <button
                  className="btn btn--action me-4"
                  type="button"
                  onClick={handleEditSMSModal}
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
