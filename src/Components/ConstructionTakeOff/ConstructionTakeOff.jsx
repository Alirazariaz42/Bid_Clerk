import React from "react";
import "./ConstructionTakeOff.css";
import { CommonHeading } from "../CommonComponents/CommonHeading";
import { HalfTextHalfImg2 } from "../CommonComponents/HalfTextHalfImg2";
import { WhyWorkWithUs } from "../CommonComponents/WhyWorkWithUs";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import { Banner } from "../CommonComponents/Banner";
import { SoftwareWeUse } from "../CommonComponents/SoftwareWeUse";
import { WorkingProcess } from "../CommonComponents/WorkingProcess";
import { OurRange2 } from "../CommonComponents/OurRange2";
import { CommonCard } from "../CommonComponents/CommonCard";
import { CommonContactUs } from "../CommonComponents/CommonContactUs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const ConstructionTakeOff = () => {
  const text = (
    <>
      <p className="paragraph">
        At <b style={{ color: "#028ec9" }}>BidClerk Estimating,</b> we focus on
        delivering reliable Construction Takeoff Services, including Quantity
        Takeoff and Material Takeoff. Our aim is to guarantee the success of
        your project from the start. With over ten years of experience, we
        understand the changing market conditions, allowing us to handle
        projects of any complexity. Contact us via
        <span style={{ color: "#028ec9" }}>
          {" "}
          Davidson@bidclerkestimating.com {" "}
        </span>
        or
        <span style={{ color: "#028ec9" }}> +1 917 300 1079 </span>
        <br />
        <span className=" fw-semibold mt-2">
          Considering Your Project? Tailored Construction Takeoff Services:
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
            <ul className=" text-capitalize">
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
      <CommonHeading heading="What Do Our Construction Takeoff Services Include?" />

      <p className=" paragrapg">
        When you're planning your construction project, you want a reliable
        partner who understands your needs. That's where{" "}
        <b style={{ color: "#028bc5" }}>Bidclerk Estimating </b>
        comes in. We provide accurate and hassle-free Construction Takeoff
        Services, ensuring your project starts smoothly.
        <br />
        We offer our services at a very affordable price. Our experience in this
        field enables us to provide the best services for you.
        <ul>
          <li>Material Quantification</li>
          <li>Lumber takeoffs</li>
          <li>Profit percentage</li>
          <li>Taxes List</li>
          <li>Material lists</li>
        </ul>
      </p>
    </div>
  );
  const text3 = (
    <p className=" paragrapg">
      We help clients all over the United States with our Estimating services.
      Whether you're in any part of the country or bidding on any project, we've
      got you covered. We specialize in figuring out how much material and labor
      you'll need for your construction project. Our team will go through the
      blueprints and list all the materials you need in a format you can easily
      use, like Microsoft Excel. We're fast and accurate, making sure you have
      everything you need to build. Plus, we organize the materials by location,
      making it simple for your team to know where everything goes.
    </p>
  );

  const redirect_to_Quantities = useNavigate();
  const redirect_to_QuantitiesClick = () => {
    redirect_to_Quantities("/quantity-takeoff-services/");
  };
  const redirect_to_Material = useNavigate();
  const redirect_to_MaterialClick = () => {
    redirect_to_Quantities("/material-takeoff-services/");
  };
  return (
    <div
      className="animate__animated animate__zoomIn"
      style={{ marginTop: "80px" }}
    >
      <div className=" container-md">
        <CommonHeading heading="Construction Takeoff Services" />
        <HalfTextHalfImg2
          text={text}
          src={require("../../Images/ConstructionTakeOffHTHI.png")}
        />
      </div>
      <div className=" container-md text-center mt-4 mb-4">
        <CommonHeading heading="Primary Takeoff Services" />

        <div className=" row w-100 m-0 justify-content-center ">
          <div className=" col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center mt-2">
            {" "}
            <Link
              className=" text-decoration-none"
              onClick={redirect_to_QuantitiesClick}
            >
              <div>
                {" "}
                <CommonCard
                  src={require("../../Images/Qto.png")}
                  title="Quantity Takeoff"
                  description="Discover the essentials of Quantity Takeoff services, a key element in project estimation. Learn the importance and methods in a simple format."
                />
              </div>
            </Link>
          </div>
          <div className=" col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center mt-2">
            {" "}
            <Link
              className=" text-decoration-none"
              onClick={redirect_to_MaterialClick}
              to=""
            >
              <div>
                {" "}
                <CommonCard
                  src={require("../../Images/Mto.png")}
                  title="Material Takeoff"
                  description="Discover the essentials of Material Takeoff services, vital for accurate project estimation Learn the importance and methods in a simple format."
                />{" "}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <WhyWorkWithUs />
      <div className=" container-md mt-4 mb-4">
        <HalfImgHalfText
          text={text2}
          src={require("../../Images/TakeOffHTHI3.png")}
        />
      </div>
      {/* <Banner /> */}
      <Banner />
      <div className=" container-md">
        <CommonHeading heading="Construction Takeoff Service Area" />
        <HalfTextHalfImg2
          text={text3}
          src={require("../../Images/TakeHTHI4.png")}
        />

        <div className=" mt-5 mb-5">
          <OurRange2 />
        </div>
        <SoftwareWeUse />
      </div>

      <div className=" mt-5 mb-5">
        <WorkingProcess />
      </div>
      <CommonContactUs />
    </div>
  );
};
