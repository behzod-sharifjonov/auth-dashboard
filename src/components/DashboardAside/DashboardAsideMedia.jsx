import React, { useContext } from 'react'
import { Context } from '../../App'
import './DashboardAside.css'

function DashboardAsideMedia() {

    const {isMenuOpen} = useContext(Context)

    return (
        <div>
            <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default DashboardAsideMedia