import React from "react";
import { Route, Routes, } from 'react-router-dom';
import Home from "../component/Home";
import About from "../component/About";
import Login from "../component/Login";
import Signup from "../component/Signup";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/loign" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default AppRoutes