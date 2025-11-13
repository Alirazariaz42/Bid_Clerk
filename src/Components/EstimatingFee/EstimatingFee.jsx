import React, { useContext } from "react";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import "./EstimatingFee.css";
import { OurProcess } from "../CommonComponents/OurProcess";
import { TURNAROUNDTIME } from "../CommonComponents/TURNAROUNDTIME";
import { StandOutTrades } from "../CommonComponents/StandOutTrades";
import { HeroSection } from "../CommonComponents/HeroSection";
import { CommonContactUs } from "../CommonComponents/CommonContactUs";
import { Banner } from "../CommonComponents/Banner";
// import React, { Component } from "react";
import Slider from "react-slick";
import { MyContext } from "../Store/MyContext";
export const EstimatingFee = () => {
  const contextvalue = useContext(MyContext);
  const changeFunction = contextvalue.changefunction;
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div style={{ marginTop: "90px" }}>
      <div className=" container animate__animated animate__backInDown">
        <CommonHeading heading="Estimating fee" />
        <div className="SliderContainer">
          <div className="slider-container">
            <h3>Our Process</h3>
            <Slider {...settings}>
              <div>
                <div>
                  <div className="flexContainer">
                    <div>
                      {" "}
                      <p className=" paragrapg fw-semibold"> Approval</p>
                      <p className=" paragrapg">
                        Following our thorough review, we will furnish you with
                        a comprehensive fee proposal for your careful
                        consideration and approval.
                        <br />
                      </p>
                    </div>

                    <div>
                      <button onClick={changeFunction} class="btnUpload">
                        <i class="animation"></i>Upload plans
                        <i class="animation"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="flexContainer">
                    <div>
                      {" "}
                      <p className=" paragrapg fw-semibold">
                        {" "}
                        RFI\Clarification{" "}
                      </p>
                      <p className=" paragrapg">
                        The RFI email will always be sent to you if anything is
                        unclear in the plans/drawings/notes, or if required with
                        your approval we can complete the job with appropriate
                        assumptions.
                        <br />
                      </p>
                    </div>

                    <div>
                      <button onClick={changeFunction} class="btnUpload">
                        <i class="animation"></i>Upload plans
                        <i class="animation"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flexContainer">
                  <div>
                    {" "}
                    <p className=" paragrapg fw-semibold"> Submission </p>
                    <p className=" paragrapg">
                      Our skilled team of estimators deliver estimates that
                      includes the quantities and pricing for all materials and
                      labor. Our estimate and takeoff sheet will be delivered in
                      EXCEL format, using either our template or the client’s
                      template, as requested.
                      <br />
                    </p>
                  </div>

                  <div>
                    <button onClick={changeFunction} class="btnUpload">
                      <i class="animation"></i>Upload plans
                      <i class="animation"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flexContainer">
                  <div>
                    {" "}
                    <p className=" paragrapg fw-semibold"> Project </p>
                    <p className=" paragrapg">
                      Avail yourself of the option to either upload your plans
                      directly or forward them via email to &nbsp;
                      <a
                        className=" text-light"
                        href="mailto:Rao@quickbidestimating.com"
                      >
                        {" "}
                        Rao@quickbidestimating.com
                      </a>
                      <br />
                    </p>
                  </div>

                  <div>
                    <button onClick={changeFunction} class="btnUpload">
                      <i class="animation"></i>Upload plans
                      <i class="animation"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flexContainer">
                  <div>
                    {" "}
                    <p className=" paragrapg fw-semibold">Reviewing </p>
                    <p className=" paragrapg">
                      Upon submission of the proposal, our team thoroughly
                      examines the drawings provided by you.
                      <br />
                    </p>
                  </div>

                  <div>
                    <button onClick={changeFunction} class="btnUpload">
                      <i class="animation"></i>Upload plans
                      <i class="animation"></i>
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className=" row m-0 mt-4 w-100">
          <div className=" col-md-8 col-12 d-flex align-items-center p-0">
            <div className="GetAquote1">
              <h3>Get a quote now</h3>
              <p className=" paragrapg">
                We will send you a quote that includes the delivery time and
                date, and invoice. You can pay the amount through debit card,
                PayPal, credit card and begin with the estimate
              </p>
            </div>{" "}
          </div>
          <div className=" col-md-4 col-12 d-flex align-items-center p-0 ">
            {" "}
            <div className="GetAquote2">
              <h3>Get your Estimate</h3>
              <p className=" paragrapg">
                Our customer support team will manage to send you a final gutter
                estimate in EXCEL format.
              </p>
            </div>
          </div>
        </div>

        <div className=" d-flex justify-content-center align-items-center">
          <TURNAROUNDTIME />
        </div>
      </div>

      <div className=" container">
        <div className=" row w-100 m-0 justify-content-center">
          <div className=" col-md-4 col-sm-6 col-12 ">
            {" "}
            <div className="SinglePricingContainer">
              <h4 className=" text-center text-uppercase">
                Single trade pricing
              </h4>
              <p className=" paragrapg">
                {" "}
                Starting from <br />
                <span className=" fw-bold fs-4">150$</span> Specific Trade
              </p>
              <button
                onClick={changeFunction}
                className=" w-100 p-2 SinglePricingbtn1"
              >
                Get Started
              </button>
              <button
                onClick={changeFunction}
                className=" w-100 p-2 SinglePricingbtn2 "
              >
                {" "}
                Upload Plans
              </button>
              <p className=" fw-bold fs-4"> Features</p>
              <p className=" paragrapg text-center">
                {" "}
                We charge ($150 to $500) for a single trade project and the cost
                will vary on project Complexity.{" "}
              </p>
              <ul className=" paragrapg">
                <li>Turnaround Time 24 to 48 Hrs</li>
                <li>Any Trade or Any Kind of Project</li>
                <li>Free Quote Within 5 to 10 Minutes</li>
                <li>Free Consultation</li>
                <li>Imediate and Unlimited Revisions</li>
                <li>24/7 Email Support</li>
                <li>Live Chat and Call Support</li>
                <li>No Hidden Charges</li>
              </ul>
            </div>
          </div>
          <div className=" col-md-4 col-sm-6 col-12 ">
            {" "}
            <div className="MonthlyPricingContainer">
              <h4 className=" text-center text-uppercase">Monthly packages</h4>
              <p className=" paragrapg">
                {" "}
                Starting from <br />
                <span className=" fw-bold fs-4">15000$ </span>Per Month
              </p>
              <button
                style={{ backgroundColor: "#028EC9", color: "white" }}
                className=" w-100 p-2 SinglePricingbtn2"
                onClick={changeFunction}
              >
                Get Started
              </button>
              <button
                style={{ borderColor: " white" }}
                className=" w-100 p-2 SinglePricingbtn1 "
                onClick={changeFunction}
              >
                {" "}
                Upload Plans
              </button>
              <p className=" fw-bold fs-4"> Features</p>
              <p className=" paragrapg text-center">
                {" "}
                We charge ($1500 to $2500) for a projects and the cost will vary
                on project Complexity.
              </p>
              <ul className=" paragrapg">
                <li>Turnaround Time 24 to 48 Hrs</li>
                <li>Any Trade or Any Kind of Project</li>
                <li>Free Quote Within 5 to 10 Minutes</li>
                <li>Free Consultation</li>
                <li>Imediate and Unlimited Revisions</li>
                <li>24/7 Email Support</li>
                <li>Live Chat and Call Support</li>
                <li>No Hidden Charges</li>
                <li> 10 to 15 Projects </li>
                <li>Bid Filing and Consultation </li>
                <li> Material Takeoffs and Cost Management </li>
                <li>Turnaroun </li>
              </ul>
            </div>
          </div>
          <div className=" col-md-4 col-sm-6 col-12 d-flex justify-content-center">
            {" "}
            <div>
              <div className="SinglePricingContainer">
                <h4 className=" text-center text-uppercase">
                  Dedicated construction estimator
                </h4>
                <p className=" fw-bold paragrapg  text-uppercase">
                  Call for price
                </p>
                <button
                  onClick={changeFunction}
                  className=" w-100 p-2 SinglePricingbtn1"
                >
                  Get Started
                </button>
                <button
                  onClick={changeFunction}
                  className=" w-100 p-2 SinglePricingbtn2 "
                >
                  {" "}
                  Upload Plans
                </button>
                <p className=" fw-bold fs-4"> Features</p>
                <p className=" paragrapg text-center">
                  {" "}
                  Terms and Conditions apply:
                </p>
                <ul className=" paragrapg">
                  <li> Dedicated Resources</li>
                  <li> Manage the bidding network profiles </li>
                  <li> Material Takeoffs</li>
                  <li> Cost Management </li>
                  <li> Preconstruction & Change Order Management </li>
                  <li> Subcontractor Marketing</li>
                  <li> Turnaround Time 24 to 48 Hrs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-4">
        <CommonContactUs />
      </div>
    </div>
  );
};
