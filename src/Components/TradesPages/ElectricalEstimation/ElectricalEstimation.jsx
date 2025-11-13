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

export const ElectricalEstimation = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {/* <CommonHeading heading="Electrical Estimating Services" /> */}
      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            Electrical Estimating Services
            </span>
          </h1>
      <p className=" p-3 paragrapg">
        At&nbsp;
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        offers MEP estimating services for mechanical contractors. Our expert we
        specialize in comprehensive electrical estimating services, covering
        everything from low-voltage solutions to instrumentation and control
        takeoffs. With our team's expertise and collaboration with clients, we
        ensure precise outputs tailored to each project's unique needs. Our
        experienced professionals utilize cutting-edge electrical takeoff
        software to deliver accurate estimates, helping you secure successful
        bids.
      </p>
    </div>
  );
  const text2 = (
    <div>
      <CommonHeading heading="Residential Electrical Estimating Services " />
      <p className=" paragrapg">
        {" "}
        If you're involved in home-based electrical projects, our services can
        provide valuable electrical projections for procurement and tendering.
        Our dedicated team specializes in residential electrical estimation for
        various projects, including home enhancements, new constructions,
        eco-friendly homes, smart houses, and more.
      </p>

      <CommonHeading heading="Industrial Electrical Estimating Services " />
      <p className=" paragrapg">
        {" "}
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        is giving the services of estimation of electrical maintenance, design,
        fabrication, and all about the installation of the system. From the
        power generation to petrochemicals, from oil and gas to refinery and
        biofuels, we are covering every aspect for you. It means that you can
        get every electrical estimate from our platform.
      </p>
    </div>
  );

  const text4 = (
    <div className=" p-4">
      <CommonHeading heading="Why Choose Us?" />
      <p className=" paragrapg">
        This is a question on your mind, right? Well, we've got the answer. At&nbsp;
        <span style={{ color: "#076e9a", fontWeight: "600" }}>
          BidClerk Estimating
        </span>{" "}
        , we pride ourselves on our expertise and experience. With our skilled
        team and cutting-edge software, we provide accurate estimations quickly.
        Plus, we offer affordable rates and top-notch quality. Our satisfied
        clients and excellent service speak volumes. If you need all these
        benefits under one roof, we're here for you. Reach out to us for
        outsourced electrical estimation.
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/ElectricalHTHI1.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <div>
          <CommonHeading heading="Electrical Commercial Estimating Services" />
          <p className=" paragrapg">
            Our experts handle all types of complex commercial electrical
            systems with ease, providing innovative solutions with a precise
            engineering approach. From small system estimates to major upgrades
            and installations for large commercial spaces, we've worked on
            projects ranging from millions of dollars.
            <br />
            Our commercial electrical projects span high-rise buildings,
            offices, warehouses, institutional buildings, healthcare facilities,
            cinemas, and more. Additionally, we cover various electrical systems
            including HVAC wiring and controls, alarms and emergency controls,
            power generation and distribution, temperature controls, geothermal
            electric systems, integrated wiring systems, walk-in coolers and
            chillers, networks and communication, and more.
          </p>
        </div>
        <HalfImgHalfText
          text={text2}
          src={require("../../../Images/ElectricalHTHI2.png")}
        />
      </div>

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
