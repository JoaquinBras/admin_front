import React from "react";

const Product = ({ id, product, description, image }) => {
  return (
    <div className="product">
      <h3>{product}</h3>
      <p>{description}</p>
      <img src={image} alt={product} />
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  );
};

export default Product;
