import React, { useContext, useState } from "react";
import "./UploadModal.css";
import { MyContext } from "../../Store/MyContext";
export const UploadModal = () => {
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

  const contextvalue = useContext(MyContext);
  const closeFunction = contextvalue.changefunction;
  return (
    <div className="ModalContainer">
      <div className=" ModalUpload">
        <div>
          <button onClick={closeFunction} className=" btn-close"></button>
          <h3 className=" text-center text-uppercase">
            Upload Your Drawings Here
          </h3>
          <p className=" paragrapg fw-semibold hideOn smallScreen">
            Note: Please fill all the mandatory fields and please upload plan or
            email us the link of your plan
          </p>
          <form onSubmit={onFormSubmit}>
            <div className=" row w-100 m-0 justify-content-center">
              <div className=" col-6 d-flex justify-content-around align-items-center flex-column p-sm-3 p-0">
                {" "}
                <input
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name=""
                  id=""
                />{" "}
                <input
                  placeholder="Number"
                  type="tel"
                  onChange={(e) => setContect(e.target.value)}
                  name=""
                  id=""
                />{" "}
                <textarea
                  placeholder="Message"
                  onChange={(e) => setRequirements(e.target.value)}
                  name=""
                  id=""
                ></textarea>{" "}
              </div>
              <div className=" col-6 d-flex justify-content-around align-items-center flex-column p-sm-3 p-0">
                {" "}
                <input
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  type="email"
                  name=""
                  id=""
                />{" "}
                <input
                  placeholder="File"
                  onChange={handleAttachmentChange}
                  type="file"
                  name=""
                  id=""
                />{" "}
                <input
                  placeholder="Link"
                  type="text"
                  onChange={(e) => setfilelink(e.target.value)}
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className=" text-center">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
