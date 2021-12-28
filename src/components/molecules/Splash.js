import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../atoms/Button'

export default function Splash(){
    return (
        <>
            <div className="splash-screen">
                <div className="text-content m-5">
                    <h1>Find My Ride</h1>
                    <p>Easiest way to report and recover lost and stolen vehicles</p>
                </div>
                <div>
                    <Link to="/report">
                        <Button  text="Report" classes="bg-blue-600 m-3" />
                    </Link>
                    <Button text="Recover" classes="bg-gray-600 m-3" />
                </div>
            </div>
        </>
    )
};
