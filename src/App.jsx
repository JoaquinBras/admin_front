import './App.css'
import { Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Settings from './pages/Settings'
import ProductRegistration from './pages/ProductRegistration'
import ProductEdit from './pages/ProductEditForm'
import Login from './pages/Login'
import CategoryRegistration from './pages/CategoryRegistration'
import CategoryEdit from './pages/CategoryEdit'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/productRegistration" element={<ProductRegistration />} />
        <Route path="/productEdit" element={<ProductEdit />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/categoryRegistration"
          element={<CategoryRegistration />}
        />
        <Route path="/categoryEdit" element={<CategoryEdit />} />
      </Routes>
    </>
  )
}

export default App
