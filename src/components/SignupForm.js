import React, {useState} from "react";

const SignupForm = () => {

    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const handleChange = (event)=>{
setValues({
    ...values,
    [event.target.name]: event.target.value
})
    }

    const handleFormSubmit =  (event)=>{
        event.preventDefault();
    }
  return (
    <div id ="SignupForm">
      <h2> Create Account </h2>
      <form>
        <div id ="name">
          <label> Full Name </label>
          <input type="text" name ="fullname"  value = {values.fullname} onChange = {handleChange}/>
        </div>
        <div id="email">
          <label> Email </label>
          <input type="text" name = "email" value = {values.email} onChange = {handleChange}/>
        </div>
        <div id="password">
          <label> Password </label>
          <input type="text" name = "password" value = {values.password} onChange = {handleChange}/>
        </div>
        <div id =  "signupButton">
            <button type="submit" onClick = {handleFormSubmit}>Sign up</button>

        </div>
      </form>
    </div>
  );
};

export default SignupForm;
