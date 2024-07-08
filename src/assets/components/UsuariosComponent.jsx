//UsuariosComponent.jsx
import { useFetch } from "./hooks/useFetch"; // Importamos el hook personalizado useFetch desde la ruta especificada.

export const UsuariosComponent = () => {
  // Llamamos al hook useFetch pasando la URL de la API como argumento.
  // Desestructuramos el objeto retornado por el hook para obtener data, isLoading y errors.
  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (isLoading) {
    // Si isLoading es true, retornamos un mensaje indicando que los datos están cargando.
    return <h4>Cargando...</h4>;
  }

  if (errors) {
    // Si existe algún error, retornamos un mensaje con el error.
    return <h4>Error: {errors.message}</h4>;
  }

  return (
    <>
      <h1>Lista de Usuarios</h1>
      {/* Usamos una tabla de Bootstrap para mostrar los datos de los usuarios */}
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {/* Iteramos sobre el array de datos y creamos una fila por cada usuario */}
          {data.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

////

