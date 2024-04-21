import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoToggle } from "react-icons/io5";
import { PiToggleLeftFill } from "react-icons/pi";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [toggleOn, setToggleOn] = useState(false);
  const [showToggleMessage, setShowToggleMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [highlightToggle, setHighlightToggle] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleToggle = () => {
    setToggleOn(!toggleOn);
    setShowToggleMessage(false);
  };

  const handleSubmit = () => {
    if (firstName && email && toggleOn) {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        toggleOn: toggleOn,
      };
      console.log(JSON.stringify(formData));
      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setToggleOn(false);
      setHighlightToggle(false);
    } else {
      if (!toggleOn) {
        setHighlightToggle(true);
        setShowToggleMessage(true);
        alert("Please toggle the Terms and Conditions!");
      } else {
        console.log("Validation failed. Please fill in all required fields.");
      }
    }
  };

  return (
    <div className={styles.contactus}>
      <div className={styles.leftContact}>
        <button className={styles.contactUsBtn}>ABOUT US</button>
        <div className={styles.contactTitle}>Contact With Us</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <div className={styles.details}>
          <div className={styles.center}>
            <IoCallOutline className={styles.contactIcon} />
            +1-234-567-8900
          </div>
          <div className={styles.center}>
            <MdOutlineEmail className={styles.contactIcon} />
            Loremipsom@gmail.com
          </div>
          <div className={styles.center}>
            <HiOutlineLocationMarker className={styles.contactIcon} />
            1234 A Lorem Ipsum Street <br />
            West Convina,CA 12345,U.S.
          </div>
        </div>
      </div>
      <div className={styles.rightContact}>
        <div className={styles.row}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            className={styles.inputField}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            className={styles.inputField}
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={handleEmailChange}
          className={styles.inputField}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone No"
          value={phone}
          onChange={handlePhoneChange}
          className={styles.inputField}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
          className={styles.textareaInput}
        ></textarea>
        <div className={styles.row2}>
          {toggleOn ? (
            <IoToggle className={styles.toggleon} onClick={handleToggle} />
          ) : (
            <PiToggleLeftFill
              className={`${styles.toggleon} ${
                highlightToggle ? styles.highlight : ""
              }`}
              onClick={handleToggle}
            />
          )}
          <div className={styles.agree}>
            I agree to the Terms and Conditions of this Website
          </div>
          <button
            className={`${styles.submitBtn} ${
              !toggleOn ? styles.disabled : ""
            }`}
            onClick={handleSubmit}
            disabled={!toggleOn}
          >
            SUBMIT
          </button>
          {showToggleMessage && (
            <p className={styles.toggleMessage}>
              Please toggle the Terms and Conditions
            </p>
          )}
        </div>
        {submitted && (
          <p
            className={styles.submitSuccessMessage}
            role="img"
            aria-label="success"
          >
            &#x1F389; Form submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
