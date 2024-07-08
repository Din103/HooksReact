import { useMemo, useState } from "react";

export const CalculosPesados = () => {
  const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2]);
  const [show, setShow] = useState(true);

  const resultado = useMemo(() => {
    console.log('Calculando');
    return listaNumeros.reduce((a, b) => a * b);
  }, [listaNumeros]);

  const agregarNumero = () => {
    setListaNumeros(prevLista => [...prevLista, prevLista[prevLista.length - 1] + 1]);
  };

  return (
    <>    
      <h2>Calculo:</h2>
      <p>{resultado}</p>
      <button className="btn btn-primary" onClick={() => setShow(prevShow => !prevShow)}>
        {show ? 'Hide' : 'Show'}
      </button>
      {show && <div>Content to show/hide</div>}

      <button className="btn btn-primary" onClick={agregarNumero}>Agregar número</button>
    </>
  );
};