import React, { useState } from 'react';
import axios from '../../untils/axios';
import { NavLink, useNavigate } from 'react-router-dom';
import './Auth.css'

const AdminRegister = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const forms = new FormData(e.target);
      const { username, email, password } = Object.fromEntries(forms.entries());

      console.log('Sending data:', { username, email, password });

      const response = await axios.post('/register/',
        { username, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data)

      const { access_token } = response.data;
      localStorage.setItem('adminToken', access_token);

      navigate('/dashboard/analitic');
    } catch (err) {
      console.error('Error during registration:', err);

      if (err.response) {
        console.log('Error response data:', err.response.data);

        setError(`Registration failed: ${err.response.data.message || 'Please check your input.'}`);
      } else {
        setError('Registration failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className='auth'>
      <div className="auth-login-header">
        <div className='hand'>👋</div>
        <h2>Welcome back!</h2>
        <span>Let's build  someting great</span>
      </div>
      <form onSubmit={handleRegister}>
        <div className='inputs'>
          <label>Username:</label>
          <input placeholder='your username' name="username" type="text" required />
        </div>
        <div className='inputs'>
          <label>Email:</label>
          <input placeholder='your email' name="email" type="email" required />
        </div>
        <div className='inputs'>
          <label>Password:</label>
          <input placeholder='password' name="password" type="password" required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="social-media">
        <span className='or'>or</span>
        <div className="social">
          <button className="github social-icon">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
          </button>
          <button className='google social-icon'>
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
          </button>
          <button className='social-icon'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" />
          </button>
          <button className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/2048px-X_icon.svg.png" alt="" />
          </button>
        </div>
        <span>If you have an account? <NavLink to={'/admin/login'}>Sign in</NavLink></span>
      </div>
    </div>
  );
};

export default AdminRegister;
