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
export const DryWall = () => {
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
      

      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            DRYWALL TAKEOFF SERVICES
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        {" "}
        We offer precise drywall estimates tailored to your needs, ensuring you
        avoid over or underquoting. With our expertise in the AEC sector,
        <b style={{ color: "#076e9a" }}> BidClerk Estimating </b> specializes in
        accurate quantity takeoffs for residential, commercial, and retail
        projects. Our estimates are based on current labor and material prices
        by zip code for utmost accuracy. We adhere to strict standards set by
        organizations like the AIQS and AACE to deliver professional estimates
        you can rely on Contact us  
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
      <CommonHeading heading="Complete Drywall Estimation Solutions" />
      <p className=" p-3 paragrapg">
        <ul>
          <li> Drywall material & labor takeoffs</li>
          <li> Acoustical Ceiling Estimates</li>
          <li> Wood Framing Estimates</li>
          <li> Metal Framing Estimates</li>
          <li> Budget Estimates</li>
          <li> Bid Assistance</li>
          <li> Change Order Management</li>
          <li> Project Management</li>
          <li> Subcontractor Marketing</li>
          <li>
            {" "}
            Our services cater to general contractors, drywall installers,
            homeowners, and designers for residential, commercial, and retail
            projects. We provide comprehensive proposals with precise cost
            estimates and material takeoff sheets, helping contractors win bids
            and maximize profits. Our estimates cover all aspects, including
            materials and labor expenses.{" "}
          </li>
        </ul>
      </p>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="Our Approach To Dry wall Estimating" />
      <p className=" p-3 paragrapg">
        At <b style={{ color: "#076e9a" }}> BidClerk Estimating </b>, we make
        drywall estimates hassle-free. Our team carefully reviews your plans and
        uses advanced software for accurate measurements. We calculate
        everything you need, from sheetrock to screws, considering local labor
        costs and transportation. Plus, we factor in painting if required. Going
        beyond simple estimates, we apply value engineering to boost your
        profits. Contact us today for a free quote! Reach us at{" "}
        <b style={{ color: "#076e9a" }}> +1 917 300 1079. </b>
      </p>
    </div>
  );

//   
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection text={text} src={require("../../../Images/DryWall1.png")} />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text2}
          src={require("../../../Images/DryWall2.png")}
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
