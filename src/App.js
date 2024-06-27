import React from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
  const handleLogin = (username, password) => {
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Login failed.');
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default App;