import React, { useContext } from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";
import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { MyContext } from "../../Store/MyContext";
export const Flooring = () => {
  const contextvalue = useContext(MyContext);
  const changeFunction = contextvalue.changefunction;
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
            Flooring Estimating services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        {" "}
        At&nbsp;<b style={{ color: "#076e9a" }}> BidClerk Estimating </b> we
        specialize in Flooring Estimating Services, offering precise material
        calculations and cost estimates tailored for flooring contractors and
        designers. We prioritize reducing waste by considering patterns,
        inserts, and design elements. Our comprehensive services cover access
        flooring, stair details, and more for a wide range of properties.
        Leveraging tools like Planswift, OST, and Bluebeam, our skilled
        estimators ensure accurate results for every project.. Contact us  
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

  const text3 = (
    <div>
      <CommonHeading heading="Types Of Flooring Estimating Services" />
      <p className=" p-3 paragrapg">
        Explore the diverse range of flooring estimation services offered by
        BidClerk Estimating
        <ul>
          <li> Bid Estimates</li>
          <li> Budget Estimates</li>
          <li> Change Order Estimates</li>
          <li> Project Lead Generation</li>
          <li> Vendor Quotations</li>
          <li> Design Estimates</li>
          <li> Bid Preparation </li>
        </ul>
      </p>
    </div>
  );

  const text6 = (
    <div>
      <CommonHeading heading="Our Roofing Estimates" />
      <p className=" p-3 paragrapg">
        BidClerk Estimating excel in swift estimation techniques across various
        flooring projects. Our expertise encompasses the following areas:
        <ul className=" paragrapg">
          <li> VCT tiles</li>
          <li> LVT floors</li>
          <li> Carpets</li>
          <li> Rubber tiling</li>
          <li> Wooden flooring</li>
          <li> Vinyl Flooring</li>
          <li> Dance Flooring</li>
          <li> Leather Flooring</li>
          <li> Fitness Room Flooring and Mats</li>
          <li> Tile Flooring</li>
          <li> Laminate Flooring </li>
        </ul>
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/FlooringHTHI1.png")}
      />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text6}
          src={require("../../../Images/FloringHTHI2.png")}
        />
      </div>
      <Banner />
      <div className=" container-md">
        <HalfImgHalfText
          text={text3}
          src={require("../../../Images/FlooringHTHI3.png")}
        />

        <div className=" container-md">
          <div>
            <div className=" row m-0 w-100 justify-content-center">
              <div className=" col-md-6 col-12">
                <div>
                  <CommonHeading heading="List of our clients" />
                  <span className=" row w-100 mt-2">
                    <span className="col-md-6 col-12">
                      <ul className=" text-uppercase">
                        <li>General Contractors</li>
                        <li>Subcontractors</li>
                        <li>Projects managers</li>
                        <li>investors</li>
                        <li>Architects</li>
                      </ul>
                    </span>
                    <span className="col-md-6 col-12">
                      <ul className=" text-uppercase">
                        <li>home builders</li>
                        <li>owners</li>
                        <li>Developers</li>
                        <li>vendors</li>
                      </ul>
                    </span>
                  </span>
                </div>
              </div>
              <div className=" col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div className="text-center bidDiscountContainer">
                  <h2 style={{ color: "#4AC9FF" }} className=" text-uppercase">
                    big discount!
                  </h2>
                  <p className=" paragrapg">
                    Why Are You Waiting For? Don‘t Waste Your Time. It’s Time To
                    Get Benefits From Limited Time Offer.
                  </p>
                  <p className=" paragrapg  text-uppercase">
                    Upload your plan and get a quote within 1 hour.
                  </p>

                  <div className=" text-center">
                    <button
                      onClick={changeFunction}
                      class="btnshining  fw-semibold"
                    >
                      <i class="animation"></i>Get 40% OFF
                      <i class="animation"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
