import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {register} from '../../Service/service'


export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        firstName,
        secondName,
        email,
        password,        
      };

      const response = await register(userData);

      // Check the response from the server
      if (response.message === "User Registered") {
        // Registration was successful, handle it accordingly (e.g., redirect, show success message)
        console.log("Registration successful!");
        navigate("/login", { replace: true });
      } else {
        // Registration failed, handle it accordingly (e.g., show error message)
        console.error("Registration failed:", response.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="cntnr signup">
      <div className="sign-up">
        <h1 className="headingSignUp">Sign up</h1>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label for="">First name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              value={firstName}
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Last name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              value={secondName}
              name="secondName"
              onChange={(e) => setSecondName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <div className="form-group">
            <label for="">Verify Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div> */}
          <div className="signup-footer">
            <button
              className="frm-btn"
              type="submit"
              id="submit_auth"
              value="Sign-Up"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
