import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './AnaliticChart.css'

// Register the components for ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const RevenueChart = () => {

    // Data for the chart
    const data = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                type: 'line',
                label: 'Revenue Growth',
                data: [200, 450, 600, 300, 400, 700, 250],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.4, // Curved line effect
                yAxisID: 'y',
            },
            {
                type: 'bar',
                label: 'Total Revenue',
                data: [200, 450, 600, 300, 400, 700, 250],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y',
            },
        ],
    };

    // Options for the chart
    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `Total Revenue: $${context.raw}`;
                    },
                },
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 1000,
            },
        },
    };




    return (
        <div className='revenue-chart'>
            <div className="revenue-chart-title">
                <h2>Sales Products</h2>
                <div className="revenue-btns">
                    <button>Day</button>
                    <button>Weekly</button>
                    <button>Monthly</button>
                </div>
            </div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default RevenueChart;
