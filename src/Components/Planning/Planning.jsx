import React from "react";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import { HalfTextHalfImg2 } from "../CommonComponents/HalfTextHalfImg2";
import { WhyWorkWithUs } from "../CommonComponents/WhyWorkWithUs";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Banner } from "../CommonComponents/Banner";
import { SoftwareWeUse } from "../CommonComponents/SoftwareWeUse";
import { WorkingProcess } from "../CommonComponents/WorkingProcess";
import { CommonContactUs } from "../CommonComponents/CommonContactUs";
export const Planning = () => {
  const text = (
    <>
      <p className="paragraph">
        In project management, the first and most important step is planning.
        This involves creating a detailed layout for the project's progress.
        It's essential to understand that planning isn't the same as scheduling.
        Planning is like drawing up a detailed chart with project leads and
        construction teams, while scheduling is about turning that chart into a
        timeline with the help of scheduling professionals. So, planning sets
        the direction, while scheduling  
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
        <br />
        <span className=" fw-semibold mt-2">
          Understanding Your Needs: Tailored Construction Cost Estimating
          Services:
        </span>
        <br />
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
      </p>
    </>
  );
  const text2 = (
    <div>
      <CommonHeading heading="What is Construction Master Plan?" />
      <p className=" paragrapg">
        <b style={{ color: "#028ec9" }}> BidClerk Estimating</b> provides
        construction blueprints as a roadmap for project organization, planning,
        and execution, ensuring timely completion within budget. While the
        contracting scheme offers solutions, project execution addresses
        governmental, societal constraints, and legal requirements, adjusted as
        needed during the project lifecycle.
      </p>
    </div>
  );
  const text3 = (
    <p className=" paragrapg">
      <b> Clear Objectives: </b> Defining clear and achievable project goals to
      guide planning efforts. <br />
      <b> Thorough Scope Definition: </b> Clearly outlining the project's
      boundaries, deliverables, and requirements.
      <br />
      <b> Detailed Work Breakdown Structure: </b> Breaking down the project into
      smaller, manageable tasks for better organization and resource allocation.
      <br />
      <b> Accurate Time Estimation: </b> Estimating the time required for each
      task and milestone to create realistic schedules.
      <br />
      <b> Resource Allocation: </b> Effectively assigning and managing resources
      such as manpower, equipment, and materials.
      <br />
      <b> Risk Management: </b> Identifying and mitigating potential risks to
      minimize project disruptions.
      <br />
      <b> Communication Plan: </b>Establishing a framework for effective
      communication among project stakeholders to ensure transparency and
      collaboration.
    </p>
  );
  return (
    <div
      className="animate__animated animate__slideInLeft"
      style={{ marginTop: "80px" }}
    >
      <div className=" container-md">
        <CommonHeading heading="Planning" />
        <HalfTextHalfImg2
          text={text}
          src={require("../../Images/PlanningHTHI1.png")}
        />
      </div>
      <WhyWorkWithUs />
      <div className=" container-md mt-4 mb-4">
        <div className=" text-center">
          <CommonHeading heading="What is Construction Master Plan?" />
        </div>
        <HalfImgHalfText
          text={text2}
          src={require("../../Images/PlanningHTHI2.png")}
        />
      </div>
      {/* <Banner /> */}
      <Banner />
      <div className=" container-md">
        <CommonHeading heading="Key Elements of Effective Planning" />
        <HalfTextHalfImg2
          text={text3}
          src={require("../../Images/PlanningHTHI3.png")}
        />
        <SoftwareWeUse />
      </div>

      <div>
        <WorkingProcess />
      </div>
      <CommonContactUs />
    </div>
  );
};
