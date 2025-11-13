import React from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import "./Home.css";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import { Link } from "react-router-dom";
import { Banner } from "../CommonComponents/Banner";
import { WorkingProcess } from "../CommonComponents/WorkingProcess";
import { CommonContactUs } from "../CommonComponents/CommonContactUs";
import CostEstimation from "../../Images/CostEstimation.png";
import Planning from "../../Images/Planning.png";
import TakeOff from "../../Images/TakeOff.png";
import CPMScheduling from "../../Images/CPMScheduling.png";
import { HalfTextHalfImg2 } from "../CommonComponents/HalfTextHalfImg2";
import { ReviewCard } from "../CommonComponents/ReviewCard";
import { useContext } from "react";
import { MyContext } from "../Store/MyContext";
import "animate.css";

export const Home = () => {
  const contextvalue = useContext(MyContext);
  const changeFunction = contextvalue.changefunction;
  const NycText = (
    <>
      <div>
        <h2 className=" ">
          {" "}
          <span style={{ color: "#028EC9" }}>Construction Estimating </span>
          Services NYC
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
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const ReviewCardArray = [
    {
      comments:
        "  BidClerk Estimating provided accurate cost estimates for our project, helping us stay within budget and delivering high-quality results ontime.",
      Name: "John Doe",
      Designation: "Project Manager",
      Stars: require("../../Images/5Stars.png"),
      DP: require("../../Images/ReviewCardPic1.png"),
    },
    {
      comments:
        "Working with BidClerk Estimating was a breeze. Their attention to detail and professionalism made the construction estimating process smooth and efficient.",
      Name: "Sarah Smith",
      Designation: "Architect",
      Stars: require("../../Images/5Stars.png"),
      DP: require("../../Images/ReviewCardPic2.png"),
    },
    {
      comments:
        "BidClerk Estimating expertise in construction estimating saved us time and money. Their precise estimates allowed us to plan effectively and complete our project successfully.",
      Name: "David Johnson",
      Designation: "Contractor",
      Stars: require("../../Images/5Stars.png"),
      DP: require("../../Images/ReviewCardPic3.png"),
    },
    {
      comments:
        "We highly recommend BidClerk Estimating for their reliable and accurate estimating services. Their team goes above and beyond to ensure client satisfaction.",
      Name: "Emily Jones",
      Designation: "Property Developer",
      Stars: require("../../Images/4Stars.png"),
      DP: require("../../Images/ReviewCardPic4.png"),
    },
    {
      comments:
        "BidClerk Estimating attention to detail and expertise in construction estimating helped us make informed decisions and achieve our project goals efficiently.",
      Name: "Alex Patel",
      Designation: "Project Owner",
      Stars: require("../../Images/4Stars.png"),
      DP: require("../../Images/ReviewCardPic5.png"),
    },
  ];
  const text = (
    <div>
      <div className=" text-center">
        <CommonHeading heading="  Construction Estimating Services" />
      </div>
      <p className=" paragraph">
        Are you looking for a reliable platform for construction estimating
        services?{" "}
        <span className=" fw-semibold" style={{ color: "#076E9A" }}>
          {" "}
          BidClerk Estimating
        </span>{" "}
        offers comprehensive estimating services tailored to your needs. Our
        experienced team guarantees successful bid outcomes.
      </p>
      {/* <br /> */}
      <p className=" paragraph">
        Our experts are proficient in industry-leading software like Bluebeam,
        Planswift and On Screen Takeoff. With ongoing training, we ensure
        accurate use of the latest versions, maintaining global standards.
      </p>
    </div>
  );

  const Img = (
    <>
      <img
        src={require("../../Images/man-s-hand-holding-house-model-blueprint-office 1.png")}
        alt="construction-estimating-services"
        className="HTHI-Container"
      />
    </>
  );
  const text1 = (
    <div className=" mt-4">
      <p className=" paragrapg fw-semibold m-0 ">
        Dedicated Customer Commitment
      </p>
      <p className=" paragrapg ">
        Rely on our steadfast dedication to your satisfaction. We are committed
        to fulfilling your requirements and delivering unparalleled quality in
        all our Construction Estimating services.
      </p>
      <p className=" paragrapg fw-semibold m-0">
        Reliable Quality Control System
      </p>
      <p className=" paragrapg">
        Rely on our meticulous approach to deliver superior Estimating
        solutions. We prioritize quality at every stage to ensure excellence in
        meeting your requirements.
      </p>
      <p className=" paragrapg fw-semibold m-0">Ensured 100% Satisfaction</p>
      <p className=" paragrapg">
        Experience assured satisfaction with our premium Estimating solutions.
        We take pride in delivering excellence in every project, ensuring your
        complete contentment.
      </p>
    </div>
  );
  return (
    <div>
      <div className="HeroSection  animate__animated animate__backInLeft">
        <div className=" contentSection animate__animated animate__backInLeft">
          <h1 className=" text-capitalize   fs-2">
            {" "}
            Transforming Your Projects with Expert Construction Estimating
            Services
          </h1>
          <p className="paragrapg ">
            <span className=" fw-semibold" style={{ color: "#076E9A" }}>
              BidClerk Estimating:
            </span>
            &nbsp; Simplifying Bid Estimation for Busy Contractors
          </p>
          <p className=" text-uppercase paragrapg">
            GET{" "}
            <span className=" fw-semibold" style={{ color: "#028EC9" }}>
              40% OFF
            </span>{" "}
            ON YOUR FIRST ESTIMATE
          </p>
          <Link to="/Services">
            {" "}
            <button className="CommonBtns"> Our Services</button>
          </Link>
          <a href="tel:+1 917 300 1079">
            {" "}
            <button className="CommonBtns2"> Call Now</button>
          </a>
        </div>
      </div>
      <div className=" container">
        {/* <h2 className="CommonHeadingStyle"></h2> */}
        <div className="">
          <HalfTextHalfImg text={text} Img={Img} />
          <div className=" text-center">
            <CommonHeading heading="our services" />
          </div>
          <div className=" row p-5 pt-0 m-0 w-100 ">
            <div className=" col-lg-4 col-md-6 col-12 d-flex  justify-content-center  ">
              <div className=" ServicesCardContainer1">
                <Link to="/CostEstimation">
                  <div className="costestimationCard">
                    <div
                      style={{
                        backgroundColor: "white",
                        paddingTop: "5px",
                        paddingBottom: "4px",
                      }}
                    >
                      <span className="h4 m-0"> Cost Estimating Services</span>
                    </div>
                    <p className=" pt-2">
                      Accurate estimates for your project's success. Explore our
                      services to learn more.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-12 d-flex  justify-content-center ">
              <div className=" ServicesCardContainer2">
                <Link to="/ConstructionTakeOff">
                  <div className="costestimationCard">
                    <div
                      style={{
                        backgroundColor: "white",
                        paddingTop: "5px",
                        paddingBottom: "4px",
                      }}
                    >
                      <span className=" h4 m-0">
                        {" "}
                        Construction Takeoff Services{" "}
                      </span>
                    </div>
                    <p className=" pt-2">
                      Efficient takeoff services for your construction needs.
                      Explore our services to learn more.
                    </p>
                  </div>
                </Link>
              </div>{" "}
            </div>
            <div className=" col-lg-4 col-md-6 col-12 d-flex  justify-content-center ">
              {" "}
              <div
                // style={{ backgroundImage: `url(${CPMScheduling})` }}
                className=" ServicesCardContainer3"
              >
                <Link to="/CPMScheduling">
                  <div className="costestimationCard">
                    <div
                      style={{
                        backgroundColor: "white",
                        paddingTop: "5px",
                        paddingBottom: "4px",
                      }}
                    >
                      <span className=" h4 m-0"> CPM Scheduling </span>
                    </div>
                    <p className=" pt-2">
                      Expert CPM scheduling solutions for streamlined project
                      management. Discover more.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 col-12 d-flex  justify-content-center ">
              {" "}
              <div
                // style={{ backgroundImage: `url(${Planning})` }}
                className=" ServicesCardContainer4"
              >
                <Link to="/Planning">
                  <div className="costestimationCard">
                    <div
                      style={{
                        backgroundColor: "white",
                        paddingTop: "5px",
                        paddingBottom: "4px",
                      }}
                    >
                      <span className=" m-0 h4"> Planning</span>
                    </div>
                    <p className=" pt-2">
                      Comprehensive planning solutions tailored to your
                      project's needs. Find out more.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" col-lg-8 col-sm-12 d-flex  justify-content-center ">
              <div className=" ServiceslastCardContainer">
                <p className=" m-0 p-3">
                  As verified and licensed professionals, we pride ourselves on
                  delivering trusted services across a spectrum of disciplines.
                  From precise cost estimating and meticulous construction
                  takeoff to expert CPM scheduling and comprehensive planning,
                  our team is dedicated to ensuring the success of your
                  projects.
                </p>
                <div className=" text-center">
                  <Link to="/Services">
                    {" "}
                    <button class="btnshining fw-semibold">
                      <i class="animation"></i>Read More
                      <i class="animation"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" width50">
          <h3>
            Why Choose{" "}
            <span style={{ color: "#028EC9" }}>
              BidClerk Estimating for Your Project Needs?
            </span>
          </h3>
        </div>
        <div>
          <HalfTextHalfImg2
            text={text1}
            src={require("../../Images/YChooseHTHI.png")}
          />
        </div>
      </div>
      {/* <Banner /> */}
      <div>
        <div className=" SERVICESNYCContainer">
          <div className="  NYCContainer">
            <h3 className=" fs-2 ">Construction Estimating Services NYC</h3>
            <p className=" paragrapg">
              {" "}
              If you are planning to get the Construction Estimating services in
              New York, then you should contact{" "}
              <span style={{ color: "#028EC9", fontWeight: "600" }}>
                {" "}
                BidClerk Estimating
              </span>
            </p>
            <button onClick={changeFunction} class="btnshining fw-semibold">
              <i class="animation"></i>CONTACT US TODAY
              <i class="animation"></i>
            </button>
            <p className=" paragrapg mt-3  fw-semibold">
              <a
                className=" text-decoration-none text-light"
                href="tel:+1 917 300 1079"
              >
                {" "}
                <img
                  className=" d-inline"
                  src={require("../../Images/CallIcon.png")}
                  alt=""
                />{" "}
                +1 917 300 1079
              </a>
            </p>
            <p className=" paragrapg  fw-semibold">
              {" "}
              <a
                className=" text-decoration-none text-light"
                href="mailto:Davidson@bidclerkestimating.com"
              >
                <img
                  className="  d-inline"
                  src={require("../../Images/MailIcn.png")}
                  alt=""
                />{" "}
                Davidson@bidclerkestimating.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=" container-md mt-4 mb-4">
          <HalfTextHalfImg2
            text={NycText}
            src={require("../../Images/NYCHTHI.png")}
          />
        </div>
      </div>
      <div className=" container-md">
        <div className=" text-center">
          <CommonHeading heading=" Our Latest Work" />
        </div>
        <div className="row m-0 w-100 justify-content-center">
          <div className=" col-md-3 col-sm-6 col-12 mt-3 d-flex justify-content-center">
            {" "}
            <div>
              {" "}
              <img
                src={require("../../Images/Sample1.png")}
                className="sampleImgs"
                alt=""
              />{" "}
            </div>{" "}
          </div>
          <div className=" col-md-3 col-sm-6 col-12 mt-3 d-flex justify-content-center">
            {" "}
            <div>
              {" "}
              <img
                src={require("../../Images/Sample2.png")}
                className="sampleImgs"
                alt=""
              />{" "}
            </div>{" "}
          </div>
          <div className=" col-md-6 col-sm-6 col-12 d-flex justify-content-center mt-3">
            {" "}
            <div>
              {" "}
              <img
                src={require("../../Images/Sample3.png")}
                className="sampleImgs"
                alt=""
              />{" "}
            </div>{" "}
          </div>
          <div className=" col-md-6 col-sm-6 col-12 d-flex justify-content-center mt-3">
            {" "}
            <div>
              {" "}
              <img
                src={require("../../Images/Sample4.png")}
                className="sampleImgs"
                alt=""
              />{" "}
            </div>{" "}
          </div>
          <div className=" col-md-3 col-sm-6 col-12 d-flex justify-content-center mt-3">
            {" "}
            <div>
              {" "}
              <img
                src={require("../../Images/Sample5.png")}
                className="sampleImgs"
                alt=""
              />{" "}
            </div>{" "}
          </div>
          <div className=" col-md-3 col-sm-6 col-12 d-flex justify-content-center mt-3">
            {" "}
            <div>
              {" "}
              <img
                src={require("../../Images/Sample6.png")}
                className="sampleImgs"
                alt=""
              />{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      <div className=" container-md">
        <div>
          <CommonHeading
            class=" text-uppercase"
            heading=" faqs"
          ></CommonHeading>
          <div className=" row m-0 w-100 justify-content-center">
            <div className=" col-md-6 col-12">
              <div class="container my-2">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <p
                      class="accordion-header fs-2 m-0 fw-semibold"
                      id="flush-headingOne"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What services does BidClerk Estimating offer?
                      </button>
                    </p>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        We offer a range of services including cost estimating,
                        CPM scheduling, construction takeoff services, and
                        planning to help clients streamline their construction
                        projects and make informed decisions.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <p
                      class="accordion-header fs-2 m-0 fw-semibold"
                      id="flush-headingTwo"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        How can BidClerk Estimating help my construction
                        project?
                      </button>
                    </p>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Our team of experts can provide accurate cost estimates,
                        create detailed project schedules, perform comprehensive
                        construction takeoffs, and offer planning solutions
                        tailored to your project needs, ensuring efficiency and
                        success.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <p
                      class="accordion-header fs-2 m-0 fw-semibold"
                      id="flush-headingThree"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Why should I choose BidClerk Estimating for my
                        construction project?
                      </button>
                    </p>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        With years of experience and expertise in the industry,
                        <b style={{ color: "#028BC5" }}>
                          BidClerk Estimating
                        </b>{" "}
                        is committed to delivering reliable and accurate
                        services. We prioritize client satisfaction and strive
                        to exceed expectations in every project we undertake.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <p
                      class="accordion-header fs-2 m-0 fw-semibold"
                      id="flush-headingFour"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        How do I get started with BidClerk Estimating?
                      </button>
                    </p>
                    <div
                      id="flush-collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Getting started with{" "}
                        <b style={{ color: "#028BC5" }}>BidClerk Estimating</b>{" "}
                        is easy! Simply contact us to discuss your project
                        requirements, and our team will work with you to provide
                        personalized solutions that meet your needs and budget.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <p
                      class="accordion-header fs-2 m-0 fw-semibold"
                      id="flush-headingFive"
                    >
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Can I get a custom quote for my project?
                      </button>
                    </p>
                    <div
                      id="flush-collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Absolutely! We understand that every project is unique,
                        and we offer custom quotes tailored to your specific
                        requirements. Contact us today to get a personalized
                        quote for your construction project.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="text-center bidDiscountContainer">
                <h2 style={{ color: "#4AC9FF" }} className=" text-uppercase">
                  big discount!
                </h2>
                <p className=" paragrapg">
                  Why Are You Waiting For? Don‘t Waste Your Time. It’s Time To
                  Get Benefits From Limited Time Offer.
                </p>
                <p className=" paragrapg  text-uppercase">
                  Upload your plan and get a quote within 1 hour.
                </p>

                <div className=" text-center">
                  <button
                    onClick={changeFunction}
                    class="btnshining  fw-semibold"
                  >
                    <i class="animation"></i>Get 40% OFF
                    <i class="animation"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-3  container-fluid mb-4">
        <div className=" p-3 ">
          <Slider {...settings}>
            {ReviewCardArray.map((review) => (
              <div>
                <ReviewCard
                  comments={review.comments}
                  Name={review.Name}
                  DP={review.DP}
                  Designation={review.Designation}
                  Stars={review.Stars}
                />
              </div>
            ))}
          </Slider>
        </div>
        <WorkingProcess />
      </div>
      <CommonContactUs />
    </div>
  );
};
