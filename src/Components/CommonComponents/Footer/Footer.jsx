import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Call, LocationOn, Mail } from "@mui/icons-material";

export const Footer = () => {
  return (
    <div className=" ">
      <div
        className=" row w-100 m-0 "
        style={{ backgroundColor: "#076E9A", color: "white" }}
      >
        <div className=" col-md-4 col-sm-6 col-12 p-3">
          <img src={require("../../../Images/FooterLogo.png")} alt="" />
          <p>
            {" "}
            <b> BidClerk Estimating</b> Your trusted source for precise
            Construction Cost Estimation services. Specializing in Quantity and
            Material Takeoff, Scheduling, and Planning. Count on us for accurate
            and timely estimates to streamline your projects.
          </p>
        </div>
        <div className=" col-md-2 col-sm-6 textelementCenter col-12 p-3">
          {" "}
          <p className=" fs-4 fw-semibold mb-3">Quick Links</p>
          <p>
            <Link
              to="/services/"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Services
            </Link>{" "}
          </p>
          <p>
            <Link
              to="/about-us/"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              About Us{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/payment/"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Payment{" "}
            </Link>
          </p>
          <p>
            <Link
              to="/estimating-fee/"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Estimating Fee
            </Link>
          </p>
        </div>
        <div className=" col-md-2 col-sm-6 textelementCenter col-12 p-3">
          {" "}
          <p className="fs-4 fw-semibold mb-3">Our Services</p>
          <p>
            {" "}
            <Link
              to="/cost-estimating-services/"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Cost Estimating
            </Link>{" "}
          </p>
          <p>
            {" "}
            <Link
              to="/construction-takeoff-services/"
              style={{ textDecoration: "none", color: "white" }}
            >
              Construction Takeoff{" "}
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to="/cpm-scheduling/"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              CPM Scheduling{" "}
            </Link>
          </p>
          <p>
            {" "}
            <Link
              to="/planning/"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Planning{" "}
            </Link>
          </p>
        </div>
        <div className=" col-md-4 col-sm-6 col-12  textelementCenter tircha-Div text-center">
          <p className=" fs-4 fw-semibold mb-3">Contact</p>
          <p className=" fw-semibold ">
            {" "}
            <span style={{ color: "#076E9A" }}>
              {" "}
              <LocationOn />
            </span>
            919 Marcy Ave, Brooklyn, NY 11216, USA
          </p>
          <a
            className="text-dark"
            href="mailto:Davidson@bidclerkestimating.com"
          >
            <p className="fw-semibold whiteon1200px">
              <span style={{ color: "#076E9A" }}>
                {" "}
                <Mail />{" "}
              </span>
              Davidson@bidclerkestimating.com
            </p>
          </a>
          <a className="text-dark" href="tel:+1 917 300 1079">
            <p className="fw-semibold  whiteon1200px">
              {" "}
              <span style={{ color: "#076E9A" }}>
                {" "}
                <Call />{" "}
              </span>{" "}
              +1 917 300 1079
            </p>
          </a>

          <p className=" text-end">
            <a
              href="https://www.instagram.com/bidclerkestimating/"
              target="blank"
            >
              <img
                className=" d-inline ms-0 me-2"
                src={require("../../../Images/VectorInsta.png")}
                alt=""
                width={30}
              />
            </a>

            <a
              href="https://www.linkedin.com/company/bidclerk-estimating/"
              target="blank"
            >
              <img
                className=" d-inline ms-2 me-2"
                src={require("../../../Images/VectorLinkedIn.png")}
                alt=""
                width={30}
              />
            </a>
            <a
              href="https://www.facebook.com/people/BidClerk-Estimating/100093576548323/"
              target="blank"
            >
              <img
                className=" d-inline ms-2 me-2"
                src={require("../../../Images/VectorFb.png")}
                alt=""
                width={30}
              />{" "}
            </a>
          </p>
        </div>
      </div>
      <p className=" text-center p-0 m-0">
        Copyright © 2024 <b style={{ color: "#076E9A" }}>BidClerk Estimating</b>{" "}
        Designed By{" "}
        <a href="https://mfbzone.com/" target="blank">
          {" "}
          <img
            className=" d-inline"
            src={require("../../../Images/Text.png")}
            alt=""
          />
        </a>{" "}
      </p>
    </div>
  );
};
