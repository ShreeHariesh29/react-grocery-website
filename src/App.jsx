import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Home components/Header'
import Home from './pages/Home'
import EggsandMeat from './pages/EggsandMeat'
import FruitsandVegs from './pages/FruitsandVegs'
import Products from './pages/Products'
import Discount from './pages/Discount'
import Baby from './pages/Baby'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eggs" element={<EggsandMeat />} />
      <Route path="/baby" element={<Baby />} />
      <Route path="/products" element={<Products />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/fruits" element={<FruitsandVegs />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
