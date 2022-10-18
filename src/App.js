import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Offer from './routes/Offer'
import Portfolio from './routes/Portfolio'
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
