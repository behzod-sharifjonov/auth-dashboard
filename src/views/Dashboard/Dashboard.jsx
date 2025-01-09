import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Dashboard.css'
import Landing from '../Landing/Landing'
import Analitic from './Analitic/Analitic'
import Product from './Product/Product'
import Detail from './Detail/Detail'
import AddProduct from './AddProduct/AddProduct'
import DashboardHeader from '../../container/DashboardHeader/DashboardHeader'
import DashboardAside from '../../container/DashboardAside/DashboardAside'
import MenuModal from '../../container/DashboardAside/DashboardAsideMedia'
import OrderPage from './Orders/OrderPage'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dashboard-aside">
                <DashboardAside />
            </div>
            <div className="dashboard-main">
                <div className="dashboard-container">
                    <DashboardHeader />
                <MenuModal />
                    <div className='dashboard-pages'>
                        <Routes>
                            <Route path="analitic" element={<Analitic />} />
                            <Route path="product" element={<Product />} />
                            <Route path="add-product" element={<AddProduct />} />
                            <Route path="discounts-start" element={<h1>Объявления о начале скидки</h1>} />
                            <Route path="orders" element={<OrderPage />} />
                            <Route path="library" element={<h1>Скидки рядом</h1>} />
                            <Route path="paused-ads" element={<h1>Остановленные объявления</h1>} />
                            <Route path="favorites" element={<h1>Избранные объявления</h1>} />
                            <Route path="profile" element={<h1>Профиль пользователя</h1>} />
                            <Route path="settings" element={<h1>Настройки</h1>} />
                            <Route path='detail/:id' element={<Detail />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
