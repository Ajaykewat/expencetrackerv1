// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loginApi } from '../server/Api';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();

    try{

const Result = await loginApi({ email:username, password });
console.log("Result",JSON.stringify(Result))

if(Result.status == 1){
  alert(Result.msg)
  navigate('/App');
}else{
  alert(Result.msg)
}

    }catch(er){
console.log("api error",er)
    }

    // if (username === 'user' && password === 'password') {
    //   navigate('/App'); // Programmatically navigate to the Home screen
    // } else {
    //   alert('Invalid credentials');
    // }
  };

  return (
    <div style={styles.loginContainer}>
    <div style={styles.logoContainer}>
      <h1 style={styles.loginHeading}>CHECKMATE</h1>
    </div>
    <div style={styles.loginCard}>
      <h2 style={styles.loginTitle}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.loginForm}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.optionsContainer}>
          <a href="#" style={styles.forgotPasswordLink}>Forgot Password?</a>
        </div>
        <button type="submit" style={styles.loginButton}>Login</button>
      </form>
    </div>
  </div>
);
};

// Define styles as a JavaScript object
const styles = {
loginContainer: {
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
loginHeading: {
  color: '#000000', // Black text for the heading
  fontSize: '58px',
},
loginCard: {
  backgroundColor: '#f9f9f9', // Slightly off-white background for the card
  padding: '30px',
  borderRadius: '12px',
  width: '350px',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Subtle shadow
  textAlign: 'center',
},
loginTitle: {
  fontSize: '24px',
  color: '#333333', // Dark gray for the title
  marginBottom: '20px',
},
loginForm: {
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
loginButton: {
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
loginButtonHover: {
  backgroundColor: '#555555', // Slightly lighter gray for hover
},
};

// Adding hover effect to the button
styles.loginButton[':hover'] = styles.loginButtonHover;


export default Login;
