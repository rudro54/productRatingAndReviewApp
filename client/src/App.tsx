import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="container mt-5">
      <h1 className="text-primary">Bootstrap + React + Vite</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
    </>
  )
}

export default App
