import { Link, useSearchParams } from "react-router";
import cursos from "../data/cursos";
import { traducciones } from "../data/dictionary";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export default function Cursos() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const categoriaFilter = searchParams.get("category");
  const nivelFilter = searchParams.get("nivel");

  const { lang } = useContext(LanguageContext);
  const langStorage = localStorage.getItem("lang");
  const t = traducciones[langStorage];

  const filteredUsers = cursos.filter((curso) => {
    const matchedCategory = categoriaFilter
      ? curso.categoria.toLowerCase().includes(categoriaFilter.toLowerCase())
      : true;
    const matchedNivel = nivelFilter
      ? curso.nivel.toLowerCase().includes(nivelFilter.toLowerCase())
      : true;
    return matchedCategory && matchedNivel;
  });

  function handleButtonClick(e) {
    let { id } = e.target;
    console.log(id);
    switch (id) {
      case "front":
        setSearchParams((prev) => {
          const newParams = new URLSearchParams(prev);
          newParams.set("category", "frontend");
          return newParams;
        });
        break;
      case "back":
        setSearchParams((prev) => {
          const newParams = new URLSearchParams(prev);
          newParams.set("category", "backend");
          return newParams;
        });
        break;
      case "avanzado":
        setSearchParams((prev) => {
          const newParams = new URLSearchParams(prev);
          newParams.set("nivel", "avanzado");
          return newParams;
        });
        break;
      case "basico":
        setSearchParams((prev) => {
          const newParams = new URLSearchParams(prev);
          newParams.set("nivel", "basico");
          return newParams;
        });
        break;
      default:
        setSearchParams("");
        break;
    }
  }

  console.log(searchParams);

  return (
    <div className="text-light">
      <h1>{t.courseList}</h1>
      <h5 className="mt-4">Filtrar por:</h5>
      <h6 className="mt-2">Categoria</h6>
      <div className="d-flex flex-row gap-2">
        <button
          className="btn btn-secondary"
          onClick={handleButtonClick}
          id="front"
        >
          Frontend
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleButtonClick}
          id="back"
        >
          Backend
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleButtonClick}
          id="all"
        >
          Show All
        </button>
      </div>
      <h6 className="mt-2">Nivel</h6>
      <div className="d-flex flex-row gap-2">
        <button
          className="btn btn-secondary"
          onClick={handleButtonClick}
          id="avanzado"
        >
          Avanzado
        </button>
        <button
          className="btn btn-secondary"
          onClick={handleButtonClick}
          id="basico"
        >
          Basico
        </button>
      </div>
      <ul className="list-group list-container">
        {filteredUsers.map((curso) => (
          <li className="border p-3" key={curso.id}>
            <Link
              className="text-decoration-none link-light link-opacity-50-hover "
              to={`/cursos/${curso.id}`}
            >
              {curso.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
