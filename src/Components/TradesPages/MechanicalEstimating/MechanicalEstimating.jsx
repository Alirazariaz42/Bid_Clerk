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

export const MechanicalEstimating = () => {
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
          Mechanical Estimating Services
        </span>
      </h1>
      <p className=" p-3 paragrapg">
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        offers MEP estimating services for mechanical contractors. Our expert
        team provides precise estimates tailored to your project, covering HVAC,
        plumbing, refrigeration, and piping. With up-to-date data on costs, we
        ensure accuracy from small jobs to large-scale projects. Contact us for
        a free consultation at
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
  const text2 = (
    <div>
      <CommonHeading heading="Our Mechanical Piping Estimating Services " />
      <p className=" paragrapg">
        {" "}
        As the top MEP estimating team, we provide highly accurate estimates for
        mechanical piping contractors involved in welding and installation of
        piping systems. Why? Because we're committed to delivering the best
        Mechanical Estimate for you. Our reliable and thorough estimates help
        contractors with bidding, planning, procurement, and scheduling. With
        extensive experience in commercial and industrial piping projects, we
        have the knowledge and skills to conduct cost analysis for projects of
        any complexity.{" "}
      </p>
    </div>
  );
  const row1 = (
    <>
      <ul>
        <li> Bid estimates </li>
        <li> Reviews </li>
      </ul>
    </>
  );

  const row2 = (
    <>
      <ul>
        <li> Mechanical, plumbing, piping, HVAC quantity takeoffs </li>
        <li> Budget estimates </li>
      </ul>
    </>
  );

  const row3 = (
    <>
      <ul>
        <li> Check estimates </li>
        <li> Reconciliation estimates </li>
      </ul>
    </>
  );

  const text4 = (
    <div className=" p-4">
      <CommonHeading heading="WHY YOU NEED TO GET OUR HVAC AND DUCT ESTIMATION SERVICES" />
      <p className=" paragrapg">
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        is the perfect solution for all your Mechanical Estimation needs. You
        might be looking if you are frustrated with the hidden costs of the HVAC
        piping systems. You may be witnessing any lag in the duct system. <br />{" "}
        So, why not take our services to make the entire process easy for your
        business? It is the best time for you to hire us. We are giving the
        services of HVAC . We can assist you in your battle by presenting with
        finishing assessing arrangements that assist you with remaining
        cutthroat, winning more positions, increment proficiency, and benefit
        potential. We can resolve all your problems. Contact us to be the top
        contractor in town.
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/MechanicalHTHI1.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/MechanicalHTHI2.png")}
        />
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
