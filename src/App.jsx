import { Outlet } from "react-router";
import Header from "./components/Header";
import ThemeContext from "./context/ThemeContext";
import { useState } from "react";
import LanguageContext from "./context/LanguageContext";

function App() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("es");
  const themeStorage = localStorage.getItem("theme");
  // const langStorage = localStorage.getItem("lang");

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <LanguageContext value={{ lang, setLang }}>
        <div
          className={`main-layout ${themeStorage === "dark" ? "bg-dark" : ""}`}
        >
          <Header />
          <div className="content-container">
            <Outlet />
          </div>
        </div>
      </LanguageContext>
    </ThemeContext>
  );
}

export default App;
