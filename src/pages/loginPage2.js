import React from "react";
import Layout from "../components/Layout/layout";
import { useState, useEffect } from "react";
import StoreData from "../components/LoginPage/storeData";
import signInWithGoogle from "../components/LoginPage/signInWithGoogle";
import { auth } from "../../firebase-config";
import MyForm from "../components/loginPage2/MyForm";
import CreateUser from "../components/LoginPage/createUser";

const LoginPage2 = () => {
  const [currentUser, setUser] = useState(auth.currentUser);
  const [signedIn, setSignedIn] = useState(false);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log("values: ", values);
    CreateUser(values);
  };

  const handleChange = (event) => {
    console.log("Handling change");
    console.log("Setting", event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log("Values: ", values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    StoreData(values);
  };
  const signOut = (event) => {
    console.log("Signing out");
    auth.signOut();
    event.preventDefault();
    setSignedIn(false);
  };

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User has signed in successfully");
        console.log(user);
        setUser(user);
        setSignedIn(true);
      } else {
        console.log("User has not signed in");
        setSignedIn(false);
        setUser(null);
      }
    });

    return () => {
      unlisten();
    }; //end return
  }, []);

  const SignInPage = () => {
    return (
      <div>
        <h1>Welcome {currentUser.displayName} </h1>
        <h2> Your email address is {currentUser.email} </h2>
        <button onClick={(event) => signOut(event)}>Sign Out</button>
      </div>
    );
  };

  return (
    <div style={{ display: "inline-block", justifyContent: "center" }}>
      <Layout pageTitle="Login Page" />
      {signedIn ? (
        <SignInPage />
      ) : (
        <MyForm
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleSignUp={handleSignUp}
        />
      )}
    </div>
  );
};

export default LoginPage2;
