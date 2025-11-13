import React from "react";
import "./AboutUs.css";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import { HalfTextHalfImg2 } from "../CommonComponents/HalfTextHalfImg2";
import "./AboutUs.css";
import { Banner } from "../CommonComponents/Banner";
import { CommonContactUs } from "../CommonComponents/CommonContactUs";
export const AboutUs = () => {
  const text2 = (
    <div>
      <CommonHeading heading="List of our clients" />
      <ul className="  text-capitalize paragrapg">
        <li> General Contractors</li>
        <li> Subcontractors</li>
        <li>Projects managers</li>
        <li>investors</li>
        <li> Architects</li>
        <li> home builders</li>
        <li> owners</li>
        <li> Developers</li>
        <li>vendors </li>
      </ul>
    </div>
  );
  const text = (
    <>
      <p className="paragraph">
        <span style={{ color: "#076E9A", fontWeight: "600" }}>
          {" "}
          BidClerk Estimating
        </span>{" "}
        is dedicated to providing cost-effective and efficient cost estimating
        and consultation services to the real estate development and
        construction industry. With a focus on accuracy and reliability, our
        expert team is committed to meeting the specific needs of our clients,
        ensuring they receive the most precise estimating solutions. We have
        successfully served numerous developments and architectural firms.
        <br /> <br />
        With over 10 years of experience in the AEC industry, we possess a deep
        understanding of the construction sector's evolution and provide
        guidance to our clients accordingly. By combining our industry
        knowledge, the latest technology, and a commitment to excellence, we aim
        to save you both money and time in your construction estimating,
        scheduling, and cost management processes.
      </p>
    </>
  );
  return (
    <div
      className="animate__animated animate__backInLeft"
      style={{ marginTop: "90px" }}
    >
      <div className=" container-md">
        <div>
         
          <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            About us
            </span>
          </h1>

          <HalfTextHalfImg2
            text={text}
            src={require("../../Images/AboutHTHI.png")}
          />
        </div>
        <p className=" paragraph">
          Whether you require construction cost estimates or the expertise of a
          professional independent estimator,{" "}
          <span style={{ color: "#076E9A", fontWeight: "600" }}>
            {" "}
            BidClerk Estimating
          </span>{" "}
          is here to assist you. Contact us at{" "}
          <a href="tel:+1 917 300 1079">
            <span style={{ color: "#076E9A", fontWeight: "600" }}>
              {" "}
              +1 917 300 1079
            </span>{" "}
          </a>
          for reliable and timely service.
        </p>
        <div className=" text-center">
          <CommonHeading heading="A STRONG BACKGROUND IN Construction Estimating SERVICES" />
        </div>
        <div className=" d-flex justify-content-center ">
          <ul
            className="nav nav-pills mb-3 d-flex justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item list-unstyled" role="presentation">
              <button
                className="tabCustomizationButton nav-link active "
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Our Mission
              </button>
            </li>
            <li className="nav-item list-unstyled" role="presentation">
              <button
                className="tabCustomizationButton nav-link "
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Our Vission
              </button>
            </li>
            <li className="nav-item list-unstyled" role="presentation">
              <button
                className="nav-link tabCustomizationButton"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Our Priority
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            <div className=" d-flex justify-content-around align-items-center flex-md-row flex-column  w-100 m-0">
              <div className=" d-flex justify-content-around align-items-center tabImgContainer m-0 w-100">
                <img
                  src={require("../../Images/TabImg1.png")}
                  className=" tabImg"
                  alt=""
                />
              </div>
              <div>
                <p className=" paragraph ms-3 me-3">
                  Our mission at{" "}
                  <span style={{ color: "#076E9A", fontWeight: "500" }}>
                    {" "}
                    BidClerk Estimating
                  </span>{" "}
                  is to deliver unparalleled construction estimating solutions
                  that exceed our clients' expectations. We prioritize accuracy,
                  efficiency, and sustainability to ensure the success of every
                  project we undertake.
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <div className=" d-flex justify-content-around align-items-center flex-md-row flex-column w-100  m-0">
              <div className=" d-flex justify-content-around align-items-center tabImgContainer m-0 w-100">
                <img
                  src={require("../../Images/TabImg2.png")}
                  className=" tabImg"
                  alt=""
                />
              </div>
              <div>
                <p className=" paragraph  ms-3 me-3">
                  <span style={{ color: "#076E9A", fontWeight: "500" }}>
                    {" "}
                    BidClerk Estimating
                  </span>{" "}
                  is committed to excellence in construction estimating,
                  striving to provide smart solutions and ensure complete client
                  satisfaction. With our unwavering dedication to quality, we're
                  setting new standards in the industry. Reach out to us today
                  at{" "}
                  <span style={{ color: "#076E9A", fontWeight: "500" }}>
                    +1 917 300 1079
                  </span>{" "}
                  and experience the difference.
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            <div className=" d-flex justify-content-around align-items-center flex-md-row flex-column w-100  m-0">
              <div className=" d-flex justify-content-around align-items-center tabImgContainer m-0 w-100">
                <img
                  src={require("../../Images/TabImg3.png")}
                  className=" tabImg"
                  alt=""
                />
              </div>
              <div>
                <p className=" paragraph  ms-3 me-3">
                  Our priority at{" "}
                  <span style={{ color: "#076E9A", fontWeight: "500" }}>
                    {" "}
                    BidClerk Estimating
                  </span>{" "}
                  is your satisfaction. We're dedicated to exceeding your
                  expectations with our top-notch construction estimating
                  services. Count on our committed team to deliver efficient and
                  timely solutions customized to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" unknownClassContainer mt-3 ">
        <div className=" onsmallScreen container-md d-flex  justify-content-around align-items-center flex-md-row flex-column w-100 m-0 ">
          <div className=" text-center ">
            <img
              className=" d-inline-block"
              src={require("../../Images/Icons1.png")}
              alt=""
            />
            <h4>20 +</h4>
            <p className=" fw-semibold text-uppercase paragrapg">
              Experienced Staff
            </p>
          </div>
          <div className=" text-center">
            {" "}
            <img
              className=" d-inline-block"
              src={require("../../Images/Icons2.png")}
              alt=""
            />
            <h4>100 +</h4>
            <p className=" fw-semibold text-uppercase paragrapg">Clients</p>
          </div>
          <div className=" text-center">
            {" "}
            <img
              className=" d-inline-block"
              src={require("../../Images/Icons3.png")}
              alt=""
            />
            <h4>100 +</h4>
            <p className=" fw-semibold text-uppercase paragrapg">
              Satisfied Clients
            </p>
          </div>
          <div className=" text-center">
            {" "}
            <img
              className=" d-inline-block"
              src={require("../../Images/Icons4.png")}
              alt=""
            />
            <h4>500 +</h4>
            <p className=" fw-semibold text-uppercase paragrapg">
              Completed Projects
            </p>
          </div>
        </div>
      </div>
      <div className=" container-md mb-4">
        <div className=" blueContainer">
          <h5 className=" text-center">
            WHY GET OUR CONSTRUCTION ESTIMATING SERVICES?
          </h5>
          <p className=" paragrapg text-center">
            As a contractor, managing multiple tasks, machinery, and on-site
            requirements can be challenging. We understand the stress it can
            cause. That's why at BidClark Estimating, we offer professional
            construction estimating services to simplify your project
            development process. With our experienced estimators and up-to-date
            industry knowledge, we ensure a smoother and more effortless
            experience for you.
          </p>
          <div className=" row m-0 w-100 justify-content-center">
            <div className=" col-md-6 col-12">
              {" "}
              <h6 className=" text-uppercase">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../Images/Frame1.png")}
                  alt=""
                />
                Commercial Time Management{" "}
              </h6>{" "}
              <p className=" paragrapg">
                {" "}
                Optimize your commercial project timelines with our efficient
                time management solutions tailored to your needs.{" "}
              </p>{" "}
            </div>
            <div className=" col-md-6 col-12">
              {" "}
              <h6 className=" text-uppercase">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../Images/Frame2.png")}
                  alt=""
                />
                SATISFIED CLIENTS
              </h6>{" "}
              <p className=" paragrapg">
                Deliver customer satisfaction with our reliable estimating
                services, ensuring happy clients every time.
              </p>{" "}
            </div>
            <div className=" col-md-6 col-12">
              {" "}
              <h6 className=" text-uppercase">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../Images/Frame3.png")}
                  alt=""
                />
                Increased Bid Success
              </h6>{" "}
              <p className=" paragrapg">
                Boost your chances of winning bids with our proven track record
                for increased bid success.
              </p>{" "}
            </div>
            <div className=" col-md-6 col-12">
              {" "}
              <h6 className=" text-uppercase">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../Images/Frame4.png")}
                  alt=""
                />
                Fast & Accurate Estimates
              </h6>{" "}
              <p className=" paragrapg">
                Get swift and precise estimates tailored to your project needs,
                ensuring efficient planning and execution.
              </p>{" "}
            </div>
            <div className=" col-md-6 col-12">
              {" "}
              <h6 className=" text-uppercase">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../Images/Frame5.png")}
                  alt=""
                />
                Guaranteed Quality Estimates
              </h6>{" "}
              <p className=" paragrapg">
                Experience peace of mind with our Guaranteed Quality Estimates.
              </p>{" "}
            </div>
            <div className=" col-md-6 col-12">
              {" "}
              <h6 className=" text-uppercase">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../Images/Frame6.png")}
                  alt=""
                />
                Timely Bid Submission Support
              </h6>{" "}
              <p className=" paragrapg">
                Receive timely assistance in submitting bids, ensuring you never
                miss a deadline.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../Images/AboutpageHTHI.png")}
        />
      </div>
      <CommonContactUs></CommonContactUs>
    </div>
  );
};
