import React from "react";
// import "./GeneralRequirements.css";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";
import { Link } from "react-router-dom";
export const MEP_Estimating = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* <CommonHeading heading="MEP Estimating Services" /> */}
      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            MEP Estimating Services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        At{" "}
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          {" "}
          BIdClerk Estimating,
        </span>{" "}
        we know how important accurate cost estimating is for the overall
        success of your MEP projects. our comprehensive cost breakdowns involve
        every facet of the project. So you will get the overall cost of all
        equipment from the mechanical to the electrical to the plumbing systems.
        Our cost estimates are designed to assist you to simplify your projects,
        save money, and increase your profits. So, don’t take chances with your
        estimates, rather rely on our professionals for pinpoint accuracy and
        assurance. Get in touch with us right now to make use of our expert Mep
        Estimating Services Contact us  
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
      <CommonHeading heading=" The RANGE OF MEP ESTIMATING SERVICES" />
      <div className=" row m-0 w-100">
        <div className="col-md-6 col-12">
          {" "}
          <p className=" p-3 paragrapg">
            <ul>
              <li>Material takeoffs</li>
              <li> Bid estimates & bidding assistance</li>
              <li>Preliminary estimates & feasibility studies</li>
              <li>CPM scheduling</li>
            </ul>
          </p>
        </div>
        <div className="col-md-6 col-12">
          {" "}
          <p className=" p-3 paragrapg">
            {" "}
            <ul>
              {" "}
              <li>MEP drafting </li>
              <li> Budget & design estimates</li>
              <li> Change order estimates</li>
              <li> Litigation assistance</li>
              <li> Project Cost Management</li>
              <li>Project lead generation </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="The Role Of Correct MEP Estimates Is Essential!" />
      <p className=" p-3 paragrapg">
        {" "}
        Accurate MEP (Mechanical, Electrical, and Plumbing) estimates build up a
        solid foundation for accurate project planning. In addition, it helps in
        perfect budgeting for building construction. Moreover, the proper
        estimates make you efficient and make perfect resource allocations
        possible. Also, it makes it easy to align progress with the accurate
        need of the MEP systems. Furthermore, it prevents cost overruns and
        delays in the construction. Additionally. correct MEP takeoff services
        optimize material procurement, and labor costs, and ensure the
        following:
        <ul>
          <li> Precise Estimates </li>
          <li> Effective Decision Making </li>
          <li> Boost Productivity </li>
          <li> Risk Assessment </li>
          <li> Smooth Execution </li>
        </ul>
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/MEPHTHI1.png")} />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/MEPHTHI2.png")}
        />
      </div>

      <div className=" text-center MepDetailsContainer">
        <h5 className=" text-uppercase">
          Empower your business growth with precise BidClerk estimates.
        </h5>
        <p className=" paragrapg">
          The secret to the success of a contractor is how many MEP estimating
          projects he has managed with accuracy and a seamless development. Get
          support with the following{" "}
        </p>

        <div className=" row w-100 m-0 justify-content-center">
          <div className=" col-md-6 col-12 mt-2 mb-2 d-flex justify-content-center align-items-center">
            {" "}
            <div className=" d-flex justify-content-center align-items-center flex-column widthdiv">
              {" "}
              <img src={require("../../../Images/icon1.png")} alt="" />{" "}
              <h5 className=" text-uppercase">
                Mechanical Estimation Services
              </h5>{" "}
              <p>
                Get complete support for the accuracy of our estimators for your
                mechanical systems. Get perfect mechanical estimates for HVAC
                ductwork, piping, and equipment installation.
              </p>{" "}
              <Link to="/mechanical-estimating-services/">
                {" "}
                <img
                  src={require("../../../Images/arrow_circle_left.png")}
                  alt=""
                />{" "}
              </Link>
            </div>{" "}
          </div>
          <div className=" col-md-6 col-12 mt-2 mb-2 d-flex justify-content-center align-items-center">
            {" "}
            <div className=" d-flex justify-content-center align-items-center flex-column widthdiv">
              {" "}
              <img src={require("../../../Images/icon2.png")} alt="" />{" "}
              <h5 className=" text-uppercase">Plumbing Estimating Services</h5>{" "}
              <p>
                Know the material cost for water supply, drainage, sanitary
                fixtures, pipes, valves, and plumbing equipment installation
                with precise plumbing estimation..
              </p>{" "}
              <Link to="/plumbing-estimating-services/">
                {" "}
                <img
                  src={require("../../../Images/arrow_circle_left.png")}
                  alt=""
                />{" "}
              </Link>{" "}
            </div>{" "}
          </div>
          <div className=" col-md-6 col-12 mt-2 mb-2 d-flex justify-content-center align-items-center">
            {" "}
            <div className=" d-flex justify-content-center align-items-center flex-column widthdiv">
              {" "}
              <img src={require("../../../Images/icon3.png")} alt="" />{" "}
              <h5 className=" text-uppercase"> Gutter Estimating Services</h5>{" "}
              <p>
                We offer precise gutter Estimating Services, focusing on
                cost-effectiveness and efficiency. Trust our expertise for
                accurate estimates tailored to your needs, ensuring peace of
                mind throughout your project.
              </p>{" "}
              <Link to="/gutter-estimating-services/">
                <img
                  src={require("../../../Images/arrow_circle_left.png")}
                  alt=""
                />{" "}
              </Link>{" "}
            </div>{" "}
          </div>
          <div className=" col-md-6 col-12 mt-2 mb-2 d-flex justify-content-center align-items-center">
            {" "}
            <div className=" d-flex justify-content-center align-items-center flex-column widthdiv">
              {" "}
              <img src={require("../../../Images/icon4.png")} alt="" />{" "}
              <h5 className=" text-uppercase">
                Electrical Estimating Services
              </h5>{" "}
              <p>
                Our precise electrical estimates will give you a better idea
                about the costs of all electrical systems like wiring, lighting
                fixtures, and electrical equipment installation.
              </p>{" "}
              <Link to="/electrical-estimating-services/">
                {" "}
                <img
                  src={require("../../../Images/arrow_circle_left.png")}
                  alt=""
                />{" "}
              </Link>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className=" container-md">
        <HalfTextHalfOffComponent text={text3} />
      </div>
      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
