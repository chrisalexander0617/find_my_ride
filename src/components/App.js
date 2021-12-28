import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './Nav'
import Layout from './layouts/Layout'
import Home from '../routes/Home'
import Find from '../routes/Find'
import Report from '../routes/Report'
import Database from '../routes/Database'
import Safety from '../routes/Safety'
import '../App.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
        {/* <Nav /> */}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="find" element={<Find />} />
              <Route path="report" element={<Report />} />
              <Route path="database" element={<Database />} />
              <Route path="safety" element={<Safety />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}