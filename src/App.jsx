import { useState } from 'react';
import './App.css';
import Navigation from '../src/components/Navigation'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    </>
  )
}

export default App;
