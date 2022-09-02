import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import React16 from "./pages/React16";
import NavBar from "./components/NavBar";
import './App.css'

const App = () => {
  const changeActive = () => {
    console.log('changeActive------');
  }

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home changeActive={changeActive} />} />
            <Route path="/react16" element={<React16 />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
