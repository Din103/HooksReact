import { useMemo, useState } from "react"; // Importamos los hooks useMemo y useState desde React

// Definimos el componente funcional CalculosPesados
export const CalculosPesados = () => {
  // useState inicializa listaNumeros con un array de números y proporciona setListaNumeros para actualizarlo
  const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2]);
  
  // useState inicializa show con true y proporciona setShow para actualizarlo
  const [show, setShow] = useState(true);

  // useMemo memoriza el resultado del cálculo para evitar recalcular en cada renderizado
  // Solo se recalcula si listaNumeros cambia
  const resultado = useMemo(() => {
    console.log('Calculando'); // Mensaje de log para indicar cuándo se realiza el cálculo
    return listaNumeros.reduce((a, b) => a * b); // Multiplicamos todos los números en listaNumeros
  }, [listaNumeros]); // Dependencias: solo se recalcula si listaNumeros cambia

  // Función para agregar un nuevo número a listaNumeros
  const agregarNumero = () => {
    // Actualizamos listaNumeros agregando un nuevo número que es 1 más que el último número en la lista
    setListaNumeros(prevLista => [...prevLista, prevLista[prevLista.length - 1] + 1]);
  };

  // Renderizado del componente
  return (
    <>    
      <h2>Calculo:</h2>
      {/* Mostramos el resultado del cálculo */}
      <p>{resultado}</p>
      {/* Botón para alternar el estado de show */}
      <button className="btn btn-primary" onClick={() => setShow(prevShow => !prevShow)}>
        {show ? 'Hide' : 'Show'} {/* Texto del botón cambia según el valor de show */}
      </button>
      {/* Si show es true, mostramos el contenido adicional */}
      {show && <div>Content to show/hide</div>}

      {/* Botón para agregar un nuevo número a listaNumeros */}
      <button className="btn btn-primary" onClick={agregarNumero}>Agregar número</button>
    </>
  );
};
