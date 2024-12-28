import React, { useEffect, useState } from 'react'
import axios from '../../../untils/axios'
import { useNavigate } from 'react-router-dom';
import './Detail.css'
import DetailUi from './DetailUi';

function Detail() {

  const [detailData, setDetailData] = useState([])
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('adminToken');

//         if (!token) {
//           throw new Error('No token found, please log in.');
//         }
    
//         const response = await axios.get(`/product/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`, 
//           },
//         });

//         setDetailData(response.data);
//       } catch (err) {
//         console.error('Error fetching profile:', err);

//         if (err.response && err.response.status === 401) {
//           setError('Unauthorized. Please log in again.');
//           localStorage.removeItem('adminToken'); 
//           navigate('/admin/login'); 
//         } else {
//           setError('Failed to fetch profile. Please try again.');
//         }
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   console.log(detailData)


  return (
    <div className='table-container'>
      <DetailUi detail_data={detailData}/>
    </div>
  )
}

export default Detail