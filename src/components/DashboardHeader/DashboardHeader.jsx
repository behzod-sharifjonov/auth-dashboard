import React, { useContext } from 'react'
import './DashboardHeader.css'
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Context } from '../../App';
import { RiMenu2Line } from "react-icons/ri";

function DashboardHeader() {

    const {setIsMenuOpen, isMenuOpen} = useContext(Context)

    return (
        <header className='dashboard-header'>
            <button className='dashboard-toggle-aside' onClick={()=> setIsMenuOpen(!isMenuOpen)}><RiMenu2Line /></button>
            <div className="dashboard-header-input">
                <IoSearch className='dashboard-header-input-icon' />
                <input type="text" placeholder='search somethings...' />
            </div>
            <div className="dashboard-header-profile-icon">
                <div className="dashboard-header-notification">
                    <IoMdNotificationsOutline className='dashboard-header-notification' />
                </div>
                <div className="dashboard-header-profile">
                    <div className="dashboard-header-profile-data">
                        <h3>Elena</h3>
                        <span>Admin</span>
                    </div>
                    <div className="dashboard-header-profile-logo">
                        <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader