import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import ProjectList from './ProjectList';
import Header from './Header';

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <>
          <Header user={user} onLogout={handleLogout} />
          <ProjectList />
        </>
      ) : isSignUp ? (
        <Signup onLogin={setUser} onSwitchToLogin={() => setIsSignUp(false)} />
      ) : (
        <Login onLogin={setUser} onSwitchToSignUp={() => setIsSignUp(true)} />
      )}
    </div>
  );
}

export default App;
