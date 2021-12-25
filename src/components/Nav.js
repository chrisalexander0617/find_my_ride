import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Home from '../routes/Home'
import Find from '../routes/Find'
import Report from '../routes/Report'
import { Link } from "react-router-dom";

export default function Nav(){
    return  (
        <>   
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/find">Find</Link>
                    <Link to="/report">Report</Link>
                    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="find" element={<Find />} />
                        <Route path="report" element={<Report />} />
                    </Routes>
                </nav>
            </BrowserRouter>
        </>
    )
}