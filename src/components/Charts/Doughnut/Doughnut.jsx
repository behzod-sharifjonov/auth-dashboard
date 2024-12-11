import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Doughnut.css'

// Register the components for ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Data for the doughnut chart
  const data = {
    labels: ['Iphone', 'Ipad', 'Imac'],
    datasets: [
      {
        label: 'Revenue Breakdown',
        data: [300, 500, 200],
        backgroundColor: [
          '#FFE2E5',
          '#DCFCE7',
          '#F3E8FF',
        ],
        borderColor: [
          '#FA5A7D',
          '#3CD856',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return ` ${tooltipItem.label}: $${tooltipItem.raw}`;
          },
        },
      },
    },
    layout: {
      padding: {
        top: 30,    // Add padding above the chart
        bottom: 30, // Add padding below the chart
      },
    },
  };
  

  return (
    <div className='doughnut-chart'>
        <h2>Top Product Sales</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
