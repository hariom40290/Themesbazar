import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import ProjectList from './ProjectList';
import Header from './Header';

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isSignUp, setIsSignUp] = useState(false);
  const [showAuth, setShowAuth] = useState(false); // Control login/signup visibility

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="App">
      {/* Header always visible */}
      <Header 
        user={user} 
        onLogout={handleLogout} 
        onRequestLogin={() => setShowAuth(true)} 
      />

      {/* Project list always visible */}
      <ProjectList 
        user={user} 
        onRequestLogin={() => setShowAuth(true)} 
      />

      {/* Conditional login/signup popup */}
      {!user && showAuth && (
        isSignUp ? (
          <Signup 
            onLogin={(loggedInUser) => {
              setUser(loggedInUser);
              setShowAuth(false);
            }} 
            onSwitchToLogin={() => setIsSignUp(false)} 
          />
        ) : (
          <Login 
            onLogin={(loggedInUser) => {
              setUser(loggedInUser);
              setShowAuth(false);
            }} 
            onSwitchToSignUp={() => setIsSignUp(true)} 
          />
        )
      )}
    </div>
  );
}

export default App;
