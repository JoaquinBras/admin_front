import React, { useState } from 'react'
import axios from 'axios'
import '../css/Forms.css'

const AdminRegisterForm = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = async e => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append('firstname', firstname)
      formData.append('lastname', lastname)
      formData.append('email', email)
      formData.append('password', password)

      const response = await axios.post(
        'http://localhost:3000/admin/register',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      console.log(response.data)
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
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
          <h3 className="text-muted">Registro de administrador</h3>
        </div>
        <hr />
        <form onSubmit={handleFormSubmit}>
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
            value={firstname}
            onChange={e => setFirstName(e.target.value)}
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
            value={lastname}
            onChange={e => setLastName(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
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

export default AdminRegisterForm
