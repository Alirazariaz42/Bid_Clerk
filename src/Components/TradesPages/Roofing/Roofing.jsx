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
export const Roofing = () => {
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
      <CommonHeading heading="roofing estimating services" />
      <p className=" p-3 paragrapg">
        {" "}
        At&nbsp;<b style={{ color: "#076e9a" }}> BidClerk Estimating </b> we
        offer efficient and affordable commercial roofing estimating services.
        Our experienced roofing estimator ensures swift and accurate estimates
        for your roofing projects, facilitating a seamless process from start to
        finish. Contact us  
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
      <CommonHeading heading="Fireproofing & Fire Stopping Estimating – Material Takeoff" />
      <p className=" p-3 paragrapg">
        For fireproofing and firestopping contractors, accurate estimates are
        essential. Our expert estimators provide detailed takeoffs of plans,
        including fireproofing ratings and structural assemblies. We include
        thickness and material of insulation, along with structural details,
        ensuring contractors have all necessary information for bidding and
        procurement.
      </p>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="Waterproofing & Damp Proofing Estimating – Material Takeoff" />
      <p className=" p-3 paragrapg">
        Our estimates provide essential details for waterproofing contractors,
        aiding in bids and material procurement. We outline where and how
        materials will be applied, including foundation, footings, and
        below-grade slabs. Our services are also valuable for air vapor barriers
        & sealants contractors, helping them prepare bids and determine material
        requirements.
      </p>
    </div>
  );

  const text6 = (
    <div>
      <CommonHeading heading="Our Roofing Estimates" />
      <p className=" p-3 paragrapg">
        Our expert Roofing estimators generally work with their expertise
        quickly. They deal with different types of roofing works. Few of them
        are as follows:
        <ul>
          <li> Green Roofs and Green Walls</li>
          <li> Flashing and Sheet Metal</li>
          <li> Membrane Roofing</li>
          <li> Damp Roofing and Waterproofing</li>
          <li> Steep Roofing</li>
          <li> Shingles</li>
          <li>Roof Windows and Skylights</li>
          <li> Common Roofing Materials </li>
        </ul>
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/MasnoryHTHI.png")}
      />
      <div className=" container-md">
        {text6}

        <HalfImgHalfText
          text={text2}
          src={require("../../../Images/RoofinhHTHI3.png")}
        />
      </div>
      <Banner />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text3}
          src={require("../../../Images/RoffinhHTHI4.png")}
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
