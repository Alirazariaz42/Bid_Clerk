import React from "react";
import GRbg from "../../Images/GRbg.png";
import { Link } from "react-router-dom";
export const CommonCard = (props) => {
 
  return (
    <div>
      <Link className=" text-decoration-none" to={props.ResirectTo}>
        <div
          style={{
            backgroundImage: `url(${props.src})`,
          }}
          className=" CardBgContainer commoncard"
        >
          <div className=" p-3 text-center">
            <h5
              style={{ color: "#2DC1FF", fontSize: "20px" }}
              className=" boxShadowforTitle  text-uppercase text-decoration-none"
            >
              {props.title}
            </h5>
            <p
              style={{ fontSize: "16px" }}
              className="  text-decoration-none fw-normal"
            >
              {props.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
