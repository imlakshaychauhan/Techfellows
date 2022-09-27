import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from "./StepPhoneEmail.module.css";
import Button from "../../../components/shared/Button/Button";
import { Link } from "react-router-dom";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ gonext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={styles.cardWrapper}>
        <Component />
        <div className={styles.buttonWrap}>
          {type === "phone" ? (
            <Link onClick={() => setType("email")} className={styles.signintext} >Use Email Address to authenticate</Link>
          ) : (
            <Link onClick={() => setType("phone")} className={styles.signintext} >Use Phone Number to authenticate</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
