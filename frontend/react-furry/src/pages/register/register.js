import React from 'react'

export const Register = () => {
  return (
             
    <div className="cntnr signup">
        <div className="sign-up">
            <h1 className="headingSignUp">Sign up</h1>
            <form action="">
                <div className="form-group">
                    <label for="">First name</label>
                    <input type="text" placeholder="Enter your first name" required/>
                </div>
                <div className="form-group">
                    <label for="">Last name</label>
                    <input type="text" placeholder="Enter your last name" required/>
                </div>
                <div className="form-group">
                    <label for="">Email</label>
                    <input type="email" placeholder="Enter your email" required/>
                </div>
                <div className="form-group">
                    <label for="">Password</label>
                    <input type="password" placeholder="Enter your password" required/>
                </div>
                <div className="form-group">
                    <label for="">Verify Password</label>
                    <input type="password" placeholder="Enter your password" required/>
                </div>
                <div className="signup-footer">
                    <button className="signUpBtn" type="submit" id="submit_auth" value="Sign-Up">Sign Up</button>
                </div>
            </form>
        </div>
    </div>

    
  )
}
