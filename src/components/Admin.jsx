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
    <tr className="p-0">
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
        <i className="far fa-edit me-3" onClick={handleEdit}></i>
        <i className="fas fa-trash-alt ms-3" onClick={handleDelete}></i>
        {/* <button className="btn btn-primary">Editar</button> */}
        {/* <button className="btn btn-danger" >
          Eliminar
        </button> */}
      </td>
    </tr>
  );
};

export default Admin;
