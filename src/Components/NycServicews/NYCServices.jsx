import React from "react";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Off_40_percent } from "../CommonComponents/Off40%Common";
import { TURNAROUNDTIME } from "../CommonComponents/TURNAROUNDTIME";
import Slider from "react-slick";
import { CommonContactUs } from "../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../CommonComponents/HalfTextHalfImg2";

export const NYCServices = () => {
  const text2 = (
    <div>
      <CommonHeading heading="List of our clients" />
      <ul className=" paragrapg">
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
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };
  const text = (
    <p className=" paragrapg">
      If you're seeking{" "}
      <span style={{ color: "#028ec9", fontWeight: "500" }}>
        {" "}
        Construction Estimating{" "}
      </span>{" "}
      services NYC, then you should consider contacting BidClerk Estimating!{" "}
      <br />
      Our skilled team provides detailed estimates for construction costs,
      covering all expenses. we excel in projects of any size, type, or
      complexity, including single-family residential, high-rise residential,
      commercial, retail, medical centers, institutional, industrial, marine,
      and mining projects.
      <br />
      <span style={{ color: "#028ec9", fontWeight: "500" }}>
        {" "}
        Construction Estimating{" "}
      </span>{" "}
      is equipped with the latest estimating software such as Planswift,
      Bluebeam, On SCREEN tAKEOFF. Our cost estimates are meticulously prepared
      using on-screen takeoff software to measure quantities accurately and
      RSMeans for costing. Reach out to us today for reliable construction
      estimating services!
    </p>
  );
  return (
    <div style={{ marginTop: "80px" }}>
      <div className=" container-md">
        <CommonHeading heading="CONSTRUCTION ESTIMATING SERVICES NYC" />
        <div>
          <HalfImgHalfText
            text={text}
            src={require("../../Images/NYCJIHT.png")}
          />
        </div>
        <div className=" d-flex justify-content-center align-items-center">
          <TURNAROUNDTIME />
        </div>
      </div>
      <div>
        <div className="slider-containernyc mt-4 mb-4">
          <Slider {...settings}>
            <div>
              <div className=" text-light text-center p-4 residential d-flex justify-content-center align-items-center flex-column">
                <button
                  style={{ backgroundColor: "#028ec9" }}
                  className=" text-uppercase fw-bold p-2 text-light "
                >
                  {" "}
                  residential
                </button>
                <p className="fw-semibold paragrapg">
                  Our BidClerk estimating services cater to residential
                  projects, offering comprehensive solutions such as kitchen and
                  bathroom gutting, roof demolition, garage and chimney
                  destruction, siding elimination, and complete interior house
                  clearing.
                </p>
              </div>
            </div>
            <div>
              <div className=" text-light text-center p-4 industrialial d-flex justify-content-center align-items-center flex-column">
                <button
                  style={{ backgroundColor: "#028ec9" }}
                  className=" text-uppercase fw-bold p-2 text-light"
                >
                  {" "}
                  industrialial
                </button>
                <p className=" fw-semibold paragrapg">
                  Our BidClerk estimating services excel in industrial projects,
                  crafting precise estimates tailored to your needs. With our
                  dedication, reliability, and accuracy, your project's success
                  is assured.
                </p>
              </div>
            </div>
            <div>
              <div className=" text-light text-center p-4 commercial d-flex justify-content-center align-items-center flex-column">
                <button
                  style={{ backgroundColor: "#028ec9" }}
                  className=" text-uppercase fw-bold p-2 text-light"
                >
                  {" "}
                  commercial
                </button>
                <p className=" fw-semibold paragrapg">
                  Our BidClerk estimating services specialize in commercial
                  projects, providing tailored estimates that meet your specific
                  needs. Rely on our dedication, reliability, and precision for
                  the success of your project.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../Images/AboutpageHTHI.png")}
        />
      </div>
      <CommonContactUs />
    </div>
  );
};
