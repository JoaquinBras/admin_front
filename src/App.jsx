import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutes";
import { useSelector } from "react-redux";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import ProductRegistration from "./pages/ProductRegistration";
import ProductEdit from "./pages/ProductEditForm";
import Login from "./pages/Login";
import CategoryRegistration from "./pages/CategoryRegistration";
import CategoryEdit from "./pages/CategoryEdit";
import AdminRegister from "./pages/AdminRegister";
import AdminEdit from "./pages/AdminEdit";
import Categories from "./pages/Categories";
import Admins from "./pages/Admins";

function App() {
  const store = useSelector((state) => state);
  const admin = store.admin;

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute admin={admin} redirectTo="/login" />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/productRegistration"
            element={<ProductRegistration />}
          />
          <Route path="/productEdit/:id" element={<ProductEdit />} />
          <Route
            path="/categoryRegistration"
            element={<CategoryRegistration />}
          />
          <Route path="/categoryEdit/:id" element={<CategoryEdit />} />
          <Route path="/adminEdit/:id" element={<AdminEdit />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/adminRegister" element={<AdminRegister />} />
      </Routes>
    </>
  );
}

export default App;
