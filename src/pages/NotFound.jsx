export default function NotFound({ id }) {
  return (
    <div className="d-flex flex-column text-center text-light fs-1">
      <h1>404</h1>
      {id ? (
        <h2>Curso con id: {id} no encontrado</h2>
      ) : (
        <h2>Ocurrió un error</h2>
      )}
    </div>
  );
}
