import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../images/logo.png"

const NavBar = props => {
  const navItems = [
    { path: "/", text: "Início" },
    { path: "/about", text: "Sobre nós" },
    { path: "/Doações", text: "Doações" },
    { path: "/Pedidos", text: "Pedidos" },
    { path: "/Oficinas", text: "Oficinas Comunitárias" }
  ];

  const renderItems = (navItems, props) =>
    navItems.map(({ path, text }, index) => (
      <li
        key={index}
        className={`nav-item ${
          props.location.pathname === path ? "active" : ""
        }`}
      >
        <Link className="nav-link" to={path}>
          {text}
        </Link>
      </li>
    ));

  return (
    <nav className="navbar navbar-expand-md navbar-default ">
      <div className="navbar-brand">
        <img
          src={logo}
          width="50"
          height="50"
          alt="gbc logo"
        />
        <Link to="/">G.B.C.</Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="collapsibleNavbar"
      >
        <ul className="navbar-nav justify-content-end">
          {renderItems(navItems, props)}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
