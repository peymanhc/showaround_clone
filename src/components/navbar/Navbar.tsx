import React from "react";
import styles from "./Navbar.module.scss";
import * as Routes from "../../routes";
import Logo from "../../images/navLogo.png";
import { Container, NavbarBrand, Nav, Collapse } from "react-bootstrap";
import Navbaritem from "../navbaritem";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Nav
      className={` navbar fixed-top navbar-expand-lg navbar-light w-100 ${styles.navbar}`}
    >
      <Container className="p-0" >
        <Link to={Routes.baseUrl}>
          <NavbarBrand style={{ color: "#d87e18", fontWeight: "bold" }}>
            <img
              alt="showaround_Clone"
              width="185px"
              height="50px"
              src={Logo}
            />
          </NavbarBrand>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <Collapse>
          <Navbaritem />
        </Collapse>
      </Container>
    </Nav>
  );
};

export default Navbar;
