import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import Navbar from "../components/NavBar";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts();
  }, []);

  async function listProducts() {
    try {
      const response = await axios.get("http://localhost:3000/product/");
      const productList = Array.isArray(response.data.products)
        ? response.data.products
        : [];
      setProducts(productList);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="row p-0">
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
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Products;
