import React from "react";
import { auth } from "../../../firebase-config";
import Button from "../Button/Button";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signInWithGoogle = (event) => {
  //event.preventDefault();
  console.log("Signing in with Google ");
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => {
      console.log("We signed in with the popup");
      console.log(re);
      return re;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default signInWithGoogle;
