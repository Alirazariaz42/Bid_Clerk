import React from "react";
import { CommonHeading } from "./CommonHeading";

export const WorkingProcess = () => {
  return (
    <div>
      <div className=" text-center mb-4">
        {/* <CommonHeading heading="" /> */}
        <p className=" fs-2 fw-semibold CommonHeadingStyleContainer">
          <span className="CommonHeadingStyle">Steps for Estimation</span>
        </p>
        <p className=" paragrapg">
          {" "}
          <i>WORKING PROCESS</i>
        </p>
      </div>
      <div
        className=" d-flex justify-content-center"
        style={{ gap: "10px", flexWrap: "wrap" }}
      >
        <div>
          <div class="card2">
            <div class="card-inner2">
              <div class="card-front2">
                <img src={require("../../Images/BP1.png")} alt="" />
                <p>Project</p>
              </div>
              <div class="card-back2">
                <p>
                  Avail yourself of the option to either upload your plans
                  directly or forward them via email to
                  <a
                    className=" text-light text-decoration-none"
                    href="mailto:Davidson@bidclerkestimating.com"
                  >
                    {" "}
                    <span>Davidson@bidcle</span> <br />
                    <span>rkestimating.com</span>
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card2">
            <div class="card-inner2">
              <div class="card-front2">
                <img src={require("../../Images/BP2.png")} alt="" />
                <p>Reviewing</p>
              </div>
              <div class="card-back2">
                <p>
                  Upon submission of the proposal, our team thoroughly examines
                  the drawings provided by you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card2">
            <div class="card-inner2">
              <div class="card-front2">
                <img src={require("../../Images/BP3.png")} alt="" />
                <p>Approval</p>
              </div>
              <div class="card-back2">
                <p>
                  Following our thorough review, we will furnish you with a
                  comprehensive fee proposal for your careful consideration and
                  approval.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card2">
            <div class="card-inner2">
              <div class="card-front2">
                <img src={require("../../Images/BP4.png")} alt="" />
                <p>RFI\Clarification</p>
              </div>
              <div class="card-back2">
                <p>
                  The RFI email will always be sent to you if anything is
                  unclear in the plans/drawings/notes, or if required with your
                  approval we can complete the job with appropriate assumptions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card2">
            <div class="card-inner2">
              <div class="card-front2">
                <img src={require("../../Images/BP5.png")} alt="" />
                <p>Submission</p>
              </div>
              <div class="card-back2">
                <p>
                  Our team delivers detailed estimates for materials and labor
                  in EXCEL format, tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
