import React, { useState } from "react";

export const CommonContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [Contact, setContect] = useState("");
  // const [filelink, setfilelink] = useState("");
  const [Requirements, setRequirements] = useState("");
  // const [attachment, setAttachment] = useState(null);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    // formData.append("Contact", Contact);
    // formData.append("attachment", attachment);
    // formData.append("link", filelink);
    formData.append("Requirements", Requirements);

    
    formData.append("Subject", "Message From BidClerk Estimating");

    formData.append("recipient_name1", "MahRukh Tariq");
    formData.append("recipient_email1", "Director.mfbzone@gmail.com");

    formData.append("recipient_name2", "Muhammad Fiaz");
    formData.append("recipient_email2", "Davidson@bidclerkestimating.com");

    try {
      const response = await fetch(
        "https://api.bluebookestimators.com/",
        {
          method: "POST",
          body: formData,
          // mode: 'no-cors',
        }
      );

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
    <div>
      <div className=" contactContainer">
        <div className=" container-md">
          <div className=" row w-100 m-0">
            <div className=" col-md-7 col-sm-6 col-12">
              <p className=" fs-3 text-light fw-semibold mb-0">
                Have any questions?
              </p>
              <p className="fs-3  text-light fw-light mb-0">
                Feel free to contact us!
              </p>
            </div>
            <div className=" col-md-5 col-sm-6 col-12 justify-content-end">
              <form onSubmit={onFormSubmit} className=" ">
                <div
                  style={{ gap: "10px" }}
                  className=" d-flex flex-md-row flex-column"
                >
                  <input
                    type="text"
                    name="query"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                    placeholder="Email Id"
                  />
                </div>
                <div
                  style={{ gap: "10px" }}
                  className=" mt-2 d-flex flex-md-row flex-column"
                >
                  <textarea
                    name=""
                    rows={30}
                    onChange={(e) => setRequirements(e.target.value)}
                    className="p-1  "
                    placeholder="Message"
                    id=""
                  ></textarea>
                  <input
                    style={{ backgroundColor: "#20516F" }}
                    type="submit"
                    name=""
                    placeholder=""
                    className=" btn btn-primary  fw-semibold w-50"
                    value="Send"
                  ></input>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
