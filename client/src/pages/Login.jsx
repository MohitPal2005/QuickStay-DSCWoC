import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-container">
      <h1>Welcome Back</h1>
      <p>Login to continue</p>

      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>

      <div className="auth-divider">or</div>

      <button className="oauth google">Continue with Google</button>
      <button className="oauth linkedin">Continue with LinkedIn</button>

      <p className="auth-footer">
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
