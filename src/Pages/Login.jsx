import React from "react";
import "./CSS/Login.css";
const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-inputs">
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="login-agree">
                    <input type="checkbox" name="" id="" />
                    <p>I agree to the terms of use and privacy policy</p>
                </div>
                <button>Continue</button>
                <p className="login-signin">
                    Have an account? <span>Sign in</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
