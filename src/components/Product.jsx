import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ id, name, description, image, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    navigate(`/productEdit/${id}`);
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
        <i className="far fa-edit me-3" onClick={handleEdit}></i>
        <i className="fas fa-trash-alt ms-3" onClick={handleDelete}></i>
      </td>
    </tr>
  );
};

export default Product;
