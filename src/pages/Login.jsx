import React from 'react'

const AdminLoginForm = () => {
  return (
    <div className="container d-grid align-items-center justify-content-center">
      <div className="shadow rounded m-5 p-4 custom-form" id="contenedor">
        <div>
          <h3 className="text-muted">Login de administrador</h3>
        </div>
        <hr />
        <form method="post" action="">
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
