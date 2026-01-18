import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-container">
      <h1>Create Account</h1>
      <p>Sign up to get started</p>

      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Sign Up</button>
      </form>

      <div className="auth-divider">or</div>

      <button className="oauth google">Continue with Google</button>
      <button className="oauth linkedin">Continue with LinkedIn</button>

      <p className="auth-footer">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
