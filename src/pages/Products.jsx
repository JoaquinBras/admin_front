import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handleCreate = () => {
    navigate(`/productRegistration`);
  };

  useEffect(() => {
    listProducts();
  }, []);

  async function listProducts() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product/`
      );
      const productList = Array.isArray(response.data.products)
        ? response.data.products
        : [];
      setProducts(productList);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/product/${productId}`
      );
      const updatedProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(updatedProducts);
      console.log(`Producto con ID ${productId} eliminado.`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="row p-0">
      <Navbar />
      <SideBar />

      <div id="contentArea" className="col-10">
        <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
          <h2 className="mx-2">Productos</h2>
          <i
            className="fas fa-plus mx-5 text-success"
            onClick={handleCreate}
            href="/administradores/crear"
          ></i>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Producto</th>
              <th scope="col">Descripción</th>
              <th scope="col">Imagen</th>
              <th className="text-center" scope="col">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Products;
