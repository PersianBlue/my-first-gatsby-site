import React from "react";
import signInWithGoogle from "../LoginPage/signInWithGoogle";
import "./MyForm.css";

const MyForm = ({ values, handleChange, handleSubmit, handleSignUp }) => {
  //console.log("Rendering my form");
  return (
    <div id="Form">
      <form>
        <div id="usernameDiv">
          <label id="username">Username</label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div id="emailDiv">
          <label id="email">Email</label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div id="passwordDiv">
          <label id="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />

          <button type="submit" onClick={handleSubmit}>
            Sign In
          </button>
          <button type="submit" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </form>

      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default MyForm;
