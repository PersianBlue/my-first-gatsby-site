import React, { useState, useEffect } from "react";
import validation from "./validation";
import StoreData from "./storeData";
import CreateUser from "./createUser";
import signInWithGoogle from "./signInWithGoogle";

const useForm = (submitForm) => {
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
    StoreData(values);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
    CreateUser(values);
  };

  const GoogleSignIn = () => {
    signInWithGoogle();
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);

  return {
    handleChange,
    handleSignIn,
    handleSignUp,
    errors,
    values,
    GoogleSignIn,
  };
};

export default useForm;
