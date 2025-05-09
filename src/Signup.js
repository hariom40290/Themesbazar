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
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <img 
          src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg?t=st=1746786892~exp=1746790492~hmac=82dc8cd83a5ed20c3c43c8078e424e6faaa408ba0cd893543e57c241f59ea7c4&w=900" 
          alt="Templates preview" 
          className="login-image"
        />
        <h1 className="login-heading">Start Selling and Sharing Premium Website Templates</h1>
        <p className="login-description">
          Sign up to list your modern and responsive HTML, CSS, and JavaScript templates.
          Connect with a growing community of developers and designers eager for great designs.
        </p>
      </div>

      {/* Right Side */}
      <div className="login-right">
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
        <button onClick={handleSignup} className="form-button">Sign Up</button>
        <button onClick={onSwitchToLogin} className="form-link">Already have an account? Login</button>
      </div>
    </div>
  );
}

export default Signup;