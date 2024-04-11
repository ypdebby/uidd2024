import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/about">About us</Link>
    </nav>
  );
}