import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import { traducciones } from "../data/dictionary";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { lang, setLang } = useContext(LanguageContext);

  const themeLocal = localStorage.getItem("theme");
  const langStorage = localStorage.getItem("lang");
  console.log(langStorage);

  const t = traducciones[langStorage];

  const navLinkTextStyle =
    themeLocal === "light" ? "text-body-secondary" : "text-light";

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    console.log(theme);
    if (themeLocal === "light") {
      localStorage.setItem("theme", "dark");
    }
    if (themeLocal === "dark") {
      localStorage.setItem("theme", "light");
    }
  }

  function handleSelectChange(e) {
    const { value } = e.target;
    setLang((prevState) => (prevState === "es" ? "en" : "es"));
    console.log(value);
    localStorage.setItem("lang", value);
  }

  return (
    <Navbar
      expand="lg"
      className={themeLocal === "light" ? "bg-body-secondary" : "bg-dark"}
    >
      <Container>
        <Navbar.Brand className={navLinkTextStyle} href="#home">
          Plataforma-de-Formacion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center gap-3">
            <NavLink
              className={({ isActive }) =>
                `${navLinkTextStyle} text-decoration-none ${
                  isActive
                    ? "text-decoration-underline"
                    : "text-decoration-none"
                }`
              }
              to="/"
            >
              {t.home}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${navLinkTextStyle} text-decoration-none ${
                  isActive
                    ? "text-decoration-underline"
                    : "text-decoration-none"
                }`
              }
              to="/cursos"
            >
              {t.courses}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${navLinkTextStyle} text-decoration-none ${
                  isActive
                    ? "text-decoration-underline"
                    : "text-decoration-none"
                }`
              }
              to="/admin"
            >
              {t.admin}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${navLinkTextStyle} text-decoration-none ${
                  isActive
                    ? "text-decoration-underline"
                    : "text-decoration-none"
                }`
              }
              to="/login"
            >
              {t.login}
            </NavLink>

            <Form.Select
              className={`bg-transparent ${
                themeLocal === "light"
                  ? "border border-dark text-dark"
                  : "text-light"
              }`}
              value={langStorage}
              onChange={(e) => handleSelectChange(e)}
              id="langId"
              aria-label="Default select example"
            >
              <option className="text-dark" value="es">
                ES
              </option>
              <option className="text-dark" value="en">
                EN
              </option>
            </Form.Select>

            {themeLocal === "light" ? (
              <Button onClick={handleToggleTheme} variant="outline-dark">
                {t.dark}
              </Button>
            ) : (
              <Button onClick={handleToggleTheme} variant="outline-light">
                {t.light}
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
