import React from "react";
import Layout from "../components/Layout/layout";
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

/*
  auth.onAuthStateChanged(user => {
    if (user){
      //signed in
    }
    else{
      //signed out
    }
  })
*/
const loginPage = () => {
  return (
    <>
      <Layout pageTitle="Login Page">
        <Form />
      </Layout>
    </>
  );
};

export default loginPage;
