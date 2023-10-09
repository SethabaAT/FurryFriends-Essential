import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { login } from "../../Service/service";
import { ShopContext } from "../../context/shop-context";

export const Login = () => {
  const { setIsLoggedIn, setUserType, setToken } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(email + " " + password);
      // Call the login service function and pass email and password
      const response = await login(email, password);

      console.log(response.message);
      // Check if the login was successful based on the response
      if (response.message === "Login successful") {
        // Successful login, redirect to home
        console.log("Login Succesful");

        //store the data in local storage for future use
        // localStorage.setItem("user", JSON.stringify(response.user_type));
        // localStorage.setItem("token", response.token);

        //store the token for the session
        setToken(response.token);       

        setIsLoggedIn(true);

        //set the userType
        setUserType(response.user_type);

        if (response.user_type === 1) {
          console.log("Welcome Admin");
          navigate("/admin", { replace: true });
        } else if (response.user_type === 0) {
          console.log("Welcome User");
          navigate("/Shop", { replace: true });
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
    <div className="cntnr signup">
      <div className="sign-up">
        <h1 className="headingSignUp">Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required="required"
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
              required="required"
            />
          </div>

          <div className="signup-footer">
            <Button
              classN={"frm-btn"}
              type={"submit"}
              id="submit_auth"
              text={"Sign In"}
              value="Sign-In"
            />
          </div>

          <p className="newAcc">
            
              <Link to="/register">Create New Account..</Link>
           
          </p>
        </form>
      </div>
    </div>
  );
};
