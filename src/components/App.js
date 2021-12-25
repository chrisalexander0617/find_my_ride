import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Nav from '../components/Nav'
import Layout from '../components/layouts/Layout'
import Home from '../routes/Home'
import Find from '../routes/Find'
import Report from '../routes/Report';
import '../App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="find" element={<Find />} />
              <Route path="report" element={<Report />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}