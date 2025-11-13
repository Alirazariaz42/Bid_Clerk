import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";
import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
export const Masonry = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* <CommonHeading heading="Masonry Estimating Services" /> */}
      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            Masonry Estimating Services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        {" "}
        <b style={{ color: "#076e9a" }}> BidClerk Estimating </b> should be your
        first choice for high-quality masonry estimating Services. Our extensive
        proficiency across the United States demonstrates our ability to provide
        accurate and timely estimates. Our expert masonry cost predictor is
        well-versed in Division 4, having worked with brickwork, CMU walls, and
        various masonry styles, among other things. Our dedicated Masonry
        Estimating Services team ensures perfection and precision in each
        evaluation by utilizing advanced tools such as OST(on-screen takeoff),
        Planswift, and Bluebeam, Feel free t Contact us  
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
    <div
    
    >
      <CommonHeading heading="The Range Of Masonry Estimating Services" />
      <p className=" p-3 paragrapg">
        {" "}
        At <b style={{ color: "#076e9a" }}> BidClerk Estimating </b>, we
        specialize in delivering precise masonry estimates tailored to your
        needs. With extensive experience in the AEC industry, our team ensures
        accuracy and client satisfaction.
        <ul>
          <li> Labor and material rates</li>
          <li>Man Hours</li>
          <li>Color-coded plans</li>
          <li>EXCEL spreadsheet</li>
          <li>Detailed summary </li>
          <li>Review of addendums</li>
        </ul>
      </p>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="Our Portfolio In Masonry Takeoff" />
      <p className=" p-3 paragrapg">
        We have served many contractors across the globe by providing highly
        precise and comprehensive estimates for home facades, flooring,
        chimneys, fireplaces, combustion chamber, patios, driveways, sidewalks,
        walls, and columns, etc. for the following projects:
        <ul>
          <li> Public </li>
          <li> Bridges </li>
          <li> Commercial </li>
          <li> Residential </li>
          <li> Institutional </li>
          <li>Industrial </li>
          <li> Institutional </li>
          <li> Educational </li>
          <li> Landscaping </li>
          <li> Restoration/Repair </li>
        </ul>
      </p>
    </div>
  );
  const text5 = (
    <div>
      <CommonHeading heading="What Do We Take In The Division 4 Masonry Trade?" />
      <div className=" row m-0 w-100">
        <div className=" col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg ">
            {" "}
            <li> CMU Masonry</li>
            <li> Glass unit masonry</li>
            <li> Clay unit masonry</li>
            <li> Architectural & glazed masonry</li>
            <li> Stonemasonry walls</li>
            <li> Granite</li>
            <li>Limestone</li>
            <li> Marble</li>
            <li> Sandstone</li>
            <li> Soapstone </li>
          </ul>
        </div>
        <div className=" col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg">
            {" "}
            <li>Slate</li>
            <li> Cast stone</li>
            <li> Mortar and grout</li>
            <li> Masonry Flashing</li>
            <li> Masonry Anchorage</li>
            <li> Masonry Insulation</li>
            <li> Chimney brick</li>
            <li> Brick tuckpointing</li>
            <li> brick wall tiles</li>
            <li> Brick Veneer</li>
            <li> Stucco work </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const text4 = (
    <div>
      <CommonHeading heading="WHAT MAKES YOU CHOOSE US?" />
      <p className=" p-3 paragrapg">
        Hiring a professional company for the Masonry estimating would need
        experienced engineers and highly experienced architects. So, our company
        has gathered all of them. They have gained a lot of reputation through
        giving outstanding service to clients. Moreover, our company provides
        many specific services that are hard to find on any other. We believe in
        saving the money of our clients. Therefore investing every single penny
        in us would not get wasted. We aim to facilitate you with valuable
        services.
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/MasnoryHTHI.png")}
      />
      <HalfImgHalfText
        text={text2}
        src={require("../../../Images/MAsonaryHTHI2.png")}
      />
      <Banner />
      <div className=" container-md">
        <HalfTextHalfImg2
          text={text3}
          src={require("../../../Images/MasonaryHTHI3.png")}
        />

        <HalfImgHalfText
          text={text4}
          src={require("../../../Images/MasonaryHTHI4.png")}
        />
        <HalfTextHalfOffComponent text={text5} />
      </div>

      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
