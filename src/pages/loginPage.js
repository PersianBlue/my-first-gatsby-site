import React from "react";
import Layout from "../components/layout";
import Form from "../components/LoginPage/Form";
import { auth } from "../../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need

//import firebase from "firebase/compat/app";
//import * as firebaseui from "firebaseui";

//var firebase = require("firebase/compat/app");

const signInWithGoogle = () => {
  console.log("Singing in ");
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re);
    })
    .catch((err) => {
      console.log(err);
    });
};
const loginPage = () => {
  return (
    <>
      <Layout pageTitle="Login Page">
        <h1> This is me login page </h1>
        <h1>Welcome to My Awesome App</h1>
        <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
        <Form />
      </Layout>
    </>
  );
};

export default loginPage;
