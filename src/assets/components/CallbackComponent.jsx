// Definimos el componente CallbackComponent
import { Incrementar } from "./Incrementar"; // Importamos el componente Incrementar
import { useCallback, useState } from "react"; // Importamos el hook useState y useCallback desde React

export const CallbackComponent = () => {
  const [counter, setCounter] = useState(0); // Inicializamos el estado counter con 0 y proporcionamos setCounter para actualizarlo

  // Definimos la función incrementarPadre usando useCallback para memorizarla
  const incrementarPadre = useCallback((val) => {
    setCounter(prevCounter => prevCounter + val); // Usamos el valor anterior del estado
  }, []); // Dependencias vacías significa que la función no cambiará

  // Renderizamos el componente CallbackComponent
  return (
    <>
      <h1>Contador: {counter}</h1> {/* Mostramos el valor del contador */}
      <Incrementar incrementar={incrementarPadre} /> {/* Pasamos la función incrementarPadre como prop al componente Incrementar */}
    </>
  );
};


