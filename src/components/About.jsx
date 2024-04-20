import React from "react";
import styles from "./About.module.css";
import hands from "../images/hands.jpg";
import { IoMdCheckmark } from "react-icons/io";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles["left-container"]}>
        <button className={styles["abt-us"]}>ABOUT US</button>
        <div className={styles.title}>
          We Specialize In Quality Energy Solutions{" "}
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but leap into electronic.
        </p>
        <div className={styles.p2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </div>
        <div className={styles["check-div"]}>
          <IoMdCheckmark className={styles["check-box"]} />
          Outstanding Service
        </div>
        <div className={styles["check-div"]}>
          <IoMdCheckmark className={styles["check-box"]} />
          Professional and experienced Workers
        </div>
        <button className={styles["readmore-btn"]}>READ MORE</button>
      </div>
      <div className={styles["right-container"]}>
        <img
          src={hands}
          alt="Image 1"
          className={styles["right-container__img"]}
        />
      </div>
    </div>
  );
};

export default About;
