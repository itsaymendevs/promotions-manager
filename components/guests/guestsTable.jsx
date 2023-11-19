"use client";
import React from "react";

export default function GuestsTable({ tableData, handleInfoModal }) {
  return (
    <div className="table-responsive table--wrapper">
      <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Birthdate</th>
            <th>Gender</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sami Islam Abdeen</td>
            <td>+966 50 127 845</td>
            <td>12-05-1993</td>
            <td>Male</td>
            <td>
              <button
                className="btn btn--action"
                type="button"
                onClick={() => handleInfoModal(1)}
              >
                <i className="fas fa-info-circle fs-5 text-success"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ); // end return
} // end function
