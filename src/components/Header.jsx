import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Plataforma-de-Formacion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <NavLink
              className={({ isActive }) =>
                `text-body-secondary text-decoration-none ${
                  isActive
                    ? "text-decoration-underline"
                    : "text-decoration-none"
                }`
              }
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-body-secondary text-decoration-none ${
                  isActive
                    ? "text-decoration-underline"
                    : "text-decoration-none"
                }`
              }
              to="/cursos"
            >
              Cursos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-body-secondary text-decoration-none ${
                  isActive
                    ? "text-decoration-underline"
                    : "text-decoration-none"
                }`
              }
              to="/admin"
            >
              Admin
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-body-secondary text-decoration-none ${
                  isActive
                    ? "text-decoration-underline"
                    : "text-decoration-none"
                }`
              }
              to="/login"
            >
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
