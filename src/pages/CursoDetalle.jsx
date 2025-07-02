import { useParams } from "react-router";
import { Link } from "react-router";
import cursos from "../data/cursos";
import NotFound from "./NotFound";

export default function CursoDetalle() {
  const { id } = useParams();
  const rightCourse = cursos.find((curso) => Number(id) === curso.id);

  if (!rightCourse) {
    return <NotFound id={id} />;
  }

  return (
    <div className="text-light">
      <h1 className="mt-4">{rightCourse.titulo}</h1>
      <p className="fs-3">{rightCourse.descripcion}</p>
      <p className="fs-5">Nivel: {rightCourse.nivel}</p>
      <p className="fs-5">Categoria: {rightCourse.categoria}</p>
      <Link className="link-danger" to="/cursos">Atras</Link>
    </div>
  );
}
