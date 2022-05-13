import React from "react";

const SignupFormSuccess = (props) => {
  return (
    <div className="container">
      <div className="app">
        <h1 className="form-success">Account Created!</h1>
        <p>
          Welcome {props.name}! Your email address is {props.email}
        </p>
      </div>
    </div>
  );
};

export default SignupFormSuccess;
