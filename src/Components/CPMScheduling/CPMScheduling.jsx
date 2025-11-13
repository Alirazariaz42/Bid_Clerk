import React from "react";
import "./CPMScheduling.css";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import { HalfTextHalfImg2 } from "../CommonComponents/HalfTextHalfImg2";
import { WhyWorkWithUs } from "../CommonComponents/WhyWorkWithUs";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Banner } from "../CommonComponents/Banner";
import { SoftwareWeUse } from "../CommonComponents/SoftwareWeUse";
import { WorkingProcess } from "../CommonComponents/WorkingProcess";
import { CommonContactUs } from "../CommonComponents/CommonContactUs";
export const CPMScheduling = () => {
  const text = (
    <>
      <p className="paragraph">
        At <b style={{ color: "#028EC9" }}>BidClerk Estimating,</b> we provide
        Critical Path Method (CPM) Scheduling services to streamline
        construction projects, ensuring timely completion and effective risk
        management. Trust us to simplify complex projects and help you achieve
        your goals efficiently. Contact us
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
    <>
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
    </>
  );
  const text3 = (
    <p className=" paragrapg">
      When creating a project timeline, we gather information from multiple
      sources, including contract documents and quotations. We determine
      installation procedures, labor assignments, durations, and financial
      details based on this data. Our management team oversees the entire
      process to ensure accuracy and efficiency.
    </p>
  );
  const text4 = (
    <div>
      <CommonHeading heading="Scheduling Software’s " />
      <p className="paragrapg">
        Our expert team is proficient in developing and monitoring schedules
        with the following construction consulting software:
      </p>
    </div>
  );
  return (
    <div
      className="animate__animated animate__slideInRight"
      style={{ marginTop: "80px" }}
    >
      <div className=" container-md">
        <CommonHeading heading="CPM SCHEDULING SERVICES" />
        <HalfTextHalfImg2
          text={text}
          src={require("../../Images/SheduilngHTHI.png")}
        />
      </div>
      <WhyWorkWithUs />
      <div className=" container-md mt-4 mb-4">
        <div className=" text-center">
          <CommonHeading heading="Maintaining" />
        </div>
        <HalfImgHalfText
          text={text2}
          src={require("../../Images/SchedulingHTHI2.png")}
        />
      </div>
      {/* <Banner /> */}
      <Banner />
      <div className=" container-md">
        <CommonHeading heading="Work Breakdown Structure (WBS)" />
        <p className=" paragrapg">
          Before starting the Primavera schedule, we need to create a Work
          Breakdown Structure (WBS). We organize and manage different WBS
          databases to help our clients manage their projects effectively.
        </p>
        <div className="WBS-Container">
          <div className=" WBSDiv">
            <div className=" row w-100 m-0 justify-content-center">
              <div
                className=" col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className=" text-center mt-4">
                  <h5>Activities</h5>
                  <p className=" paragrapg">
                    We break down tasks and provide Activity Codes for efficient
                    resource allocation in your construction project.
                  </p>
                </div>
              </div>

              <div
                className=" col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className=" text-center mt-4">
                  <h5>Schedule Baselines</h5>
                  <p className=" paragrapg">
                    We evaluate project risks using a 0 to 72 hazard rating
                    scale based on likelihood, cost, and timeline impact.
                  </p>
                </div>
              </div>

              <div
                className=" col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className=" text-center mt-4">
                  <h5>Risk</h5>
                  <p className=" paragrapg">
                    We assess construction project risks with a 0 to 72 hazard
                    rating scale, considering probability, cost, and timeline
                    impact.
                  </p>
                </div>
              </div>

              <div
                className=" col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className=" text-center mt-4">
                  <h5>Primavera Calendars </h5>
                  <p className=" paragrapg">
                    Calendars establish work schedules, categorizing into
                    Global, Project, and Resource types, ensuring consistency in
                    time management.
                  </p>
                </div>
              </div>

              <div
                className=" col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className=" text-center mt-4">
                  <h5>Activity Relationships </h5>
                  <p className=" paragrapg">
                    Project activities are sequenced for order using Primavera
                    P6, which categorizes connections into four types
                    <ul>
                      <li>Finish to Start (FS)</li>
                      <li>Start to Start (SS),</li>
                      <li>Finish to Finish (FF),</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div
                className=" col-md-4 col-sm-6 col-12"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className=" text-center mt-4">
                  <h5>Milestones</h5>
                  <p className=" paragrapg">
                    Milestones mark crucial events, facilitating project
                    tracking and status evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HalfTextHalfImg2
          text={text4}
          src={require("../../Images/Frame 1581.png")}
        />
      </div>

      <div className=" mt-5 mb-5">
        <WorkingProcess />
      </div>
      <CommonContactUs />
    </div>
  );
};
