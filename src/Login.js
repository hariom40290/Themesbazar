import React, { useState } from 'react';
import '../src/styles/login.css'; 

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
          <h1 className="login-heading">Buy and Download Premium Website Templates</h1>
        <p className="login-description">
          Instantly get access to beautifully crafted HTML, CSS, and JavaScript templates 
          for your business, portfolio, or startup. All templates come with responsive 
          design and modern features.
        </p>
        </div>
       </div>
      </div>

      {/* Right Side */}
      <div className="login-right col-12 col-lg-6">
       <div className='p-4'>
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
        <button onClick={handleLogin} className="form-button w-100">Login</button>
        <button onClick={onSwitchToSignUp} className="form-link">Don't have an account? Sign Up</button>
       </div>
      </div>
    </div>
  );
}

export default Login;
