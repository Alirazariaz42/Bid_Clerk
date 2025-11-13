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

export const HVAC = () => {
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
            HVAC Estimating Services
            </span>
          </h1>

      <p className=" p-3 paragrapg">
        HVAC contractors trust{" "}
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        BidClerk Estimating for expert estimating services. Our MEP estimators
        excel in HVAC, calculating materials like ducts, hangers, and fixtures
        with precision. We provide detailed plans and 24/7 support for accurate
        bidding and planning. Contact us&nbsp;
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

  const row1 = (
    <>
      <ul>
        <li> Ductwork </li>
        <li> Condensing units </li>
        <li> Casings </li>
      </ul>
    </>
  );

  const row2 = (
    <>
      <ul>
        <li> Duct insulation </li>
        <li> Exhaust Fan </li>
        <li> Pumps </li>
      </ul>
    </>
  );

  const row3 = (
    <>
      <ul>
        <li> Piping </li>
        <li> Hangers and Supports </li>
        <li> Building Automation and control </li>
      </ul>
    </>
  );

  const text4 = (
    <div className=" p-4">
      <CommonHeading heading="OUR DUCTWORK TAKEOFF SERVICES" />
      <p className=" paragrapg">
        We are giving the services of Duct estimation and takeoff services. We
        are giving assistance to the duct fabrication contractors and sheet
        metal contractors.So , if you are one of them you can contact us.
      </p>
      {/* <br /> */}
      {/* <br /> */}
      <CommonHeading heading="WHY aRE WE SUITABLE FOR THE CONTRACTORS?" />
      <p className=" paragrapg">
        We are suitable for the contractors because we can give the right HVAC
        estimates. Most of the time, the contractor can not estimate the exact
        cost of the HVAC. Hence, no worries at all, we are here to help you in
        the aforementioned context.
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/HVACHTHI.png")} />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <CommonHeading heading="OUR HVAC ASSISTANCE" />
        <p className=" paragrapg">
          At{" "}
          <span style={{ color: "#076e9a", fontWeight: "600" }}>
            BidClerk Estimating
          </span>
          , our expert team ensures precise quotes for HVAC contractors. With
          extensive experience, we accurately breakdown estimates for ducts,
          fittings, and fixtures. We use leading software like BlueBeam,
          Planswift, On Center. Contact us for reliable estimates tailored to
          your needs.
        </p>
      </div>
      <BlueRows
        row1={row1}
        row2={row2}
        row3={row3}
        heading="The Items We Quantify In HVAC Estimating And Takeoffs:"
      />
      <div className=" container-md mt-5">
        <HalfTextHalfOffComponent text={text4} />
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
