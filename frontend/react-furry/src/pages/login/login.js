import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

/*  This is the function that does an api call
    You can put all api calls in one file "sevice if you want"
*/
async function login(email, password) {
  const res = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // Include the email and password
  });
  const data = await res.json();
  return data;
}

export const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Call the login service function and pass email and password
      const response = await login(email, password);

      // Check if the login was successful based on the response
      if (response.message === "Login successful") {
        // Successful login, redirect to home
        console.log("Login Succesful");
        setIsLoggedIn(true);
        if (response.user_type === 1) {
          console.log("Welcome Admin");
          //   navigate("/admin", { replace: true });
        } else if (response.user_type === 0) {
          console.log("Welcome User");
          navigate("/ShoppingCart", { replace: true });
        }
      } else {
        console.error("Login was not successful:", response.statusText);
        // Handle the case of unsuccessful login, e.g., show an error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    // <div class="Back_LG">
    //     <input type = "text" placeholder="Username" name="email"/>
    //     <br></br>
    //     <input type = "text" placeholder="Email Address" name="email"/>
    //     <br></br>
    //     <Button onClickE={logIn} text={"Sign In"}/>
    //     <br></br>
    //     <p><b><Link to="/register">Create New Account</Link></b></p>
    // </div>

    <div className="cntnr signup">
      <div className="sign-up">
        <h1 className="headingSignUp">Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label for="">Email</label>
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
            <label for="">Password</label>
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

          <div className="signup-footer">
            <Button
              classN={"signUpBtn"}
              type={"submit"}
              id="submit_auth"
              text={"Sign In"}
              value="Sign-In"
            />
          </div>

          <p>
            <b>
              <Link to="/register">Create New Account</Link>
            </b>
          </p>
        </form>
      </div>
    </div>
  );
};
