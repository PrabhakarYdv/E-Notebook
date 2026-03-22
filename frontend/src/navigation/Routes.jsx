import React from "react";
import { Route, Routes, } from 'react-router-dom';
import Home from "../component/Home";
import About from "../component/About";
import Login from "../component/Login";
import Signup from "../component/Signup";
import Note from "../component/Note";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/test" element={<Note />} />
    </Routes>
  )
}

export default AppRoutes