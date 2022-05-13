import React, { useState, useEffect } from "react";
import validation from "./validation";
import useForm from "./useForm";
const SignupForm = ({ submitForm, setFormValues }) => {
  const { handleChange, handleSignIn, handleSignUp, values, errors } =
    useForm(submitForm);
  setFormValues(values);
  return (
    <div id="SignupForm">
      <h2> Create Account </h2>
      <form>
        <div id="name">
          <label> Full Name </label>
          <input
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
        </div>

        <div id="email">
          <label> Email </label>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div id="password">
          <label> Password </label>
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div id="signInButton">
          <button type="submit" onClick={handleSignIn}>
            Sign In
          </button>
          <button type="submit" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
