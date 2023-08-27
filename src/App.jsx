import { useState } from 'react';
import './App.css';
import Nav from '../src/components/Nav';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/> 
<h1>First solo project!</h1>
    </>
  )
}

export default App;
