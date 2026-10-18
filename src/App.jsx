
import { useState } from 'react';
import './App.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
function handleLogin(event) {
  event.preventDefault();

  if (email.trim() === '') {
    setError('Please enter your email.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    setError('Please enter a valid email address.');
    return;
  }

  if (password.trim() === '') {
    setError('Please enter your password.');
    return;
  }

  setError('');
  alert('Form validation successful!');
}

  return (
    <div className="login-container">
      <h1>Welcome Back</h1>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
