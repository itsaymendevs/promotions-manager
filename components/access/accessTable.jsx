import React from "react";

export default function AccessTable({ tableData, handleEditModal }) {
  return (
    <div className="table-responsive table--wrapper">
      <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Level Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sami Islam Abdeen</td>
            <td>@samisam</td>
            <td>sami-islam@gmail.com</td>
            <td>Manager</td>
            <td>
              <button
                className="btn btn--action me-4"
                type="button"
                onClick={() => handleEditModal(1)}
              >
                <i className="fas fa-edit text-muted"></i>
              </button>
              <button
                className="btn btn--action"
                type="button"
                data-bs-target="#modal--info"
                data-bs-toggle="modal"
              >
                <i className="fas fa-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ); // end return
} // end function
