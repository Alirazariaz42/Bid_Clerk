import React from "react";

export const ReviewCard = (props) => {
  return (
    
      <div className="ReviewCardContainer">
        <p className="Comments" >{props.comments}</p>
        <div className=" d-flex justify-content-between align-items-center">
          <div className=" d-flex align-items-center">
            <div>
              {" "}
              <img src={props.DP} alt="" />
            </div>
            <div className=" m-2 ">
              <h5 className=" reviewPersomName m-0 p-0">{props.Name}</h5>
              <p className=" reviewPersomDesignation paragrapg m-0">{props.Designation}</p>
            </div>
          </div>
          <div>
            <img src={props.Stars} className="statspic" alt="" />
          </div>
        </div>
      </div>
    
  );
};
