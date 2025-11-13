import React from "react";
import "./CostEstimation.css";
import { CommonHeading } from "../Components/CommonComponents/CommonHeading";
import { WhyWorkWithUs } from "../Components/CommonComponents/WhyWorkWithUs";
import { HalfTextHalfImg2 } from "../Components/CommonComponents/HalfTextHalfImg2";
import { HalfImgHalfText } from "../Components/CommonComponents/HalfImgHalfText";
import { Banner } from "../Components/CommonComponents/Banner";
import { SoftwareWeUse } from "../Components/CommonComponents/SoftwareWeUse";
import { WorkingProcess } from "../Components/CommonComponents/WorkingProcess";
import { OurRange } from "../Components/CommonComponents/OurRange";
import { CommonContactUs } from "../Components/CommonComponents/CommonContactUs";
import { Link } from "react-router-dom";
export const CostEstimation = () => {
  const text = (
    <>
      <p className="paragraph">
        <b style={{ color: "#076E9A" }}>Bidclerk Estimating</b>, a trusted name
        in the construction industry, specializes in providing accurate and
        reliable cost estimating services. With our experienced team of
        estimators, we deliver precise estimates for projects of all sizes and
        complexities. From detailed blueprint analysis to timely delivery, we
        ensure client satisfaction every step of the way. Choose{" "}
        <b style={{ color: "#076E9A" }}>Bidclerk Estimating</b> for your project
        and experience excellence in cost estimating. Contact us via
        <a
          className=" text-decoration-none"
          href="mailto:Davidson@bidclerkestimating.com"
        >
          {" "}
          <span style={{ color: "#028EC9" }}>
            {" "}
             Davidson@bidclerkestimating.com{" "}
          </span>
        </a>
         or{" "}
        <a className=" text-decoration-none" href="tel:+1 917 300 1079">
          <span style={{ color: "#028EC9" }}>  +1 917 300 1079.</span>
        </a>
        <br />
        <span className=" fw-semibold mt-2">
          Understanding Your Needs: Tailored Construction Cost Estimating
          Services:
        </span>
        <br />
        <span className=" row w-100 mt-2">
          <span className="col-md-6 col-12">
            <ul className="  text-capitalize">
              <li>General Contractors</li>
              <li>Subcontractors</li>
              <li>Projects managers</li>
              <li>investors</li>
              <li>Architects</li>
            </ul>
          </span>
          <span className="col-md-6 col-12">
            <ul className="  text-capitalize">
              <li>home builders</li>
              <li>owners</li>
              <li>Developers</li>
              <li>vendors</li>
            </ul>
          </span>
        </span>
      </p>
    </>
  );
  const text2 = (
    <div>
      <CommonHeading heading="Key Benefits of Cost Estimating Services" />
      <p className=" paragrapg">
        <b>Accurate Budgeting: </b>Our services provide precise estimates,
        allowing clients to plan their budgets effectively and avoid cost
        overruns.
        <br />
        <b>Time Savings: </b> By outsourcing estimating tasks to us, clients can
        save valuable time and focus on other aspects of their projects.
        overruns.
        <br />
        <b>Enhanced Decision-Making: </b>With detailed cost breakdowns and
        analysis, clients can make informed decisions throughout the
        construction process, leading to better outcomes.
        <br />
        <b>Competitive Advantage: </b> Our accurate estimates give clients a
        competitive edge, helping them win more bids and secure profitable
        projects.
        <br />
        <b>Risk Mitigation: </b>By identifying potential cost risks early on,
        our services help clients mitigate financial uncertainties and ensure
        project success.
        <br />
      </p>
    </div>
  );
  const text3 = (
    <div>
      {/* <CommonHeading heading="" /> */}
      <h3 className=" fs-2 fw-semibold  CommonHeadingStyleContainer">
        <span className="CommonHeadingStyle">
          Our Approach to Construction Cost Estimating Services
        </span>
      </h3>
      <p className=" paragrapg">
        At <b style={{ color: "#028ec9" }}>BidClerk Estimating,</b> our approach
        to construction cost estimating is grounded in precision, efficiency,
        and client satisfaction. Utilizing our extensive experience and advanced
        tools, we meticulously analyze project requirements to ensure
        comprehensive cost coverage. Our commitment to timely delivery
        guarantees smooth project planning and execution. Trust us to provide
        reliable and transparent cost Estimating services every step of the way,
        ensuring your project's success and satisfaction.
      </p>
    </div>
  );
  const NycText = (
    <>
      <div>
        <h2 className=" text-capitalize">
          {" "}
          <span style={{ color: "#028EC9" }}>Construction Estimating </span>
          services NYC
        </h2>
        <br />
        <p className=" paragrapg">
          If you're in need of Construction Estimating services in New York,
          look no further than{" "}
          <span style={{ color: "#028EC9", fontWeight: "600" }}>
            BidClerk Estimating{" "}
          </span>
          . Our expert team is dedicated to providing accurate and reliable
          estimates tailored to your project's requirements.
        </p>
        <Link to="/construction-estimating-services-nyc/">
          <button class="btnshining fw-semibold">
            <i class="animation"></i>Read More
            <i class="animation"></i>
          </button>
        </Link>
      </div>
    </>
  );
  return (
    <div
      className="animate__animated animate__zoomIn "
      style={{ marginTop: "80px" }}
    >
      <div className=" container-md ">
        {/* <CommonHeading heading="" /> */}
        <h1 className="CommonHeadingStyleContainer">
          <span className="CommonHeadingStyle">
            Construction Cost Estimating Services
          </span>
        </h1>
        <HalfTextHalfImg2
          text={text}
          src={require("../Images/CostEstimationHTHI.png")}
        />
      </div>
      <WhyWorkWithUs />
      <div className=" container-md mt-4 mb-4">
        <div className=" text-center"></div>
        <HalfImgHalfText
          text={text2}
          src={require("../Images/CostestimationHTHI2.png")}
        />
      </div>
      {/* <Banner /> */}
      <Banner />
      <div className=" container-md mt-4 mb-2">
        <HalfTextHalfImg2
          text={text3}
          src={require("../Images/TakeOffHTHI2.png")}
        />
        <div className=" mt-3">
          <OurRange />
        </div>

        <div className=" container-md mt-4 mb-2">
          <HalfTextHalfImg2
            text={NycText}
            src={require("../Images/ServiceNYCIMG.png")}
          />
        </div>
        <SoftwareWeUse />
      </div>

      <div className=" mt-0 mb-5">
        <WorkingProcess />
      </div>
      <CommonContactUs />
    </div>
  );
};
