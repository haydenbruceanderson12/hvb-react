import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'

function App() {
  return (
    <Router>
      <Home component={Home} exact />
    </Router>
  )
}

export default App
