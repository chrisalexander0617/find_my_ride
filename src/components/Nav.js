import React from 'react'
import { Link } from "react-router-dom";

export default function Nav(){
    return  (
        <>   
            <nav className="mb-10">
                <Link to="/">Home</Link>
                <Link to="/find">Find</Link>
                <Link to="/report">Report</Link>
                <Link to="/database">Database</Link>
            </nav>
        </>
    )
}