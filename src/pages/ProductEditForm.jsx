import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../css/Forms.css'
import SideBar from '../components/Sidebar'
import Navbar from '../components/NavBar'

function ProductEditForm() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [categories, setCategories] = useState([])
  const [successMessage, setSuccessMessage] = useState('')

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [salient, setSalient] = useState(false)
  const [slug, setSlug] = useState('')
  const [image, setImage] = useState(null)

  useEffect(() => {
    fetchProduct()
    fetchCategories()
  }, [])

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product/${id}`
      )
      const product = response.data
      console.log(product)
      setProduct({ product })
      setName(product.name)
      setDescription(product.description)
      setStock(product.stock)
      setPrice(product.price)
      setSalient(product.salient)
      setSlug(product.slug)
      setCategory(product.Category.id)
    } catch (error) {
      console.error(error)
    }
  }

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
      if (image) {
        formData.append('image', image)
      }
      if (category) {
        formData.append('categoryId', category)
      }

      await axios.patch(
        `${import.meta.env.VITE_API_URL}/product/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      setSuccessMessage('Datos guardados.')
    } catch (error) {
      console.error(error)
    }
  }

  if (!product) {
    return <div>Cargando...</div>
  }

  return (
    <section className="row p-0">
      <Navbar />

      <div className="flex-grow-1 d-flex">
        <SideBar />
        <div className="container container-edit-form d-grid align-items-center justify-content-center">
          <div
            className="shadow rounded custom-form-register  custom-form white-form"
            id=""
          >
            <div>
              <h3 className="text-muted fw-bold">Editar producto</h3>
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
                className="form-control mb-3"
                placeholder="Ingrese descripción del producto.."
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
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
              >
                <option value="">Seleccione categoría..</option>
                {categories.map(categoryOption => (
                  <option
                    value={categoryOption.id}
                    key={categoryOption.id}
                    selected={categoryOption.id === category ? 'true' : ''}
                  >
                    {categoryOption.name}
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
              />
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              <button className="btn btn-success mb-2" type="submit">
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductEditForm
