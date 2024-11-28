import React, { useState, useEffect } from 'react';
import axios from '../../../untils/axios';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('adminToken');

        if (!token) {
          throw new Error('No token found, please log in.');
        }
    
        const response = await axios.get('/profile/', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        setProfileData(response.data);
      } catch (err) {
        console.error('Error fetching profile:', err);

        if (err.response && err.response.status === 401) {
          setError('Unauthorized. Please log in again.');
          localStorage.removeItem('adminToken'); 
          navigate('/admin/login'); 
        } else {
          setError('Failed to fetch profile. Please try again.');
        }
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!profileData) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h2>Admin Profile</h2>
      <p><strong>Username:</strong> {profileData.username}</p>
      <p><strong>Email:</strong> {profileData.email}</p>
    </div>
  );
};

export default AdminProfile;
