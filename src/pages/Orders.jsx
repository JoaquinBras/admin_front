import React from "react";
import SideBar from "../components/Sidebar";
import Navbar from "../components/NavBar";

function Orders() {
  const orders = [
    {
      id: 1,
      cliente: "John Smith",
      productos: "Espejo",
      estado: "Pedido",
      total: 120,
    },
    {
      id: 2,
      cliente: "Emily Johnson",
      productos: "Cuadro",
      estado: "Pagado",
      total: 180,
    },
    {
      id: 3,
      cliente: "Michael Williams",
      productos: "Tapiz",
      estado: "Listo para entrega",
      total: 210,
    },
    {
      id: 4,
      cliente: "Sophia Anderson",
      productos: "Espejo",
      estado: "Entregado",
      total: 150,
    },
  ];

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
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.cliente}</td>
                <td>{order.productos}</td>
                <td>{order.estado}</td>
                <td className="text-center">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Orders;
