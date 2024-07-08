//useFetch.js
import { useEffect, useState } from "react"; // Importamos los hooks useEffect y useState de React.

export const useFetch = (url) => {
  // Inicializamos el estado con un objeto que contiene data, isLoading y errors.
  const [state, setState] = useState({
    data: null, 
    isLoading: true,
    errors: null
  });

  // Definimos una función asíncrona para realizar la solicitud fetch.
  const getFetch = async () => {
    try { 
      // Hacemos una solicitud fetch a la URL especificada.
      const response = await fetch(url);
      // Parseamos la respuesta a JSON.
      const data = await response.json(); 
      // Si la solicitud es exitosa, actualizamos el estado con los datos obtenidos y establecemos isLoading a false.
      setState({
        data, 
        isLoading: false,
        errors: null
      });
    } catch (error) {
      // Si hay un error, actualizamos el estado con el error y establecemos isLoading a false.
      setState({
        data: null, 
        isLoading: false,
        errors: error
      });
    }
  };

  // Usamos useEffect para llamar a getFetch cuando el componente se monte o cuando la URL cambie.
  useEffect(() => {
    if (!url) return; // Si no hay URL, no hacemos nada.
    getFetch(); // Llamamos a la función getFetch para obtener los datos.
  }, [url]); // El useEffect depende de la URL.

  return state; // Retornamos el estado completo que contiene data, isLoading y errors.
};