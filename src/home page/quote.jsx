import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import myStyles from "./quote.module.css";

export function Quote() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    course: "select a course",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, course, phoneNumber, message } = formData;

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      course === "select a course" ||
      !phoneNumber.trim() ||
      !message.trim()
    ) {
      alert("Please fill in all fields before submitting the form.");
      navigate("/");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      alert("First name and last name must contain only letters.");
      return;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }
    if (message.length > 500) {
      alert("Message must be less than 500 characters long.");
      return;
    }

    setFormData({
      firstName: "",
      lastName: "",
      course: "select a course",
      phoneNumber: "",
      message: "",
    });
    alert(
      "Your quote request has been submitted successfully. Our admissions team will review your details and contact you shortly."
    );
    navigate("/");
  };
  return (
    <>
      <div className={myStyles.reqforaquote}>
        <div className={myStyles.quote}>
          <h1>Request A Quote</h1>
          <p>
            Fill out the form below to schedule a free consultation with a
            certified teacher.
          </p>
        </div>
        <div className={myStyles.form}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
            >
              <option value="select a course">Select a course</option>
              <option value="Bachelor in Arts">Bachelor in Arts</option>
              <option value="Bachelor in Science">Bachelor in Science</option>
              <option value="Bachelor in Commerce">Bachelor in Commerce</option>
            </select>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <textarea
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <input type="submit" value="Request A Quote" />
          </form>
        </div>
      </div>
    </>
  );
}
