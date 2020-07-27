import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home Page</Link>
      </li>
      <li>
        <Link to="/repos">Repos Page</Link>
      </li>
    </ul>
  );
};

export default NavBar;
