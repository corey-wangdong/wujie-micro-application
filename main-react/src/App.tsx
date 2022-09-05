import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import React18 from "./pages/React18";
import Vue2 from "./pages/Vue2";
import Vue3 from './pages/Vue3';
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
            <Route path="/react18" element={<React18 />} />
            <Route path="/vue3" element={<Vue3 />} />
            <Route path="/vue2" element={<Vue2 />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
