import React from "react";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";

function SideBar() {
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
      </ul>
    </nav>
  );
}

export default SideBar;
