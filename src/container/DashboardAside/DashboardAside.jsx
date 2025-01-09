import React from 'react'
import './DashboardAside.css'
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import { FaChartPie } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { FaBasketShopping } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
import { IoChatbox } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';

function DashboardAside() {

    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', path: '/dashboard/analitic', icon: <FaChartPie className='aside-icon' /> },
        { name: 'Leaderboard', path: '/dashboard/leader-board', icon: <FiBarChart2 className='aside-icon' /> },
        { name: 'Order', path: '/dashboard/orders', icon: <FaBasketShopping className='aside-icon' /> },
        { name: 'Products', path: '/dashboard/product', icon: <RiShoppingBag4Line className='aside-icon' /> },
        { name: 'Sales Report', path: '/dashboard/library', icon: <AiOutlineLineChart className='aside-icon' /> },
        { name: 'Messages', path: '/dashboard/maps', icon: <BsChatLeftDots className='aside-icon' /> },
    ];

    const menuItems_2 = [
        { name: 'Support', path: '/dashboard/support', icon: <IoChatbox className='aside-icon' /> },
        { name: 'Settings', path: '/dashboard/settings', icon: <IoIosSettings className='aside-icon' /> },
    ];

    const handleItemClick = (path) => {
        navigate(path);
    };

    return (
        <aside>
            <div className="aside-first">
                <div className="aside-logo">
                    <div className="logo-design">
                        <img src={Logo} alt="Loading..." />
                    </div>
                    <h2>Dabang</h2>
                </div>
            </div>
            <div className="aside-components">
                <ul className='header-bottom-menu'>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={location.pathname.startsWith(item.path) ? 'active' : ''}
                            onClick={() => handleItemClick(item.path)}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="aside-other-components">
                <ul className='header-bottom-menu'>
                    {menuItems_2.map((item, index) => (
                        <li
                            key={index}
                            className={location.pathname.startsWith(item.path) ? 'active' : ''}
                            onClick={() => handleItemClick(item.path)}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default DashboardAside;



