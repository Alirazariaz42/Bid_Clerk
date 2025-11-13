import React from "react";

export const OurRange2 = () => {
  return (
    <div>
      {" "}
      <div>
        <div className=" ourRangeContainer">
          <h4 className=" text-center">
            We Provide Construction Takeoff Services To Our Clients In All CSI
            Divisions:
          </h4>

          <div className=" row w-100 m-0 justify-content-center">
            <div className=" col-md-3 col-sm-6 col-12 d-flex align-items-center">
              <ul className=" text-capitalize ">
                <li>Sitework Takeoff</li>
                <li>Masonry takeoffs</li>
                <li>Concrete takeoffs</li>
                <li>Drywall takeoffs</li>
                <li>Painting takeoffs</li>
              </ul>
            </div>

            <div className=" col-md-3 col-sm-6 col-12 d-flex align-items-center">
              <ul className=" text-capitalize">
                <li>Insulation Takeoff</li>
                <li>Roofing Takeoff</li>
                <li> Lumber Takeoff</li>
                <li>Millwork Takeoff</li>
                <li>Cabinet Takeoff</li>
              </ul>
            </div>

            <div className=" col-md-3 col-sm-6 col-12 d-flex align-items-center">
              <ul className=" text-capitalize">
                <li> Mechanical Takeoff</li>
                <li>HVAC Takeoff</li>
                <li>Plumbing Takeoff</li>
                <li>Electrical Takeoff</li>
              </ul>
            </div>

            <div className=" col-md-3 col-sm-6 col-12 d-flex align-items-center">
              <img src={require("../../Images/OurRangeImg.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
