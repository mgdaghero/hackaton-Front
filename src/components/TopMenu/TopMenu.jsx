import React from "react";
import "./TopMenu.css";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/imgs/Ofertalo.png";

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="top-menu-logo">
        <img className="logo-img" src={Logo} alt="ofertalo logo" />
      </div>
      <div className="header-links">
        <Link className="menu-option" to="/">
          Perfil
        </Link>
        <Link className="menu-option" to="/">
          Ver Articulos
        </Link>
        <Link className="menu-option" to="/">
          Mis Ofertas
        </Link>
      </div>
    </div>
  );
};

export default TopMenu;
