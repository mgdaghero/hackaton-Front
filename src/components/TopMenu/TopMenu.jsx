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
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/"> Perfil </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/User"> Mis ofertas </Link>
        </Menu.Item>

      </Menu>
    </div>
  );
};

export default TopMenu;
