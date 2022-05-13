import React from "react";
import { useState } from "react";
import { auth } from "../../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const StoreData = (values) => {
  console.log(values);
  var email = values.email;
  var password = values.password;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log(user.displayName);
      console.log(user.email);
      console.log(user.password);
      return <h1>Welcome {user.displayName}</h1>;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export default StoreData;
