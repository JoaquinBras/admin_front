import React from "react";
import SideBar from "../components/Sidebar";
import Navbar from "../components/NavBar";

function Orders() {
  return (
    <section className="row">
      <Navbar />
      <SideBar />
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
          <h2>Pedidos</h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Cliente</th>
              <th scope="col">Productos</th>
              <th scope="col">Estado</th>
              <th className="text-center" scope="col">
                Total Us$
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </section>
  );
}

export default Orders;
