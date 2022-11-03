import React from "react";
import { NavLink } from "react-router-dom";

import './Item.css';

const Item = (props) => {
  return (
    <div className="Items-container">
      <NavLink className="link-Item-Detail" to={"/ItemDetail/" + props.id}>
        <h1 className="Item-title">Titulo del Producto</h1>
        <p className="Item-description">Descripcion del producto</p>
        <h3 className="Item-category">Categoria</h3>
        <figure>
          <img src="" alt="imagen producto" />
        </figure>
      </NavLink>
    </div>
  );
};

export default Item;
