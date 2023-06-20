import './App.css'
import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import ProductRegistration from './pages/ProductRegistration'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/productRegistration" element={<ProductRegistration />} />
      </Routes>
    </>
  )
}

export default App
