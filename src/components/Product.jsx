import React from "react";
import "../css/Product.css";

const Product = ({ id, name, description, image }) => {
  // console.log(image);
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
        <button className="btn btn-primary me-3">Editar</button>

        <button className="btn btn-danger">Eliminar</button>
      </td>
    </tr>
  );
};

export default Product;
