import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "../components/Category";
import SideBar from "../components/Sidebar";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate(`/categoryRegistration`);
  };
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/category");
      const categoryList = Array.isArray(response.data.categories)
        ? response.data.categories
        : [];
      setCategories(categoryList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:3000/category/${categoryId}`);
      fetchCategories();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="row p-0">
      <Navbar />
      <SideBar />

      <div id="contentArea" className="col-md-10 col-sm-9">
        <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
          <h2>CATEGORIES</h2>
          <button
            className="btn btn-success me-3"
            href="/categories/crear"
            onClick={handleCreate}
          >
            Agregar categoria
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
            {categories.map((category) => (
              <Category
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
                onDelete={handleDeleteCategory}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Categories;
