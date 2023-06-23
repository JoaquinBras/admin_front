import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

const Admin = ({ id, firstname, lastname, email, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    navigate(`/adminEdit/${id}`);
  };

  return (
    <tr>
      <td className="align-middle">
        <dd>{id}</dd>
      </td>
      <td className="align-middle">
        <dd>{firstname}</dd>
      </td>
      <td className="align-middle">
        <dd>{lastname}</dd>
      </td>
      <td className="align-middle">
        <dd>{email}</dd>
      </td>

      <td className="text-center align-middle">
        <button className="btn btn-primary me-3" onClick={handleEdit}>
          Editar
        </button>

        <button className="btn btn-danger" onClick={handleDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Admin;
