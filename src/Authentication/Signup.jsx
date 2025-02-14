import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Update this path as needed


function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     
    } catch (er) {
      console.log("API error", er);
    }
  };

  return (
    <div style={styles.signupContainer}>
      <div style={styles.logoContainer}>
        <h1 style={styles.signupHeading}>CHECKMATE</h1>
      </div>
      <div style={styles.signupCard}>
        <h2 style={styles.signupTitle}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.signupForm}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.optionsContainer}>
            <a href="#" style={styles.forgotPasswordLink} onClick={()=> navigate('/Login')}>Already have an account? Log in</a>
          </div>
          <button type="submit" style={styles.signupButton} >Sign Up</button>
        </form>
      </div>
    </div>
  );
};

// Define styles as a JavaScript object
const styles = {
  signupContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#ffffff', // White background
    fontFamily: 'Arial, sans-serif',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  chessLogo: {
    width: '120px',
    height: '120px',
    marginRight: '40px',
  },
  signupHeading: {
    color: '#000000', // Black text for the heading
    fontSize: '58px',
  },
  signupCard: {
    backgroundColor: '#f9f9f9', // Slightly off-white background for the card
    padding: '30px',
    borderRadius: '12px',
    width: '350px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Subtle shadow
    textAlign: 'center',
  },
  signupTitle: {
    fontSize: '24px',
    color: '#333333', // Dark gray for the title
    marginBottom: '20px',
  },
  signupForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '14px',
    color: '#555555', // Medium gray for labels
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc', // Light gray border for inputs
    fontSize: '14px',
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
  },
  forgotPasswordLink: {
    fontSize: '14px',
    color: '#000000', // Black link
    textDecoration: 'none',
  },
  signupButton: {
    backgroundColor: '#333333', // Dark gray background for the button
    color: '#ffffff', // White text on the button
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  signupButtonHover: {
    backgroundColor: '#555555', // Slightly lighter gray for hover
  },
};

// Adding hover effect to the button
styles.signupButton[':hover'] = styles.signupButtonHover;

export default Signup;
