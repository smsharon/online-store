import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="signup-container">
      <div className='form-container'>
      <h2>Create Account</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" />
        <button>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </div>
    </div>
  );
}

export default SignUp;
