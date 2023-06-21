import React from "react";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../Redux/adminSlice";

function SideBar() {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAdmin());
    navigate("/login");
  };

  return (
    <nav id="sidebar" className="col-md-2 col-sm-1">
      <ul className="list-group list-group-flush p-3">
        <li className="list-group-item-dark">
          <Link to="/">
            <i className="fas fa-chair px-3"></i>Dashboard
          </Link>
        </li>
        <li className="list-group-item-dark">
          <Link to="/products">
            <i className="fas fa-chair px-3"></i>Productos
          </Link>
        </li>
        <li className="list-group-item-dark">
          <Link to="/orders">
            <i className="fas fa-chair px-4"></i>Pedidos
          </Link>
        </li>
        <li className="list-group-item-dark">
          <Link to="/settings">
            <i className="fas fa-chair px-4"></i>Ajustes
          </Link>
        </li>
        <li className="list-group-item-light">
         <Link to="/login" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
           </Link>
          </li>
      </ul>
    </nav>
  );
}

export default SideBar;
