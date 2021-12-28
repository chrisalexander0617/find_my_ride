import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../atoms/Button'

export default function Splash(){
    return (
        <>
            <div className="splash-screen gap-10">
                <div className="text-content my-5">
                    <h1>Find My Ride</h1>
                    <p>Easiest way to report and recover lost and stolen vehicles</p>
                    <div class="mt-5">
                        <Link to="/report">
                            <Button text="Report" classes="bg-blue-600 mr-5" />
                        </Link>
                        <Link to="/database">
                            <Button text="Recover" classes="bg-gray-600 mr-5" />
                        </Link>
                    </div>
                </div>
                
            </div>
        </>
    )
};
