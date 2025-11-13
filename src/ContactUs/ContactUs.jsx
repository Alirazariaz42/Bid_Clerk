import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import "./ContactUs.css";
import { CommonHeading } from "../Components/CommonComponents/CommonHeading";
import { Banner } from "../Components/CommonComponents/Banner";
import { CommonContactUs } from "../Components/CommonComponents/CommonContactUs";

export const ContactUs = () => {
  // const containerStyle = {
  //   width: "100%",
  //   height: "400px",
  // };

  // const center = {
  //   lat: -3.745,
  //   lng: -38.523,
  // };

  const handleAttachmentChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  // const [disAble, setdisAble] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContect] = useState("");
  const [filelink, setfilelink] = useState("");
  const [Requirements, setRequirements] = useState("");
  const [attachment, setAttachment] = useState(null);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("Contact", Contact);
    formData.append("attachment", attachment);
    formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    formData.append("Subject", "Message From BidClerk Estimating");

    formData.append("recipient_name1", "MahRukh Tariq");
    formData.append("recipient_email1", "Director.mfbzone@gmail.com");

    formData.append("recipient_name2", "Muhammad Fiaz");
    formData.append("recipient_email2", "Davidson@bidclerkestimating.com");

    try {
      const response = await fetch("https://api.bluebookestimators.com/", {
        method: "POST",
        body: formData,
        // mode: 'no-cors',
      });

      if (response.status === 200) {
        alert("Email sent successfully");
      } else {
        alert("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Email sending failed");
    }
    // setIsLoadingSubmit(false);
  };

  return (
    <div style={{ marginTop: "90px" }}>
      <div className=" container-lg animate__animated animate__backInUp">
        {/* <CommonHeading heading="Contact us" /> */}
        <h1 className="CommonHeadingStyleContainer">
          <span className="CommonHeadingStyle">Contact us</span>
        </h1>

        <div className=" contactDetailsContainer">
          <div className="ContactFormContainer">
            <form className=" form_container" onSubmit={onFormSubmit}>
              <h3 className="text-center text-uppercase">
                get in <span style={{ color: "#028ec9" }}>touch</span>
              </h3>

              <div className=" mt-0">
                <label className=" fw-semibold" htmlFor="Name">
                  {" "}
                  Name
                </label>
                <input
                  placeholder="e.g Jhon"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="Name"
                  name=""
                />
              </div>

              <div className=" mt-4">
                <label className=" fw-semibold" htmlFor="Email">
                  {" "}
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="e.g Jhon@gmail.com"
                  type="email"
                  id="Email"
                  required
                  name=""
                />
              </div>

              <div className=" mt-3">
                <label className=" fw-semibold" htmlFor="Phone">
                  {" "}
                  Phone Number
                </label>
                <input
                  placeholder="e.g 123 332 333"
                  type="tel"
                  onChange={(e) => setContect(e.target.value)}
                  id="Phone"
                  name=""
                />
              </div>

              <div className=" mt-3">
                <label className=" fw-semibold" htmlFor="Message">
                  {" "}
                  Message
                </label>
                <textarea
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder=" Enter message here"
                  name=""
                  id="Message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <div className=" mt-3">
                <label className=" fw-semibold" htmlFor="File">
                  {" "}
                  Upload File
                </label>
                <input
                  placeholder="e.g 123 332 333"
                  onChange={handleAttachmentChange}
                  type="File"
                  id="File"
                  name=""
                />
              </div>
              <input
                className="mt-4 btn  submitbtn"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>

      <Banner />
      <div className=" container-lg">
        <div className=" text-center mb-3 ">
          <CommonHeading heading="Location" />
        </div>

        <div className=" row m-0 w-100 mt-3 mb-4">
          <div className=" col-md-6 col-12 ">
            <div id="map-container">
              <iframe
                style={{ width: "100%", height: "350px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.66027302983!2d-73.9464406!3d40.6814538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b8fea4e7b7d%3A0x461ec4311b6acfa!2s919%20Marcy%20Ave%2C%20Brooklyn%2C%20NY%2011216%2C%20USA!5e0!3m2!1sen!2s!4v1720613981297!5m2!1sen!2s"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className=" col-md-6 col-12">
            <p className=" paragrapg ">
              <img
                className=" d-inline"
                src={require("../Images/VectorLocation.png")}
                alt=""
              />
              &nbsp; 919 Marcy Ave, Brooklyn, NY 11216, USA
            </p>
            <a
              className=" text-dark text-decoration-none"
              href="tel:+1 917 300 1079"
            >
              <p className=" paragrapg">
                <img
                  className=" d-inline"
                  src={require("../Images/VectorCall.png")}
                  alt=""
                />
                &nbsp; +1 917 300 1079
              </p>
            </a>
            <a
              className=" text-dark text-decoration-none"
              href="mailto:Davidson@bidclerkestimating.com"
            >
              <p className=" paragrapg">
                {" "}
                <img
                  className=" d-inline"
                  src={require("../Images/VacterMail.png")}
                  alt=""
                />
                &nbsp;Davidson@bidclerkestimating.com
              </p>
            </a>

            <p className=" paragrapg">
              We have mentioned our phone number and mail address as well, on
              our site . We are just one click away from you. Contact us for any
              construction estimation service, construction takeoffs and other
              such mentioned services at our website. Further, you can write to
              us by uploading your plan or any estimation service you want. So,
              save your precious money and catch us.
            </p>
            <p>
              <a
                href="https://www.instagram.com/bidclerkestimating/"
                target="blank"
              >
                <img
                  className=" d-inline ms-0 me-3"
                  src={require("../Images/VectorInsta.png")}
                  alt=""
                />
              </a>

              <a
                href="https://www.linkedin.com/company/bidclerk-estimating/"
                target="blank"
              >
                <img
                  className=" d-inline ms-3 me-3"
                  src={require("../Images/VectorLinkedIn.png")}
                  alt=""
                />
              </a>
              <a
                href="https://www.facebook.com/people/BidClerk-Estimating/100093576548323/"
                target="blank"
              >
                <img
                  className=" d-inline ms-3 me-3"
                  src={require("../Images/VectorFb.png")}
                  alt=""
                />{" "}
              </a>
            </p>
          </div>
        </div>
      </div>

      <CommonContactUs />
    </div>
  );
};
