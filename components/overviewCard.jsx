import React from "react";

export default function OverviewCard({
  text,
  counter,
  icon = "",
  lastInstance = false,
  extra = null,
}) {
  return (
    <div className={`col-3 dashboard--card-col ${lastInstance && "pe-0"}`}>
      <div className="dashboard--overview-card scale--13">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-1 d-block fw-bold text--theme">
            {counter}
            {extra && extra}
          </span>
          <i className={`${icon} fs-1 text--theme`}></i>
        </div>
        <h6 className="text-secondary ls-07 mb-0">{text}</h6>
      </div>
    </div>
  ); // end return
} //end function
