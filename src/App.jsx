import { useState } from 'react';
import './App.css';
import Nav from '../src/components/Nav';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/> 
    </>
  )
}

export default App;
