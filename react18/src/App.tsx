import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'

const basename = process.env.NODE_ENV === "production" ? "/demo-react18/" : "";

function App() {
  return (
    <div className="App">
      <Router basename={basename}>
        <div>hello react 18</div>
      </Router>
    </div>
  )
}

export default App
