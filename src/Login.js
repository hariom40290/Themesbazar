import React, { useState } from 'react';

function Login({ onLogin, onSwitchToSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Get saved email and password from localStorage
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    // Check if email and password match
    if (email === savedEmail && password === savedPassword) {
      localStorage.setItem("user", email); // Store the user email for logged-in state
      onLogin(email);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login to Continue</h2>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={onSwitchToSignUp}>Don't have an account? Sign Up</button>
    </div>
  );
}

export default Login;
