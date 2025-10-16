import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <ul>
      <Link to="/">Home</Link>
      <Link to="/destination">Destinations</Link>
      </ul>
    </div>
  );
}
