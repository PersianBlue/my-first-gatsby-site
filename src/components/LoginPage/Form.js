import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupFormSuccess from "./SignupFormSuccess";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [values, setFormValues] = useState({
    fullname: "Name Not Set",
    email: "Email Not Set",
    password: "passnotset",
  });
  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? (
        <SignupForm submitForm={submitForm} setFormValues={setFormValues} />
      ) : (
        <SignupFormSuccess name={values.name} email={values.email} />
      )}
    </div>
  );
};

export default Form;
