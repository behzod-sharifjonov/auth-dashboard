import React, { useState } from 'react';
import axios from '../../untils/axios';
import { NavLink, useNavigate } from 'react-router-dom';
import './Auth.css'

const AdminLogin = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const forms = new FormData(e.target);
      const { username, password } = Object.fromEntries(forms.entries());

      const response = await axios.post('/login/', { username, password });

      const { access_token } = response.data;

      console.log(response.data)

      localStorage.setItem('adminToken', access_token);

      navigate('/admin/profile');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='auth auth-login'>
      <div className="auth-login-header">
        <div className='hand'>👋</div>
        <h2>Welcome back!</h2>
        <span>Let's build someting great</span>
      </div>
      <form onSubmit={handleLogin}>
        <div className='inputs'>
          <label>Username:</label>
          <input placeholder='your username:' name="username" type="text" required />
        </div>
        <div className='inputs'>
          <label>Password:</label>
          <input placeholder='password' name="password" type="password" required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
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
        <span>Don't have an account? <NavLink to={'/admin/register'}>Sign up</NavLink></span>
      </div>
    </div>
  );
};

export default AdminLogin;
