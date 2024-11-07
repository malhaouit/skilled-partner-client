import React, { useState } from "react";
import './App.css';

const API_BASE_URL = import.meta.env.PROD 
    ? 'https://skilled-partner-backend-c89ab71d0944.herokuapp.com/api'
    : '/api';

  function App() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`${API_BASE_URL}/emails`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
        if (response.ok) {
          setMessage(data.message);  // Set the success message
          setEmail('');              // Clear the input field after success
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        setMessage("There was an error submitting your email. Please try again.");
      }
    };

  return (
    <div className="landing-page">
      <section className="hero-section fade-in">
        <div className="hero-content">
          <h1>Connect and Create with Leading Tech Minds</h1>

          {/* Rotating Text Messages */}
          <div className="rotating-text">
            <p>Collaborate with World-Class Talent</p>
            <p>Bring Your Dream Project to Life</p>
            <p>Discover Your Perfect Co-Founder</p>
            <p>Build a Thriving Startup Together</p>
            <p>Connect Freely, Anytime, Anywhere</p>
          </div>

          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="cta-button">Get Notified</button>
          </form>
          {message && <p className="success-message">{message}</p>}
        </div>
      </section>

      <section className="how-it-works slide-in">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step zoom-on-hover">
            <h3>Build Your Unique Profile</h3>
            <p>Showcase your skills, vision, and unique qualities to make a lasting impression.</p>
          </div>
          <div className="step zoom-on-hover">
            <h3>Discover Your Perfect Match</h3>
            <p>Connect with partners who share your business goals and values for optimal synergy.</p>
          </div>
          
          <div className="step zoom-on-hover">
            <h3>Engage and Collaborate Seamlessly</h3>
            <p>Communicate freely with your matched partners to brainstorm, plan, and innovate together.</p>
          </div>
          <div className="step zoom-on-hover">
            <h3>Turn Ideas into Reality</h3>
              <p>Collaborate on impactful projects that bring your vision to life and create lasting success.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;