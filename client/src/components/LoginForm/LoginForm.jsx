import React from "react";

import "./LoginForm.css";

import logo from "../../assets/logo-trans.png";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="form-header-area">
        <img src={logo} alt="WedSocial Logo" className="form-logo-image" />
        <h1 className="form-logo-title">
          Wedding <span>Social</span>
        </h1>
      </div>
      <p>Welcome to WedSocial! Please log in to continue.</p>
      <div className="form-area">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>

          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Please enter your email address..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Please enter your password..."
          />  
        </div>
        <div className="form-group">
          <button type="submit" className="form-submit-button">
            Log In
          </button>
        </div>
      </div>
      <div className="form-footer-area">
        <p className="form-footer-detail">
          <span>&copy;</span> 2026 WedSocial. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
