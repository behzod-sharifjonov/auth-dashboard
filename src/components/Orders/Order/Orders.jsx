import React, { useContext, useEffect, useState } from 'react'
import axios from '../../../untils/axios'
import { useNavigate } from 'react-router-dom';
import OrderUi from './OrderUi';
import './Orders.css'
import OrderModal from '../../Modals/OrderModal';
import { Context } from '../../../App';

function Orders() {

  const [lastOrderData, setLastOrderData] = useState([])
  const navigate = useNavigate();
  const {showOrderModal, setShowOrderModal}=  useContext(Context)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('adminToken');

        if (!token) {
          throw new Error('No token found, please log in.');
        }
    
        const response = await axios.get('/last-orders/', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });

        setLastOrderData(response.data);
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

  console.log(lastOrderData)


  return (
    <div className='table-container'>
      <OrderUi item_data={lastOrderData}/>
      {showOrderModal && <OrderModal />}
    </div>
  )
}

export default Orders