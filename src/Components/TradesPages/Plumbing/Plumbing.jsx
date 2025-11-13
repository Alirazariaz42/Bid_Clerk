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

export const Plumbing = () => {
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
            Plumbing Estimating Services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        streamlines plumbing estimates for New York contractors. With over 10
        years of experience, we provide fast, accurate bids tailored to your
        needs. Our team uses cutting-edge software for precise pricing,
        factoring in local labor rates and material costs. From residential to
        commercial and industrial projects, we've got you covered. bids.
      </p>
    </div>
  );
  const text2 = (
    <div>
      <CommonHeading heading="Commercial Plumbing  Estimating Services " />
      <p className=" paragrapg">
        {" "}
        At&nbsp;{" "}
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        , we're experts in fast, accurate commercial plumbing estimates. We
        break down every detail for multi-floor systems, including pipes,
        fittings, fixtures, valves, and more.
      </p>

      <CommonHeading heading="Residential Plumbing Estimating Services " />
      <p className=" paragrapg">
        {" "}
        Whether you're a small-scale plumber or a large residential plumbing
        contractor, accurate estimates are essential for quoting prices, bidding
        on jobs, and sourcing materials. We cover everything from water heaters
        and gas lines to main sewer lines and floor drains. Plus, we handle
        domestic HVAC systems, swimming pool plumbing, and more
      </p>
    </div>
  );

  const text4 = (
    <div className=" p-4">
      <CommonHeading heading="Why Choose Us?" />
      <p className=" paragrapg">
        At&nbsp;
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating,
        </span>{" "}
        we're your go-to for Plumbing Estimating. With our expertise and
        cutting-edge software, we deliver fast, accurate estimates at affordable
        rates. Our satisfied clients speak for our top-notch quality and
        excellent service. Get in touch with us for all your plumbing estimation
        needs.
      </p>
    </div>
  );

  const text3 = (
    <div>
      <CommonHeading heading="Range of Plumbing Estimating Services" />
      <div className=" row w-100 m-0 justify-content-center">
        <div className=" col-sm-6 col-12 d-flex justify-content-center align-items-center">
          {" "}
          <div>
            <ul>
              <li> Material Takeoffs</li>
              <li>Budget Estimates</li>
              <li> Conceptual Estimates</li>
              <li>Detailed Design Development Estimates</li>
              <li> Bid Estimates</li>
              <li>Bid Reviews </li>
            </ul>{" "}
          </div>
        </div>
        <div className=" col-sm-6 col-12 d-flex justify-content-center align-items-center">
          {" "}
          <div>
            <ul>
              <li> Bidding Assistance</li>
              <li>Unbiased Third Party Estimate</li>
              <li> Procurement & Change Orders</li>
              <li> Project Cost Management</li>
              <li> Subcontractor Marketing</li>
              <li>Plumbing Project Lead Generation </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/ElectricalHTHI1.png")}
      />

      <div className=" container-md">
        <HalfTextHalfImg2
          text={text3}
          src={require("../../../Images/PlanningHTHI2.png")}
        />

        <HalfImgHalfText
          text={text2}
          src={require("../../../Images/plumbingHTHI3.png")}
        />
      </div>

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
