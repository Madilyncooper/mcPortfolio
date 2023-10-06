import { useState } from 'react';
import './App.css';
import Navigation from '../src/components/Navigation'
import Home from './components/Home';
import About from './components/About';
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




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
          <Route
            path="/projects"
            element={<Projects />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App;
