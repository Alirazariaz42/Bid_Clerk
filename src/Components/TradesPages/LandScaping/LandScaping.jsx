import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";
export const LandScaping = () => {
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
            landscaping estimating services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        {" "}
        <span style={{ color: "#076e9a" }}>BidClerk Estimating  </span>is here
        to assist you by providing their expert landscaping estimating services.
        Our landscape estimator is well equipped and expert enough to run a
        profitable business. Different statistics display that the contractors
        generate profit on every job. It is essential to learn an accurate bid
        on Landscaping to ensure either you’re generating a profit on every
        other job or not. We are here with an expert team of landscape
        estimators to manage Landscaping takeoff smartly and quickly through
        professional estimating software. Contact us
        <span style={{ color: "#076e9a" }}>
          via Davidson@bidclerkestimating.com
        </span>
         or <span style={{ color: "#076e9a" }}>+1 917 300 1079.</span>
      </p>
    </div>
  );

  const text2 = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="Vital Role of General Requirements" />
      <p className=" p-3 paragrapg">
        {" "}
        General requirements are the backbone of any construction project,
        ensuring compliance with regulations and meeting project needs. They
        provide detailed estimates for materials, labor, and equipment, enabling
        informed decision-making. Clear communication and adherence to budget
        constraints ensure project success and client satisfaction.
      </p>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="The Range of Landscaping Estimating Service" />
      <p className=" p-3 paragrapg">
        <ul>
          <li> landscaping estimating </li>
          <li> hardscape estimating </li>
          <li> softscape estimating</li>
          <li> irrigation estimating</li>
          <li> sprinkler system installation cost estimate</li>
          <li> drip irrigation cost estimate</li>
          <li> sprinkler system cost estimate</li>
          <li> sprinkler system estimates</li>
          <li> sprinkler estimate</li>
          <li> sprinkler system price estimate</li>
        </ul>
      </p>
    </div>
  );
  const text4 = (
    <div>
      <CommonHeading heading="Our Landscaping Takeoff Services" />
      <p className=" paragrapg">
        {" "}
        Our skilled estimators organize our landscaping takeoffs services. They
        provide accurate estimation figures for landscape in professional
        landscaping takeoffs by taking correct measurements of the region. They
        provide the following estimation services:
      </p>
      <div className=" row m-0 w-100">
        <div className=" col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg  text-capitalize">
            {" "}
            <li> Softscape Estimating</li>
            <li>Irrigation Estimating </li>
            <li>Sprinkler Estimates </li>
            <li>Sprinkler system price estimates </li>
            <li>Drip Irrigation Cost Estimates </li>
          </ul>
        </div>
        <div className=" col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg text-capitalize">
            {" "}
            <li>Landscaping Estimating </li>
            <li>Hardscape Estimating </li>
            <li>Sprinkler System Estimates </li>
            <li>Sprinkler System Cost Estimates </li>
            <li>Sprinkler System Installation Cost Estimates </li>
          </ul>
        </div>
      </div>
    </div>
  );
  const text5 = (
    <div>
      <CommonHeading heading="Earth Work Estimation Services" />
      <p className=" paragrapg">
        There are a few typical methods that anyone can follow to estimate
        landscaping services for clients all around the world. The following are
        the main measures to take:
        <ul>
          <li> Talk to a client </li>
          <li> Effectively estimate an overhead cost </li>
          <li> Reliable estimate materials costs </li>
          <li> Estimate a subcontractor cost </li>
          <li> Estimate labor costs </li>
          <li> Add a markup</li>
          <li> Calculate the total price </li>
        </ul>
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/LSHTHI.png")} />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <CommonHeading heading="Our Company Is Providing The Best Landscaping Estimating Services" />
        <p className=" paragrapg">
          At{" "}
          <b style={{ color: "#076e9a", fontWeight: "600" }}>
            BidClerk Estimating,
          </b>
          we stand out in the crowded estimating market with our expert team of
          landscaping estimators. We have a team of qualified landscaping
          estimators on staff who can help you with landscaping estimates. With
          extensive experience and proficiency in landscape estimating software,
          our estimators deliver accurate and in-demand landscaping estimates.
          <b>
            In addition to all of that, our landscaping estimation services
            provide our clients with the following additional benefits:{" "}
          </b>
          <ul>
            <li> The highest degree of accuracy is guaranteed.</li>
            <li>
              {" "}
              Our estimating procedure is quick. With it, we assist you in
              increasing your chances of winning bids.
            </li>
            <li>
              {" "}
              Every material and labour requirement is clearly presented to
              ensure that the actual process runs well.
            </li>
            <li>
              The current technology and building trends are recommended to be
              geared and materials.
            </li>
            <li>
              {" "}
              Estimates are provided in the format requested, saving you time in
              understanding.
            </li>
            <li> The estimate also includes contingencies.</li>
            <li> Contingencies are also included in the estimate.</li>
            <li> Expert advice is accessible 7 days a week.</li>
          </ul>
        </p>
      </div>

      <div className=" container-md">
        <HalfImgHalfText
          text={text3}
          src={require("../../../Images/LSHTHI2.png")}
        />
        <HalfTextHalfOffComponent text={text4} />
        <HalfImgHalfText
          text={text5}
          src={require("../../../Images/LSHTHI3.png")}
        />
      </div>
      <div className=" container-md">
        <SoftwareWeUse />
      </div>
      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
