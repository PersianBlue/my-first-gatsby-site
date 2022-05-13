import React from "react";
import { auth } from "../../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignupFormSuccess from "./SignupFormSuccess";

const CreateUser = (values) => {
  var email = values.email;
  var password = values.password;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const name = user.displayName;
      const email = user.email;
      console.log("User Created Successfully!");
      return <SignupFormSuccess name={name} email={email} />;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
};

export default CreateUser;
