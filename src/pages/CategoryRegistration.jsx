import React from 'react'
import '../css/Forms.css'

const CategoryRegistrationForm = () => {
  return (
    <div className="container d-grid align-items-center justify-content-center">
      <div
        className="shadow rounded m-5 p-4 custom-form white-form"
        id="contenedor"
      >
        <div>
          <h3 className="text-muted">Registro de categoría</h3>
        </div>
        <hr />
        <form method="post" action="">
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
          ></textarea>
          <label htmlFor="image" className="text-muted fw-bold mb-2">
            Seleccionar una imagen
          </label>
          <input
            id="image"
            name="image"
            type="file"
            className="form-control mb-3"
          />
          <button className="btn btn-success mb-2 mt-3" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default CategoryRegistrationForm
