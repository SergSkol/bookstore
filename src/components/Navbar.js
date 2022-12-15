import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <h1>Bookstore CMS</h1>
    <ul className="navMenu">
      <li><Link to="/" className="navItem">BOOKS</Link></li>
      <li><Link to="/categories" className="navItem">CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default Navbar;
