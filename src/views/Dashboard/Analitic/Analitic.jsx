import React from 'react'
import './Analitic.css'
import DaliySales from '../../../components/DaliySales/DaliySales'
import DoughnutChart from '../../../components/Charts/Doughnut/Doughnut'
import RevenueChart from '../../../components/Charts/AnaliticChart/RevenueChart'
import Orders from '../../../components/Orders/Order/Orders'

function Analitic() {
  return (
    <div className='analitic'>
      <div className="analitic-container">
        <div className="analitic-first-container">
          <DaliySales />
        </div>
        <div className="analitic-second-container">
          <RevenueChart />
          <DoughnutChart />
        </div>
        <div className="analitic-second-container">
        <Orders />
          <DoughnutChart />
        </div>
      </div>
    </div>
  )
}

export default Analitic