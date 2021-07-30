import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from "./SearchInput";
import Logo from '../assets/static/icons/Logo_ML.png';
import '../assets/styles/Navbar.scss';

const Navbar = () => (
  <header className="navbar-container">
    <section className="navbar-brand">
      <Link to="/">
        <img src={Logo} alt="Mercado Libre Logo" />
      </Link>
    </section>
    <section className="navbar-input">
      <SearchInput />
    </section>
  </header>
);

export default Navbar;