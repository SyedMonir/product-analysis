import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar id="menubar" bg="dark" variant="dark" expand="lg">
        <Container>
          <Link className="brand-logo" to="/">
            Games Breakdown
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'route'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/reviews"
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'route'
                }
              >
                Reviews
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'route'
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'route'
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'active-route' : 'route'
                }
              >
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
