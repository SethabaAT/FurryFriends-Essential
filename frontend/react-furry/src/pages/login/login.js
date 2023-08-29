import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button'

export const Login = () => {
  const logIn = () => {
          
  }

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
        <form action="">            
            <div className="form-group">
                <label for="">Email</label>
                <input type="email" placeholder="Enter your email" required/>
            </div>
            <div className="form-group">
                <label for="">Password</label>
                <input type="password" placeholder="Enter your password" required/>
            </div>
            
            <div className="signup-footer">
                <Button classN={"signUpBtn"} type={"submit"} id="submit_auth" text={"Sign In"} value="Sign-In" />
            </div>

            <p><b><Link to="/register">Create New Account</Link></b></p>
        </form>
    </div>
</div>
  )
}
