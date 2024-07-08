//useForm.js
import { useState } from "react";

export const useForm = (initialForm = {}) => {
  // Creamos el estado del formulario, inicializado con `initialForm`
  const [formState, setFormState] = useState(initialForm);

  // Función para manejar los cambios en los campos del formulario
  const onInputChange = ({ target }) => {
    const { name, value } = target; // Extraemos el nombre y valor del input
    // Actualizamos el estado del formulario
    setFormState({
      ...formState,
      [name]: value // Usamos el nombre del campo como clave para actualizar su valor
    });
  };

  // Retornamos el estado del formulario y la función de manejo de cambios
  return {
    ...formState, // Desestructuramos y retornamos el estado del formulario
    formState,    // Incluimos el estado completo del formulario
    onInputChange // Retornamos la función para manejar cambios en los inputs
  };
};
