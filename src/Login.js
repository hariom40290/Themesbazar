import React, { useState } from 'react';
import '../src/styles/login.css'; // Import the CSS file

function Login({ onLogin, onSwitchToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
      localStorage.setItem("user", email);
      onLogin(email);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      {/* Left Side */}
      <div className="login-left">
        <img 
          src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1746786748~exp=1746790348~hmac=26eaaadff1878cadb2bcb6cdecabff1f6bf1b8628a6fea6b7f3ece02e7a2061e&w=900" 
          alt="Templates preview" 
          className="login-image"
        />
        <h1 className="login-heading">Buy and Download Premium Website Templates</h1>
        <p className="login-description">
          Instantly get access to beautifully crafted HTML, CSS, and JavaScript templates 
          for your business, portfolio, or startup. All templates come with responsive 
          design and modern features.
        </p>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <h2 className="form-title">Login to Continue</h2>
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button onClick={handleLogin} className="form-button">Login</button>
        <button onClick={onSwitchToSignUp} className="form-link">Don't have an account? Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
