import React from 'react'
import '../css/Forms.css'

const EditProductForm = () => {
  return (
    <div className="container d-grid align-items-center justify-content-center">
      <div
        className="shadow rounded m-5 p-4 custom-form white-form"
        id="contenedor"
      >
        <div>
          <h3 className="text-muted">Editar producto</h3>
        </div>
        <hr />
        <form method="post" action="">
          <label htmlFor="name" className="mb-2 text-muted fw-bold">
            Nombre
          </label>
          <input
            autoFocus
            type="email"
            id="email"
            name="email"
            className="form-control mb-3"
            placeholder="Ingrese nombre de producto.."
          />
          <label htmlFor="description" className="mb-2 text-muted fw-bold">
            Descripción
          </label>
          <textarea
            type="email"
            id="email"
            name="email"
            className="form-control mb-2"
            placeholder="Ingrese descripción de producto.."
          ></textarea>
          <label htmlFor="stock" className="mb-2 text-muted fw-bold">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            className="form-control mb-3"
            placeholder="Ingrese stock.."
          />
          <label htmlFor="category" className="mb-2 text-muted fw-bold">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            className="form-select mb-3"
            placeholder="Seleccione categoría.."
          >
            <option value="">Seleccione categoría..</option>
            <option value="muebles">Muebles</option>
            <option value="espejos">Espejos</option>
            <option value="cuadros">Cuadros</option>
            <option value="luminarias">Luminarias</option>
            <option value="tapices">Tapices</option>
          </select>
          <label htmlFor="salient" className="mb-2 text-muted fw-bold">
            Destacado
          </label>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              id="salient"
              name="salient"
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="salient">
              Producto destacado?
            </label>
          </div>
          <label htmlFor="slug" className="mb-2 text-muted fw-bold">
            Slug
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            className="form-control mb-3"
            placeholder="Ingrese slug.."
          />
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
            Editar
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditProductForm
