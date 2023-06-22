import React from "react";
import "../css/Home.css";
import "../css/Dashboard.css";
import SideBar from "../components/Sidebar";

import Product from "../components/Product";
import Navbar from "../components/NavBar";

function Products() {
  return (
    <section className="row p-0">
      <Navbar />
      <SideBar />

      <div id="contentArea" className="col-md-10 col-sm-9">
        <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
          <h2>PRODUCTOS</h2>
          <button className="btn btn-success me-3" href="/articulos/crear">
            Nuevo
          </button>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Producto</th>
              <th scope="col">Descripción</th>
              <th scope="col">Image</th>
              <th className="text-center" scope="col">
                Actions
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
}

export default Products;
