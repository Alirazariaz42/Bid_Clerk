import React from "react";
import { HeroSection } from "../../CommonComponents/HeroSection";
import { CommonHeading } from "../../CommonComponents/CommonHeading";
import { HalfImgHalfText } from "../../CommonComponents/HalfImgHalfText";
import { Banner } from "../../CommonComponents/Banner";

import { WorkingProcess } from "../../CommonComponents/WorkingProcess";
import { SoftwareWeUse } from "../../CommonComponents/SoftwareWeUse";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { HalfTextHalfOffComponent } from "../../CommonComponents/HalfTextHalfOffComponent";
export const SiteWork = () => {
  const text = (
    <div
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="Sitework estimating services" />
      <p className=" p-3 paragrapg">
        {" "}
        <span style={{ color: "#076e9a" }}>BidClerk Estimating  </span>goes
        beyond just providing estimates – we allow siteWork contractors,
        landscaping contractors, land developers, general contractors, and site
        contractors to lead bids and streamline workflows. Our team of
        estimators uses latest and cost-effective software to accurately analyze
        drawings and plans, delivering precise takeoffs for materials and labor
        (including manhours) within 24-48 hour. Our Sitework Estimating Services
        understand the unique challenges faced by excavation contractors and
        give reliable and cost-effective extension, freeing up valuable time for
        your team to focus on managing busy sites Contact us
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
      style={{
        backgroundColor: "#f5f5f5b0",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <CommonHeading heading="Vital Role of General Requirements" />
      <p className=" p-3 paragrapg">
        {" "}
        General requirements are the backbone of any construction project,
        ensuring compliance with regulations and meeting project needs. They
        provide detailed estimates for materials, labor, and equipment, enabling
        informed decision-making. Clear communication and adherence to budget
        constraints ensure project success and client satisfaction.
      </p>
    </div>
  );
  const text3 = (
    <div>
      <CommonHeading heading="TAKE ADVANTAGE OF OUR SITEWORK ESTIMATING SERVICES" />
      <p className=" p-3 paragrapg">
        Our skilled professional estimators always do their best to give you
        outstanding services. Therefore you should take advantage of our
        services and make your construction super easy. Following are the
        services you would get from our site work estimator.
        <ul>
          <li> You would get a detailed summary of every material takeoff.</li>
          <li>Professionals would help you in getting the surface grading. </li>
          <li> Get the complete 3D visual reports.</li>
          <li>
            {" "}
            Complete estimation plan of landscaping with soil volumes such as
            hardscape, soft cape, irrigation, etc.{" "}
          </li>
          <li>
            {" "}
            You would get the details of the earth’s volume, a list of all the
            quantities, etc.{" "}
          </li>
          <li> You can easily convert the topological data into Civil 3D. </li>
        </ul>
      </p>
    </div>
  );
  const text4 = (
    <div>
      <CommonHeading heading="Who Have We Helped with Our General Requirements Services?" />
      <div className=" row m-0 w-100">
        <div className=" col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg text-uppercase">
            {" "}
            <li>Clearing & Demolition</li>
            <li>Earthwork</li>
            <li>Grading</li>
            <li>Drainage</li>
            <li>Utility Spoils</li>
            <li>Storm Sewer</li>
            <li>Water distribution</li>
            <li>Roadways</li>
            <li>Sidewalk</li>
            <li>Driveways</li>
            <li>Pavements</li>
          </ul>
        </div>
        <div className=" col-sm-6 col-12">
          {" "}
          <ul className=" paragrapg text-uppercase">
            {" "}
            <li> Site Furnishing</li>
            <li> Concrete Flatwork</li>
            <li>Retaining Walls</li>
            <li> Climbing Walls</li>
            <li> Fences & Gates</li>
            <li> Landscaping</li>
            <li> Irrigation</li>
            <li>Fountains</li>
            <li> Patio</li>
            <li>Gabions</li>
            <li>Docks</li>
          </ul>
        </div>
      </div>
    </div>
  );
  const text5 = (
    <div>
      <CommonHeading heading="Earth Work Estimation Services" />
      <p className=" paragrapg">
        Excavators, site engineers, and specialized contractors require
        earthwork estimating services to determine the overall cost of land
        preparation before beginning construction. BidClerk Estimating deliver
        timely and dependable earthwork volumes and material takeoffs for bid
        preparation, allowing them to fulfill important deadlines. Our earthwork
        estimate includes:
        <ul>
          <li> Site excavation report </li>
          <li> Cut/Fill Quantities </li>
          <li> Export or Import Quantities </li>
          <li> Volume Reports </li>
          <li>Top Soil Spreads </li>
        </ul>
      </p>
    </div>
  );
  return (
    <div style={{ marginTop: "70px" }}>
      <HeroSection
        text={text}
        src={require("../../../Images/SiteWorkHTHI.png")}
      />
      {/* <HalfImgHalfText
        text={text2}
        src={require("../../../Images/GRHIHT.png")}
      /> */}
      <div className=" container-md">
        <CommonHeading heading="Our SiteWork Estimating Services Portfolio" />
        <p className=" paragrapg">
          Each sitework project is unique. At{" "}
          <b style={{ color: "#076e9a", fontWeight: "600" }}>
            BidClerk Estimating,
          </b>
          , we use modern equipment and experienced estimators to analyze your
          drawings and plans thoroughly, providing accurate takeoffs for
          materials, labor, and more. Our services cover all aspects, including
          equipment, insurance, logistics, permits, and other expenses, giving
          you a clear picture of your project's total cost. Looking for
          cost-effective sitework estimating solutions?We provide flexible
          options to match your budget:
          <ul>
            <li> Cost-effective Solutions (check prices)</li>
            <li> Efficiency & Accuracy </li>
            <li> Fast Turnaround Times </li>
            <li>Confidentiality </li>
            <li> Certified Estimators</li>
            <li> 24/7 Support on Chat & Email</li>
          </ul>
        </p>
      </div>
      <Banner />
      <div className=" container-md">
        <HalfImgHalfText
          text={text3}
          src={require("../../../Images/SiteWorkHIHT.png")}
        />
        <HalfTextHalfOffComponent text={text4} />
        <HalfTextHalfImg2
          text={text5}
          src={require("../../../Images/SiteWorkHTHI6.png")}
        />
      </div>
      <div className=" container-md">
        <SoftwareWeUse />
      </div>
      <div className=" mb-4">
        <WorkingProcess />
      </div>

      <CommonContactUs />
    </div>
  );
};
