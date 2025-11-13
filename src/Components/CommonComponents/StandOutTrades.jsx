import React from "react";

export const StandOutTrades = () => {
  return (
    <div>
      <h4 className=" text-center text-dark mb-4 fw-semibold">
        Why BidClerk Estimating Stands Out For Your Trades
      </h4>
      <div
        className=" d-flex justify-content-center"
        style={{ gap: "10px", flexWrap: "wrap" }}
      >
        <div>
          <div class="card3">
            <div class="card-inner3">
              <div class="card-front3">
                <img src={require("../../Images/SOT1.png")} alt="" />
                <p>Specialization</p>
              </div>
              <div class="card-back3">
                <p>
                  BidClerk Estimating specializes in a wide range of trades,
                  ensuring that each aspect of your project receives expert
                  attention.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card3">
            <div class="card-inner3">
              <div class="card-front3">
                <img src={require("../../Images/SOT3.png")} alt="" />
                <p>Accuracy</p>
              </div>
              <div class="card-back3">
                <p>
                  Our team is known for its precise estimates and meticulous
                  attention to detail, ensuring that your project costs are
                  accurately calculated.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card3">
            <div class="card-inner3">
              <div class="card-front3">
                <img src={require("../../Images/SOT2.png")} alt="" />
                <p >Timeliness</p>
              </div>
              <div class="card-back3">
                <p>
                  We understand the importance of timely project delivery, and
                  our efficient processes ensure that your estimates are
                  delivered promptly, helping you stay on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="card3">
            <div class="card-inner3">
              <div class="card-front3">
                <img src={require("../../Images/SOT4.png")} alt="" />
                <p>Client Satisfaction</p>
              </div>
              <div class="card-back3">
                <p>
                  Our priority is client satisfaction, and we strive to exceed
                  expectations with our quality services and personalized
                  approach to each project.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div class="card2">
            <div class="card-inner2">
              <div class="card-front2">
                <img src={require("../../Images/BP5.png")} alt="" />
                <p>Front Side</p>
              </div>
              <div class="card-back2">
                <p>Back Side</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
