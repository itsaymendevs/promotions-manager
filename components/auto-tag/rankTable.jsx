import React from "react";

export default function RankTable({ tableData, handleEditRankModal }) {
  return (
    <div className="table-responsive table--wrapper">
      <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th>Name</th>
            <th>Localization</th>
            <th>Branch</th>
            <th>Times</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rank Name</td>
            <td>Local</td>
            <td>Branch Name</td>
            <td>150</td>
            <td>
              <button
                className="btn btn--action me-4"
                type="button"
                onClick={handleEditRankModal}
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
  ); // end return
} // end function
