import React from "react";

export const WhyWorkWithUs = () => {
  return (
    <div>
      <div className="WhyWorkWithUs text-center">
        <p className=" fw-semibold text-capitalize fs-3">Why Work with Us</p>
        <div className=" container-md">
          <div className=" mt-3 justify-content-center row w-100">
            <div className=" col-md-3 col-sm-6 col-12 p-md-0">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={require("../../Images/Accuracy And Efficency.png")}
                      height={75}
                      width={61}
                      alt=""
                    />
                    <p>Accuracy And Efficency</p>
                  </div>
                  <div class="flip-card-back">
                    {/* <p class="title">BACK</p> */}
                    <p>
                      Count on our estimating services for accuracy and
                      efficiency. Our skilled estimators deliver precise
                      estimates, helping you win bids with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-12 p-md-0">
              {" "}
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={require("../../Images/Dedicated Team.png")}
                      height={60}
                      width={101}
                      alt=""
                    />
                    <p> Dedicated Team</p>
                  </div>
                  <div class="flip-card-back">
                    {/* <p class="title">BACK</p> */}
                    <p>
                      Count on our dedicated team at BidClerk Estimating for
                      expert solutions tailored to your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-12 p-md-0">
              {" "}
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={require("../../Images/10 Years Experienced.png")}
                      height={60}
                      width={41}
                      alt=""
                    />
                    <p> 10 Years Experienced</p>
                  </div>
                  <div class="flip-card-back">
                    {/* <p class="title">BACK</p> */}
                    <p>
                      With 10 years of experience, BidClerk Estimating offers
                      tailored solutions to meet your needs with precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-3 col-sm-6 col-12 p-md-0">
              {" "}
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={require("../../Images/Fast Turnaround.png")}
                      height={60}
                      width={61}
                      alt=""
                    />
                    <p>Fast Turnaround</p>
                  </div>
                  <div class="flip-card-back">
                    {/* <p class="title">BACK</p> */}
                    <p>
                      BidClerk Estimating ensures swift and reliable solutions,
                      optimizing your project's efficiency and saving you
                      valuable time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
