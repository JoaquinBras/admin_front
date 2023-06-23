import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Forms.css";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

const AdminRegisterForm = () => {
  const navigate = useNavigate();

  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [registrationError, setRegistrationError] = useState(false);

  async function handleSubmitRegister(event) {
    event.preventDefault();
    try {
      await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/admin/register`,
        data: {
          firstname: firstNameValue,
          lastname: lastNameValue,
          email: emailValue,
          password: passwordValue,
        },
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      setRegistrationError(true);
    }
  }

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
              <h3 className="text-muted fw-bold">Registro de administrador</h3>
            </div>
            <hr />
            <form onSubmit={handleSubmitRegister} autoComplete="off">
              <label htmlFor="name" className="mb-2 text-muted fw-bold">
                Nombre
              </label>
              <input
                autoFocus
                type="text"
                id="firstname"
                name="firstname"
                className="form-control mb-3"
                placeholder="Ingrese nombre de administrador.."
                value={firstNameValue}
                onChange={(event) => setFirstNameValue(event.target.value)}
                required
              />
              <label htmlFor="name" className="mb-2 text-muted fw-bold">
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="form-control mb-3"
                placeholder="Ingrese apellido de administrador.."
                value={lastNameValue}
                onChange={(event) => setLastNameValue(event.target.value)}
                required
              />
              <label htmlFor="email" className="mb-2 text-muted fw-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control mb-3"
                placeholder="Ingrese email.."
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
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
                placeholder="Ingrese contraseña.."
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
                required
              />
              <button className="btn btn-success mb-2 mt-3" type="submit">
                Registrar
              </button>
            </form>
          </div>
        </div>
        <hr />
        {registrationError && (
          <div className="alert alert-danger">
            Ya existe administrador con el email indicado.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminRegisterForm;
