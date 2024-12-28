import React, { useContext, useEffect } from 'react'
import './DashboardHeader.css'
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../App';

function DashboardHeader() {

    const {setIsMenuOpen} = useContext(Context)

    const location= useLocation()

    const navigate = useNavigate()

    const isProductPage = location.pathname === '/dashboard/product'

    return (
        <header className='dashboard-header'>
            <button className='dashboard-toggle-aside' onClick={()=> setIsMenuOpen(true)}><RiMenu2Line /></button>
            <div className="dashboard-header-input">
                <IoSearch className='dashboard-header-input-icon' />
                <input type="text" placeholder='search somethings...' />
            </div>
            <div className="dashboard-header-profile-icon">
                <div className="dashboard-header-add-poduct">
                   {isProductPage &&  <button onClick={()=> navigate('/dashboard/add-product')}>+</button>}
                </div>
                <div className="dashboard-header-notification">
                    <IoMdNotificationsOutline className='dashboard-header-notification-icon' />
                </div>
                <div className="dashboard-header-profile">
                <div className="dashboard-header-profile-logo">
                        <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" alt="" />
                    </div>
                    <div className="dashboard-header-profile-data">
                        <h3>Fozil</h3>
                        <span>Admin</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader