// Login.jsx
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className="backbox">
        <div className="loginMsg">
          <div className="textcontent">
            <p className="title">Don't have an account?</p>
            <p>Sign up to save all your graph.</p>
            <button id="switch1">Sign Up</button>
          </div>
        </div>
        <div className="signupMsg visibility">
          <div className="textcontent">
            <p className="title">Have an account?</p>
            <p>Log in to see all your collection.</p>
            <button id="switch2">LOG IN</button>
          </div>
        </div>
      </div>

      <div className="frontbox">
        <div className="login">
          <h2>LOG IN</h2>
          <div className="inputbox">
            <input type="text" name="email" placeholder="  EMAIL" />
            <input type="password" name="password" placeholder="  PASSWORD" />
          </div>
        
          <button>LOG IN</button>
        </div>

        <div className="signup hide">
          <h2>SIGN UP</h2>
          <div className="inputbox">
            <input type="text" name="fullname" placeholder="  FULLNAME" />
            <input type="text" name="email" placeholder="  EMAIL" />
            <input type="password" name="password" placeholder="  PASSWORD" />
          </div>
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
