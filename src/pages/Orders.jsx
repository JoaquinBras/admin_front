import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SideBar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../css/ordenes.css'

import moment from 'moment'

function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/orders`
      )
      const ordersData = response.data

      setOrders(ordersData)
      console.log(ordersData)
    } catch (error) {
      console.error(error)
    }
  }
  function calculateOrderTotal(order) {
    return order.products
      .reduce((total, product) => {
        return total + product.price * product.qty
      }, 0)
      .toFixed(2)
  }

  //ordersData &&
  return (
    <section className="row p-0">
      <Navbar />
      <div className="flex-grow-1 d-flex">
        <SideBar />
        <div id="contentArea" className="col-10">
          <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
            <h2 className="mx-3">ÓRDENES</h2>
          </div>
          <table className="table table-striped m-3">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Cliente</th>
                <th scope="col">Fecha</th>
                <th scope="col">Productos</th>
                <th scope="col">Estado</th>
                <th className="text-center" scope="col">
                  Total Us$
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    {order.User.firstname} {order.User.lastname}
                  </td>
                  <td>{moment(order.createdAt).format('DD-MM-YYYY HH:mm')}</td>{' '}
                  <td>
                    {order.products.map(products => (
                      <div key={products.id}>
                        <p className="fw-bold">{products.name}</p>
                        <p>Cantidad: {products.qty}</p>
                        <p>Subtotal: {products.price * products.qty}</p>
                      </div>
                    ))}
                  </td>
                  <td>{order.state}</td>
                  <td className="text-center">{calculateOrderTotal(order)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Orders
