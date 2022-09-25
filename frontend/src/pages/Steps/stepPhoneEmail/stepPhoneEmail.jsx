import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ Gonext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <>
      <button onClick={() => setType("phone")}>Phone</button>
      <button onClick={() => setType("email")}>Email</button>
      <Component />
    </>
  );
};

export default StepPhoneEmail;
