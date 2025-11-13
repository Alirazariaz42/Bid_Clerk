import React from "react";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import { BackgroundBeamsDemo } from "../CommonComponents/BackgroundBeamsDemo";
import "./Payments.css";
import { Banner } from "../CommonComponents/Banner";
import { CommonContactUs } from "../CommonComponents/CommonContactUs";
import Slider from "react-slick";
import { TURNAROUNDTIME } from "../CommonComponents/TURNAROUNDTIME";

export const Payments = () => {
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
  return (
    <div style={{ marginTop: "90px" }}>
      <div className=" container-md animate__animated animate__backInUp ">
       
        <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            Payment
            </span>
          </h1>
        <h5>Refund Policy</h5>
        <p className=" paragrapg">
          While we strive for utmost client satisfaction, please note that
          refunds are not offered. Instead, we are committed to facilitating
          exchanges to ensure you receive the best value for your investment.
        </p>
        <div className=" row m-0 w-100 justify-content-center">
          <div className=" col-md-6 col-12 d-flex justify-content-center align-items-center ">
            {" "}
            <div className=" ">
              <TURNAROUNDTIME />
            </div>
          </div>
          <div className=" col-md-6 col-12  d-flex justify-content-center align-items-center">
            <div
              style={{
                backgroundColor: "#1C4658",
                borderRadius: "20px",
                padding: "20px",
                paddingTop: "70px",
                paddingBottom: "70px",
                width: "100%",
              }}
              className="slider-container"
            >
              <Slider {...settings}>
                <div className=" d-flex justify-content-around align-items-center ">
                  <img src={require("../../Images/pay.png")} alt="" />
                  <button
                    className=" p-2"
                    style={{
                      backgroundColor: "#028EC9",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    &nbsp; Pay ➜ &nbsp;
                  </button>
                </div>

                <div className=" d-flex justify-content-around align-items-center">
                  <img src={require("../../Images/pay2.png")} alt="" />
                  <button
                    className=" p-2"
                    style={{
                      backgroundColor: "#028EC9",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    &nbsp; Pay ➜ &nbsp;
                  </button>
                </div>

                <div className=" d-flex justify-content-around align-items-center">
                  <img src={require("../../Images/pay3.png")} alt="" />
                  <button
                    className=" p-2"
                    style={{
                      backgroundColor: "#028EC9",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    &nbsp; Pay ➜ &nbsp;
                  </button>
                </div>

                <div className=" d-flex justify-content-around align-items-center">
                  <img src={require("../../Images/pay4.png")} alt="" />
                  <button
                    className=" p-2"
                    style={{
                      backgroundColor: "#028EC9",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    &nbsp; Pay ➜ &nbsp;
                  </button>
                </div>

                <div className=" d-flex justify-content-around align-items-center ">
                  <img src={require("../../Images/pay5.png")} alt="" />
                  <button
                    className=" p-2"
                    style={{
                      backgroundColor: "#028EC9",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    &nbsp; Pay ➜ &nbsp;
                  </button>
                </div>

                <div className=" d-flex justify-content-around align-items-center ">
                  <img src={require("../../Images/pay6.png")} alt="" />
                  <button
                    className=" p-2"
                    style={{
                      backgroundColor: "#028EC9",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    &nbsp; Pay ➜ &nbsp;
                  </button>
                </div>

                <div className=" d-flex justify-content-around align-items-center ">
                  <img src={require("../../Images/pay7.png")} alt="" />
                  <button
                    className=" p-2"
                    style={{
                      backgroundColor: "#028EC9",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    &nbsp; Pay ➜ &nbsp;
                  </button>
                </div>

                <div className=" d-flex justify-content-around align-items-center">
                  <img src={require("../../Images/pay8.png")} alt="" />
                  <button
                    className=" p-2"
                    style={{
                      backgroundColor: "#028EC9",
                      color: "white",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    &nbsp; Pay ➜ &nbsp;
                  </button>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        {/* <BackgroundBeamsDemo /> */}
        <CommonHeading heading="PAYMENT TERMS" />
        <p className=" paragrapg">
          We utilize Quickbooks Online Payments to secure the privacy of your
          financial information so that you can comfortably pay via your Credit
          Card or Debit Card or PayPal. After receiving your plans and analyzing
          your project specifications, we send a quote comprising the Quickbooks
          Invoice and delivery date. If you accept the quote, you can simply pay
          through your mobile phone, desktop or call us to proceed with the
          payment at +1 917 300 1079.
        </p>
      </div>
      <div className=" mb-4">
        {" "}
        <Banner />
      </div>
      <CommonContactUs />
    </div>
  );
};
