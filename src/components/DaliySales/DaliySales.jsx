import React from 'react'
import './DaliySales.css'
import { HiChartBarSquare } from "react-icons/hi2";
import { SiGoogledocs } from "react-icons/si";
import { MdDiscount } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function DaliySales() {
    return (
        <div className="daliy-sales display-flex">
            <div className='daliy-sales-container'>
                <div className="daliy-sales-card daliy-sales-card-1">
                    <div className="daliy-sales-card-icon display-flex">
                        <HiChartBarSquare />
                    </div>
                    <div className="daliy-sales-card-text">
                        <h1>$513</h1>
                        <span>Total Sales</span>
                    </div>
                </div>
                <div className="daliy-sales-card daliy-sales-card-2">
                    <div className="daliy-sales-card-icon display-flex">
                        <SiGoogledocs />
                    </div>
                    <div className="daliy-sales-card-text">
                        <h1>321</h1>
                        <span>Total Transaction</span>
                    </div>
                </div>
                <div className="daliy-sales-card daliy-sales-card-3">
                    <div className="daliy-sales-card-icon display-flex">
                        <MdDiscount />
                    </div>
                    <div className="daliy-sales-card-text">
                        <h1>564</h1>
                        <span>Total Products</span>
                    </div>
                </div>
                <div className="daliy-sales-card daliy-sales-card-4">
                    <div className="daliy-sales-card-icon display-flex">
                        <FaUser />
                    </div>
                    <div className="daliy-sales-card-text">
                        <h1>254</h1>
                        <span>Total Customer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaliySales