import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className='form-container'>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button>Login</button>
      </form>
      <p>
        No account? <Link to="/signup">Create account</Link>
      </p>
      </div>
    </div>
  );
}

export default Login;
