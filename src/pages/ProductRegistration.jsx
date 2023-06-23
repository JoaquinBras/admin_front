import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Forms.css'

function ProductRegistrationForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [salient, setSalient] = useState(false)
  const [slug, setSlug] = useState('')
  const [image, setImage] = useState(null)
  const [categories, setCategories] = useState([])

  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/category`
      )
      const { categories } = response.data
      setCategories(categories)
    } catch (error) {
      console.error(error)
    }
  }

  const handleFormSubmit = async e => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      formData.append('stock', stock)
      formData.append('price', price)
      formData.append('categoryId', category)
      formData.append('salient', salient)
      formData.append('slug', slug)
      formData.append('image', image)

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/product`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      setSuccessMessage('Datos guardados.')

      console.log(response.data)
      setName('')
      setDescription('')
      setStock(0)
      setPrice(0)
      setCategory('')
      setSalient(false)
      setSlug('')
      setImage()
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
          <h3 className="text-muted fw-bold">Registro de producto</h3>
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
            placeholder="Ingrese nombre de producto.."
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <label htmlFor="description" className="mb-2 text-muted fw-bold">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control mb-2"
            placeholder="Ingrese descripción de producto.."
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
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
            value={stock}
            onChange={e => setStock(e.target.value)}
            required
          />
          <label htmlFor="price" className="mb-2 text-muted fw-bold">
            Precio
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="form-control mb-3"
            placeholder="Ingrese precio.."
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
          <label htmlFor="category" className="mb-2 text-muted fw-bold">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            className="form-select mb-3"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value="">Seleccione categoría..</option>
            {categories.map(category => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
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
              checked={salient}
              onChange={e => setSalient(e.target.checked)}
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
            value={slug}
            onChange={e => setSlug(e.target.value)}
            required
          />
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

export default ProductRegistrationForm
