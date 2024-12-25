import React, { useContext } from 'react';
import { Context } from '../../App';
import './MenuModal.css';
import { FaChartPie } from 'react-icons/fa';
import { FiBarChart2 } from 'react-icons/fi';
import { FaBasketShopping } from 'react-icons/fa6';
import { RiShoppingBag4Line } from 'react-icons/ri';
import { AiOutlineLineChart } from 'react-icons/ai';
import { BsChatLeftDots } from 'react-icons/bs';
import { IoChatbox } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import { IoCloseOutline } from "react-icons/io5";

function MenuModal() {
    const { isMenuOpen, setIsMenuOpen } = useContext(Context);
    const navigate = useNavigate()

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard/analitic', icon: <FaChartPie className='aside-icon' /> },
        { name: 'Leaderboard', path: '/dashboard/add-product', icon: <FiBarChart2 className='aside-icon' /> },
        { name: 'Order', path: '/dashboard/landing', icon: <FaBasketShopping className='aside-icon' /> },
        { name: 'Products', path: '/dashboard/product', icon: <RiShoppingBag4Line className='aside-icon' /> },
        { name: 'Sales Report', path: '/dashboard/library', icon: <AiOutlineLineChart className='aside-icon' /> },
        { name: 'Messages', path: '/dashboard/maps', icon: <BsChatLeftDots className='aside-icon' /> },
        { name: 'Support', path: '/dashboard/support', icon: <IoChatbox className='aside-icon' /> },
        { name: 'Settings', path: '/dashboard/settings', icon: <IoIosSettings className='aside-icon' /> }
    ];

    const handleItemClick = (path) => {
        console.log(`Navigating to ${path}`);
        navigate(path);
        setIsMenuOpen(false);
    };

    return (
        isMenuOpen && (
            <div className={`menu-modal`}>
                <div className="modal-content">
                    <div className="menu-first">
                        <div className="aside-logo">
                            <div className="logo-design">
                                <img src={Logo} alt="Loading..." />
                            </div>
                            <h2>Dabang</h2>
                        </div>
                        <button className="close-btn" onClick={() => setIsMenuOpen(false)}><IoCloseOutline /></button>
                    </div>
                    <ul className="header-bottom-menu">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`menu-item ${window.location.pathname.startsWith(item.path) ? 'active' : ''}`}
                                onClick={() => handleItemClick(item.path)}
                            >
                                {item.icon}
                                <span className="menu-text">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    );
}

export default MenuModal;
