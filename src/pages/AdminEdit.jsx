import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/Forms.css";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const EditAdminForm = () => {
  const { id } = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/${id}`
      );
      const admin = response.data;
      setFirstname(admin.firstname);
      setLastname(admin.lastname);
      setEmail(admin.email);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        firstname,
        lastname,
        email,
        password,
      };

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/admin/${id}`,
        formData
      );

      setSuccessMessage("Datos guardados.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Navbar />

      <div className="flex-grow-1 d-flex">
        <SideBar />
        <div className="container d-grid align-items-center justify-content-center">
          <div
            className="shadow rounded m-5 p-4 custom-form white-form"
            id="contenedor"
          >
            <div>
              <h3 className="text-muted fw-bold">Editar administrador</h3>
            </div>

            <hr />
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="firstname" className="mb-2 text-muted fw-bold">
                Nombre
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="form-control mb-3"
                placeholder="Ingrese su nombre.."
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <label htmlFor="lastname" className="mb-2 text-muted fw-bold">
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-control mb-3"
                placeholder="Ingrese su apellido.."
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
              <label htmlFor="email" className="mb-2 text-muted fw-bold">
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control mb-3"
                placeholder="Ingrese su correo.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password" className="mb-2 text-muted fw-bold">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control mb-3"
                placeholder="Ingrese su contraseña.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button className="btn btn-success mb-2 mt-2" type="submit">
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAdminForm;
