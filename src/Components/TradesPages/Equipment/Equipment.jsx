import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { BlueRows } from "../../CommonComponents/BlueRows";

import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";

export const Equipment = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* <CommonHeading heading="" /> */}
      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            Equipment Estimating Services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        serves as your reliable resource for comprehensive equipment estimating
        services. We aim to provide you with accurate and up-to-date information
        to assist you in your project planning and financial management needs.
        Our equipment estimation information covers a wide range of industries
        and sectors, offering critical insights into varying types of equipment
        essential for successful project finalization.Contact us 
        <a
          className=" text-decoration-none"
          href="mailto:Davidson@bidclerkestimating.com"
        >
          {" "}
          <span style={{ color: "#028EC9" }}>
            {" "}
            via Davidson@bidclerkestimating.com{" "}
          </span>
        </a>
         or{" "}
        <a className=" text-decoration-none" href="tel:+1 917 300 1079">
          <span style={{ color: "#028EC9" }}>  +1 917 300 1079.</span>
        </a>
      </p>
    </div>
  );

  const text4 = (
    <div className=" p-4">
      <CommonHeading heading="Manufacturing And Industrial Equipment" />
      <p className=" paragrapg">
        <b>Machinery and Production Equipment</b> <br />
        CNC milling machines, lathes, presses, and industrial equipment.
        Expenses for acquiring machinery, operating costs, and upkeep. <br />{" "}
        <br />
        <b>Material Handling Equipment</b> <br />
        Pallet trucks, belts, mechanized transporters. Projections for apparatus
        expenses, weight limits, and personnel for utilization and upkeep.
      </p>
    </div>
  );

  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/EQHTHI.png")} />
      <div className=" container-md">
        <CommonHeading heading="Construction Equipment" />
        <div className=" row w-100 m-0 justify-content-center">
          <div className=" col-md-4 col-sm-6 col-12 justify-content-center align-items-center">
            {" "}
            <div className=" text-light div1 d-flex flex-column justify-content-evenly">
              {" "}
              <h6>Cranes and Lifting Equipment</h6>{" "}
              <p>
                Types of cranes: tower, mobile, overhead. Costs depend on load
                capacity, installation needs, and safety measures.
              </p>
            </div>{" "}
          </div>
          <div className=" col-md-4 col-sm-6 col-12 justify-content-center align-items-center">
            {" "}
            <div className=" text-light div2 d-flex flex-column justify-content-evenly">
              {" "}
              <h6>Earthmoving Machinery</h6>{" "}
              <p>
                Rent or buy costs, energy use, and maintenance for diggers,
                dozers, loaders, and levelers.
              </p>
            </div>{" "}
          </div>
          <div className=" col-md-4 col-sm-6 col-12 justify-content-center align-items-center">
            {" "}
            <div className=" text-light div3 d-flex flex-column justify-content-evenly">
              {" "}
              <h6>Concrete and Paving Equipment</h6>{" "}
              <p>
                Costs for using cement mixers, paving machines, and concrete
                pumps. Includes equipment rental, tools, and labor hours.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
      <Banner />
      <div className=" container-md mt-4">
        <HalfTextHalfOffComponent text={text4} />
      </div>
      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
