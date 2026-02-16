import React from "react";
import { Route, Routes, } from 'react-router-dom';
import Home from "../component/Home";
import About from "../component/About";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About/>} />
    </Routes>
  )
}

export default AppRoutes