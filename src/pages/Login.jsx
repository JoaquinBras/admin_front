import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAdmin } from "../../Redux/adminSlice";
import axios from "axios";

import '../css/Forms.css'

const AdminLoginForm = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/admin/login",
        data: {
          email: emailValue,
          password: passwordValue,
        },
      });
      console.log(response.data);
      dispatch(setAdmin(response.data));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container d-grid align-items-center justify-content-center">
      <div
        className="shadow rounded m-5 p-4 custom-form white-form"
        id="contenedor"
      >
        <div>
          <h3 className="text-muted">Login de administrador</h3>
        </div>
        <hr />
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="email" className="mb-2 text-muted fw-bold">
            Correo
          </label>
          <input
            autoFocus
            type="email"
            id="email"
            name="email"
            className="form-control mb-3"
            placeholder="Ingrese su correo.."
            value={emailValue}
            onChange={(event) => setEmailValue(event.target.value)}
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
            value={passwordValue}
            onChange={(event) => setPasswordValue(event.target.value)}
          />

          <button className="btn btn-success mb-2 mt-2" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLoginForm
