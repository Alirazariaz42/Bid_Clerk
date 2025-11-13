import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { BlueRows } from "../../CommonComponents/BlueRows";

import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";

export const Gutter = () => {
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
            Gutter Estimating Services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        Looking for reliable gutter estimating services for your construction
        project? Look no further!{" "}
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        offers professional gutter estimating services worldwide. Our expert
        team uses modern software to deliver accurate gutter estimates
        efficiently, complete with layouts and annotations. With just one click,
        we can generate detailed bills of materials or takeoffs, providing
        precise estimates to our clients instantly.
      </p>
    </div>
  );
  const text2 = (
    <div>
      <CommonHeading heading="Gutter Material " />
      <p className=" paragrapg">
        {" "}
        We efficiently try to imagine a certain type of new gutter that is quite
        right for you and include all the required material for a gutter
        installation. There are comprehensive varieties of gutter that vary
        according to their durability thresholds and appearances. Our expert
        Gutter cost estimators deal with a wide range of following gutters.
        <ul>
          <li> Copper Gutter</li>
          <li> Vinyl Gutter </li>
          <li> Zinc Gutter </li>
          <li> Aluminum Gutter </li>
          <li> Steel Gutter</li>
        </ul>
      </p>
    </div>
  );
  const row1 = (
    <>
      <ul>
        <li> Seamless Gutter Estimating </li>
        <li> K-Style Gutter Estimating </li>
      </ul>
    </>
  );

  const row2 = (
    <>
      <ul>
        <li>Sectional Gutter Estimating </li>
        <li> Half Round Gutter Estimating </li>
      </ul>
    </>
  );

  const row3 = (
    <>
      <ul>
        <li> Gutter Hamlet Estimating </li>
      </ul>
    </>
  );

  const description = (
    <p className=" paragrapg text-center">
      {" "}
      We are efficient enough to deal with all types of Gutter styles for gutter
      estimating services. For example, our gutter cost estimator deals with the
      following styles of gutter for gutter takeoff.
    </p>
  );

  const text4 = (
    <div className=" p-4">
      <CommonHeading heading="Gutter Costs" />
      <p className=" paragrapg">
        Our expert gutter cost estimators manage to evaluate your gutter
        installation cost, including its design, material and style. Of course,
        it isn’t simple for any common gutter estimator, but our team of
        well-known gutter estimators manages to select the right type of gutter
        for your home or any commercial building. In addition, we will
        efficiently evaluate different roof slopes to drain off the water from
        the roof, and its different styles will evacuate water from your roof
        and house.
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/GutterHTHI1.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">{text2}</div>
      <BlueRows
        row1={row1}
        row2={row2}
        row3={row3}
        description={description}
        heading="Gutter Styles"
      />
      <div className=" container-md mt-5">
        <HalfTextHalfOffComponent text={text4} />
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
