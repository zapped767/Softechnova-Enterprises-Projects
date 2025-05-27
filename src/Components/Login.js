import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Login() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
