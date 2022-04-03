import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar id="menubar" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Games Breakdown</Navbar.Brand>
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
                to="/customer-reviews"
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
