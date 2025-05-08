import React, { useState } from 'react';

function Signup({ onLogin, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (name && email && password) {
      // Save email and password in localStorage
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password); // Store password as well
      localStorage.setItem("user", email); // Store the user email
      onLogin(email);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
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
      <button onClick={handleSignup}>Sign Up</button>
      <br />
      <button onClick={onSwitchToLogin}>Already have an account? Login</button>
    </div>
  );
}

export default Signup;
