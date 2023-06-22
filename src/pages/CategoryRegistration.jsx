import React, { useState } from 'react'
import axios from 'axios'
import '../css/Forms.css'

function CategoryRegistrationForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  const handleFormSubmit = async e => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      formData.append('image', image)

      const response = await axios.post(
        'http://localhost:3000/category',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      console.log(response.data)
      setName('')
      setDescription('')
      setImage(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container d-grid align-items-center justify-content-center">
      <div
        className="shadow rounded m-5 p-4 custom-form white-form"
        id="contenedor"
      >
        <div>
          <h3 className="text-muted fw-bold">Registro de categoría</h3>
        </div>
        <hr />
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
            onChange={e => setName(e.target.value)}
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
            onChange={e => setDescription(e.target.value)}
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
            onChange={e => setImage(e.target.files[0])}
            accept="image/*"
            required
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
