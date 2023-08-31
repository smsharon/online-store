import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:8002/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setIsRegistered(true);
      } else {
        // Registration failed, handle error scenario
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="signup-container">
      
      <div className='form-container'>
      
      {isRegistered ? (
        <p>Registered successfully
        
        Proceed to <Link to="/login">Login</Link>
      </p>
      ) : (
      <form onSubmit={handleRegister}>
        <h2>Create Account</h2>
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button  type="submit">Sign Up</button>
        <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </form>
      
      )}
      
      </div>
    </div>
  );
}

export default SignUp;
