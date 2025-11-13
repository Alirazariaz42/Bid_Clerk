import React from "react";

export const OurRange = () => {
  return (
    <div>
      <div className=" ourRangeContainer">
        <h4 className=" text-center">
          Our Range Of Construction Cost Estimating Services
        </h4>

        <div className=" row w-100 m-0 justify-content-center">
          <div className=" col-md-3 col-sm-6 col-12 d-flex align-items-center">
            <ul className=" text-capitalize ">
              <li>Cost estimates</li>
              <li>Material takeoffs</li>
              <li>Feasibility studies</li>
              <li>Bid evaluation</li>
              <li>Bid management</li>
            </ul>
          </div>

          <div className=" col-md-3 col-sm-6 col-12 d-flex align-items-center">
            <ul className=" text-capitalize">
              <li>CPM scheduling</li>
              <li>Project cost management</li>
              <li>Change order management</li>
              <li>Value engineering</li>
              <li>CAD drafting</li>
            </ul>
          </div>

          <div className=" col-md-3 col-sm-6 col-12 d-flex align-items-center">
            <ul className=" text-capitalize">
              <li>Consultation on bid filing</li>
              <li>New project leads</li>
              <li>Subcontractor marketing</li>
              <li>Litigation assistance</li>
            </ul>
          </div>

          <div className=" col-md-3 col-sm-6 col-12 d-flex align-items-center">
            <img src={require("../../Images/OurRangeImg.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
