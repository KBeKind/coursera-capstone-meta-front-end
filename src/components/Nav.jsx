import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <img id="nav-logo" src="/LITTLE-LEMON-LOGO.png" />
      </Link>

      <button id="hamburger-menu">☰</button>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about-section">About</Link>
        </li>
        <li>
          <Link href="">Menu</Link>
        </li>
        <li>
          <Link href="/booking-page">Reservations</Link>
        </li>
        <li>
          <Link href="">Order Online</Link>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
