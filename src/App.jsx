import { useState } from 'react';
import './App.css';
import Navigation from '../src/components/Navigation'
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hamburger from './components/Hamburger';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Hamburger />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
          path="/about" 
          element={<About />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
