import React from "react";
import { CommonCard } from "../../CommonComponents/CommonCard";
import { HalfTextHalfImg2 } from "../../CommonComponents/HalfTextHalfImg2";
import { CommonHeading } from "../../CommonComponents/CommonHeading";

import { TURNAROUNDTIME } from "../../CommonComponents/TURNAROUNDTIME";
import { Banner } from "../../CommonComponents/Banner";
import { CommonContactUs } from "../../CommonComponents/CommonContactUs";
// import GRbg from "../../../Images/GRbg.png";
// import GRbg2 from "../../Images/GRbg.png";

export const Trade = () => {
  const tradeArray = [
    {
      ResirectTo: "/general-requirements/",
      Title: " General Requirements",
      Description:
        " Thorough project analysis and accurate estimates for informed decisions.  ",
      imgpath: require("../../../Images/GRbg.png"),
    },
    {
      ResirectTo: "/lumber-takeoff-services/",
      Title: "Lumber Takeoff",
      Description:
        "  Lumber Takeoff: Precise measurements for efficient construction.",
      imgpath: require("../../../Images/TBG2.png"),
    },
    {
      ResirectTo: "/thermal-moisture-protection-estimating-services/",
      Title: "Thermal and Moisture Protection",
      Description:
        "Thermal and Moisture Protection: Ensuring durability and comfort in every structure. ",
      imgpath: require("../../../Images/TBG3.png"),
    },
    {
      ResirectTo: "/framing-estimating-services/",
      Title: "Framing Estimating",
      Description: " Framing Estimating: Precision in structural planning. ",
      imgpath: require("../../../Images/TBG4.png"),
    },
    {
      ResirectTo: "/furnishing-estimating-services/",
      Title: "Furnishings",
      Description:
        " Furnishings: Enhancing spaces with quality interior solutions. ",
      imgpath: require("../../../Images/TBG5.png"),
    },
    {
      ResirectTo: "/masonry-estimating-services/",
      Title: "Masonry",
      Description:
        "Masonry: Reliable solutions for durable and aesthetic structures.  ",
      imgpath: require("../../../Images/TBG6.png"),
    },
    {
      ResirectTo: "/concrete-estimating-services/",
      Title: "Concrete",
      Description: "Concrete: Solid foundations built to last.  ",
      imgpath: require("../../../Images/TBG7.png"),
    },
    {
      ResirectTo: "/sitework-estimating-services/",
      Title: " SiteWork",
      Description:
        "  Site Works: Efficient management and execution of on-site tasks.",
      imgpath: require("../../../Images/TBG8.png"),
    },
    {
      ResirectTo: "/metals-estimating-services/",
      Title: "  Metals",
      Description: "Metals: Strength and durability in every structure.  ",
      imgpath: require("../../../Images/TDBG9.png"),
    },
    {
      ResirectTo: "/equipment-estimating-services/",
      Title: "Equipment ",
      Description:
        "  Equipment: Reliable machinery for efficient project execution.",
      imgpath: require("../../../Images/TDBG10.png"),
    },
    {
      ResirectTo: "/mep-estimating-services/",
      Title: " MEP",
      Description:
        " Specialties: Customized solutions for distinct MEP estimating requirements. ",
      imgpath: require("../../../Images/TDBG11.png"),
    },
    {
      ResirectTo: "/interior-exterior-finishes/",
      Title: " Interior & Exterior Finishes",
      Description:
        " Interior & Exterior Finishes: Enhancing aesthetics with quality craftsmanship. ",
      imgpath: require("../../../Images/TDBG12.png"),
    },
  ];

  const tradeArray2 = [
    {
      ResirectTo: "/electrical-estimating-services/",
      Title: " Electrical Estimating",
      Description:
        "  Electrical Estimating: Accurate assessments for effective electrical systems. ",
      imgpath: require("../../../Images/TDBG13.png"),
    },
    {
      ResirectTo: "/mechanical-estimating-services/",
      Title: " Mechanical Estimating",
      Description:
        " Mechanical Estimating: Precise calculations for efficient system installations.  ",
      imgpath: require("../../../Images/TDBG14.png"),
    },
    {
      ResirectTo: "/special-construction-estimating-services/",
      Title: "Special Construction ",
      Description:
        "  Special Construction: Customized solutions for unique project requirements. ",
      imgpath: require("../../../Images/TDBG15.png"),
    },
    {
      ResirectTo: "/hvac-estimating-services/",
      Title: "HVAC Estimating ",
      Description:
        " HVAC Estimating: Thorough assessments for efficient heating and cooling systems.  ",
      imgpath: require("../../../Images/TDBG16.png"),
    },
    {
      ResirectTo: "/plumbing-estimating-services/",
      Title: " Plumbing Estimating",
      Description:
        " Plumbing Estimating: Detailed evaluations for optimal plumbing solutions. ",
      imgpath: require("../../../Images/TDBG17.png"),
    },

    {
      ResirectTo: "/commercial-estimating-services/",
      Title: " Commercial Estimating",
      Description:
        "  Commercial Estimating: Comprehensive evaluations for successful commercial projects. ",
      imgpath: require("../../../Images/TDBG18.png"),
    },

    {
      ResirectTo: "/industrial-estimating-services/",
      Title: " Industrial Estimating ",
      Description:
        "  Industrial Estimating: Tailored solutions for efficient industrial projects. ",
      imgpath: require("../../../Images/TDBG19.png"),
    },

    {
      ResirectTo: "/residential-estimating-services/",
      Title: "Residential Estimating ",
      Description:
        "  Residential Estimating: Detailed assessments for successful home projects.",
      imgpath: require("../../../Images/TDBG20.png"),
    },
  ];
  const text = (
    <div>
      
      <h1 className="CommonHeadingStyleContainer">
            <span className="CommonHeadingStyle">
            Top-Notch Bidclerk Trades
            </span>
          </h1>
      <p className=" paragrapg">
        Choose <b style={{ color: "#028EC9" }}>BIdClerk Estimating</b> for
        top-notch trade services, specially crafted for clients in the United
        States. Our dedicated team is here to serve individuals and businesses
        across the nation with expertise tailored just for you. Contact us
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
  return (
    <div
      className="animate__animated animate__backInRight"
      style={{ marginTop: "85px" }}
    >
      <div className=" container-md ">
        <HalfTextHalfImg2
          text={text}
          src={require("../../../Images/TradeHTHI.png")}
        />
      </div>
      {/* <CommonCard src={path} /> */}
      <div className=" text-center">
        <CommonHeading heading="Out Trades" />
      </div>
      <div className=" container-md">
        <div
          style={{ gap: "40px", flexWrap: "wrap" }}
          className=" mt-4 mb-4 d-flex justify-content-center align-items-center"
        >
          {tradeArray.map((item) => (
            <CommonCard
              src={item.imgpath}
              title={item.Title}
              ResirectTo={item.ResirectTo}
              description={item.Description}
            />
          ))}
        </div>
        <div className=" d-flex justify-content-center align-items-center">
          <TURNAROUNDTIME />
        </div>
        <div
          style={{ gap: "40px", flexWrap: "wrap" }}
          className=" mt-4 mb-4 d-flex justify-content-center align-items-center"
        >
          {tradeArray2.map((item) => (
            <CommonCard
              src={item.imgpath}
              title={item.Title}
              ResirectTo={item.ResirectTo}
              description={item.Description}
            />
          ))}
        </div>
      </div>
      <Banner />
      <div className=" mt-4">
        <CommonContactUs />
      </div>
    </div>
  );
};
