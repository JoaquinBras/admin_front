import React from "react";
import "../css/Category.css";
import { useNavigate } from "react-router-dom";

const Category = ({ id, name, description, image, onDelete }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    navigate(`/categoryEdit/${id}`);
  };

  return (
    <tr>
      <td className="align-middle">
        <dd>{id}</dd>
      </td>
      <td className="align-middle">
        <dd>{name}</dd>
      </td>
      <td className="align-middle">
        <dd>{description}</dd>
      </td>
      <td>
        <img
          className="img-thumbnail"
          src={`http://localhost:3000/img/${image}`}
          alt={name}
        />
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

export default Category;
