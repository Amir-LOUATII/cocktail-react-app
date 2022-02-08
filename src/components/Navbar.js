import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className={classes.logo}>Cocktails</div>
        <nav>
          <button>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : null
              }
              to="/"
            >
              Home
            </NavLink>
          </button>
          <button>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? classes.active : null
              }
            >
              About
            </NavLink>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
