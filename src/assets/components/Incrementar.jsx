// Definimos el componente Incrementar
import React from "react";

export const Incrementar = React.memo(({ incrementar }) => { // Utilizamos React.memo para evitar renders innecesarios
  return (
    <button onClick={() => incrementar(10)}>+10</button> // Llamamos a la función incrementar con el valor 10 cuando se hace clic en el botón
  );
});
