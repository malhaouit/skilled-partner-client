import React, { useState } from "react";

// Check if the app is running in development or production
const API_BASE_URL = import.meta.env.PROD 
    ? 'https://skilled-partner-backend-c89ab71d0944.herokuapp.com/api'
    : '/api';

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_BASE_URL}/emails`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h1>Stay Updated!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Notify Me</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;