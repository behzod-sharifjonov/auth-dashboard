import React from 'react'
import './Analitic.css'
import DaliySales from '../../../components/DaliySales/DaliySales'
import RevenueChart from '../../../components/Charts/analiticChart/AnaliticChart'
import DoughnutChart from '../../../components/Charts/Doughnut/Doughnut'

function Analitic() {
  return (
    <div className='analitic'>
      <div className="analitic-container">
        <div className="analitic-first-container">
          <DaliySales />
        </div>
        <div className="analitic-second-container">
          <RevenueChart/>
          <DoughnutChart />
        </div>
        {/* <div className="analitic-third-container">
          <DaliySales />
        </div> */}
      </div>
    </div>
  )
}

export default Analitic