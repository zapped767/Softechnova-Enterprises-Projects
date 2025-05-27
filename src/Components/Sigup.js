import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Signup() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Sign Up</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
