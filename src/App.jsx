import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { Contact } from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <div className="container">
          <h1>SRI</h1>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='mailto:srinathdevan12@gmail.com'>Contact</a></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Contact' element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default App
