import React, { useState, useEffect } from "react";
import axios from "axios";
import Admin from "../components/Admin";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Admins() {
  const [admins, setAdmins] = useState([]);

  const navigate = useNavigate();

  const handleCreate = () => {
    navigate(`/adminRegister`);
  };

  useEffect(() => {
    listAdmins();
  }, []);

  async function listAdmins() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin`);

      const adminsList = Array.isArray(response.data) ? response.data : [];
      setAdmins(adminsList);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = async (adminId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/admin/${adminId}`);
      const updatedAdmins = admins.filter((admin) => admin.id !== adminId);
      setAdmins(updatedAdmins);
      console.log(`Admin con ID ${adminId} eliminado.`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="row">
      <Navbar />
      <SideBar />

      <div id="contentArea" className="col-md-10 col-sm-9">
        <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
          <h2>Administradores</h2>
          {/* <button className="btn btn-success me-3">
            Agregar administrador
          </button> */}
          <i
            className="fas fa-plus mx-5 text-success"
            onClick={handleCreate}
            href="/administradores/crear"
          ></i>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th className="text-center" scope="col">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <Admin
                key={admin.id}
                id={admin.id}
                firstname={admin.firstname}
                lastname={admin.lastname}
                email={admin.email}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Admins;
