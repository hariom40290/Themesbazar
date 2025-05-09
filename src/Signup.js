import React, { useState } from 'react';
import '../src/styles/login.css'; 

function Signup({ onLogin, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (name && email && password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      localStorage.setItem("user", email);
      onLogin(email);
    }
  };

  return (
    <div className="login-container row p-0 ">
      {/* Left Side */}
      <div className="login-left col-12 col-lg-6">
        <div className='row align-items-center p-4'>
          <div className='col-12  col-md-4 col-lg-12'>
            <img 
              src="../imagever.png" 
              alt="Templates preview" 
              className="login-image"
            />
          </div>
          <div className='col-12 col-md-8 col-lg-12'>
            <h1 className="login-heading">Start Selling and Sharing Premium Website Templates</h1>
            <p className="login-description">
              Sign up to list your modern and responsive HTML, CSS, and JavaScript templates.
              Connect with a growing community of developers and designers eager for great designs.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-right col-12 col-lg-6">
        <div className='p-4'>
          <h2 className="form-title">Create an Account</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <button onClick={handleSignup} className="form-button w-100">Sign Up</button>
          <button onClick={onSwitchToLogin} className="form-link">Already have an account? Login</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;