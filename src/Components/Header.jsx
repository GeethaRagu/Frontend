import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
      {/* Navigation starts */}
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/employees">
                Manage Employees
              </Link>
              <Link className="nav-link" to="/createemployee">
                Add new employee
              </Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navigation ends */}
    </>
    );
};

export default Header;