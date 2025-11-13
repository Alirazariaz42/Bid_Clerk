import React from "react";
import "./Services.css";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import { HalfTextHalfImg2 } from "../CommonComponents/HalfTextHalfImg2";
import { BackgroundBeams } from "../ui/BackgroundBeams.tsx";
import { Link } from "react-router-dom";
import { CommonCard } from "../CommonComponents/CommonCard.jsx";
import { Off_40_percent } from "../CommonComponents/Off40%Common.jsx";
import { Banner } from "../CommonComponents/Banner.jsx";
import "animate.css";
export const Services = () => {
  const text = (
    <>
      <div>
        <div className="">
          <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
              Your Trusted BidClerk Estimating
            </span>
          </h1>
        </div>
        <p className="paragraph mt-3">
          <b style={{ color: "#028EC9" }}>BidClerk Estimating</b>  is your go-to
          destination for specialized Construction Cost Estimating Services and
          Material Takeoff Services, exclusively designed for clients within the
          United States. Our dedicated expertise serves individuals and
          businesses across the nation. Contact us via
          <a
            className=" text-decoration-none"
            href="mailto:Davidson@bidclerkestimating.com"
          >
            {" "}
            <span style={{ color: "#028EC9" }}>
              {" "}
               Davidson@bidclerkestimating.com{" "}
            </span>
          </a>
           or{" "}
          <a className=" text-decoration-none" href="tel:+1 917 300 1079">
            <span style={{ color: "#028EC9" }}>  +1 917 300 1079.</span>
          </a>
        </p>
      </div>
    </>
  );
  return (
    <div
      className="animate__animated animate__backInLeft"
      style={{ marginTop: "95px" }}
    >
      <div className=" container-md mt-3 mb-5 ">
        <HalfTextHalfImg2
          text={text}
          src={require("../../Images/Serivices.png")}
        />
      </div>
      <div className="ServicesContainer">
        <div className=" container-md">
          <div className=" text-center pt-4 pb-4">
            <CommonHeading heading="our Services" />
          </div>
          <div className="  pb-5">
            <Link
              to="/cost-estimating-services/"
              style={{ textDecoration: "none" }}
            >
              <div style={{ color: "white" }} className="CostEstimation  ">
                <div className="Description">
                  <h3 className="fs-5 fw-semibold">
                    Construction Cost Estimating Services
                  </h3>
                  <p className=" paragrapg2 ">
                    {" "}
                    Construction Cost Estimating Services are essential for
                    understanding project requirements and duration, albeit they
                    can be laborious and time-consuming.
                  </p>

                  <div>
                    <button class="btnshining fw-semibold">
                      <i class="animation"></i>Read More
                      <i class="animation"></i>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to="/construction-takeoff-services/"
              style={{ textDecoration: "none" }}
            >
              <div style={{ color: "white" }} className="TakeOff">
                <div className="Description">
                  <h3 className=" fw-semibold fs-5">
                    Construction Takeoff Services{" "}
                  </h3>
                  <p className=" paragrapg2 ">
                    {" "}
                    Our Construction Takeoff Services offer detailed material
                    breakdowns for informed decisions. With thorough Quantity
                    Takeoff and Material Takeoff, we ensure efficient
                    project execution.
                  </p>

                  <div>
                    <button class="btnshining fw-semibold">
                      <i class="animation"></i>Read More
                      <i class="animation"></i>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>{" "}
        </div>
        <Banner />
        <div className=" container-md pb-5">
          <Link to="/cpm-scheduling/" style={{ textDecoration: "none" }}>
            <div style={{ color: "white" }} className="CPMScheduling  ">
              <div className="Description">
                <h3 className=" fs-5 fw-semibold">CPM Scheduling</h3>
                <p className=" paragrapg2 ">
                  {" "}
                  To ensure projects stay on time and within budget, our
                  scheduling experts craft detailed, realistic plans, guiding
                  construction from start to finish.
                </p>

                <div>
                  <button class="btnshining fw-semibold">
                    <i class="animation"></i>Read More
                    <i class="animation"></i>
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/planning/" style={{ textDecoration: "none" }}>
            <div style={{ color: "white" }} className="Planning  ">
              <div className="Description">
                <h3 className="fs-5 fw-semibold">Planning</h3>
                <p className=" paragrapg2 ">
                  {" "}
                  Project planning is the vital first step in project
                  management. It's about creating a detailed strategy for
                  success, going beyond just scheduling.
                </p>

                <div>
                  <button class="btnshining fw-semibold">
                    <i class="animation"></i>Read More
                    <i class="animation"></i>
                  </button>
                </div>
              </div>
            </div>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
