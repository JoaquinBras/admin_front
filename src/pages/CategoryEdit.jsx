import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/Forms.css";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

const CategoryEditForm = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/category/${id}`
      );
      const category = response.data;
      setName(category.name);
      setDescription(category.description);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      if (image) {
        formData.append("image", image);
      }

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/category/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("Datos guardados.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="row p-0">
    <Navbar />
    

      <div className="flex-grow-1 d-flex">
        <SideBar />
        <div className="container d-grid align-items-center justify-content-center">
          <div
            className="shadow rounded m-5 p-4 custom-form white-form"
            id="contenedor"
          >
            <div>
              <h3 className="text-muted fw-bold">Editar categoría</h3>
            </div>
            <hr />
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="name" className="mb-2 text-muted fw-bold">
                Nombre
              </label>
              <input
                autoFocus
                type="text"
                id="name"
                name="name"
                className="form-control mb-3"
                placeholder="Ingrese nombre de categoría.."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="description" className="mb-2 text-muted fw-bold">
                Descripción
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                className="form-control mb-3"
                placeholder="Ingrese descripción de categoría.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <label htmlFor="image" className="text-muted fw-bold mb-2">
                Seleccionar una imagen
              </label>
              <input
                id="image"
                name="image"
                type="file"
                className="form-control mb-3"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
              />
              <button className="btn btn-success mb-2 mt-3" type="submit">
                Editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryEditForm;
