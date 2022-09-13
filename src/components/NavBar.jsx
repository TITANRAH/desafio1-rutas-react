import React from "react";
import CupCake from "../assets/cupcake.png";
import Cake from "../assets/cake.png";
import Home from "../assets/retirement-home.png";
import Contacto from "../assets/contactos.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <div className="menu">
        <ul className="lista">
          <li>
            <Link to="/home" className="text-white ms-3 text-decoration-none">
              <img src={Home} alt="home" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="text-white ms-3 text-decoration-none">
              <img src={Contacto} alt="home" />
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <div className="logo">
        <ul className="logo-titulo">
          <li>
            <Link to="/home" className="text-white ms-3 text-decoration-none">
              Happy Cake
            </Link>
          </li>
          <li className="imagen">
            <img src={CupCake} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
