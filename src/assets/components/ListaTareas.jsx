import React, { useReducer } from 'react';
import { useForm   } from './hooks/useForm';

// Estado inicial
const initialState = [{
  id: 1,
  tarea: 'Explicar reducers',
  finalizada: false
}];

// Reducer
const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '[TAREAS] Agregar tarea':
      return [...state, action.payload];
    case '[TAREAS] Editar tarea':
      return state.map(tarea =>
        tarea.id === action.payload.id ? action.payload : tarea
      );
    case '[TAREAS] Eliminar tarea':
      return state.filter(tarea => tarea.id !== action.payload.id);
    case '[TAREAS] Borrar tareas':
      return [];
    default:
      return state;
  }
};

// Componente ListaTareas
export const ListaTareas = () => {
  const [tareasState, dispatch] = useReducer(tareaReducer, initialState);
  const { tarea, formState, onInputChange } = useForm({ tarea: '' });

  const agregarTarea = (event) => {
    event.preventDefault();
    if (formState.tarea.trim().length === 0) return; // Verifica que no se agreguen tareas vacías

    const nuevaTarea = {
      id: tareasState.length + 1,
      tarea: formState.tarea,
      finalizada: false
    };
    dispatch({ type: '[TAREAS] Agregar tarea', payload: nuevaTarea });
  };

  return (
    <>
      <form onSubmit={agregarTarea}>
        <div className="form-group">
          <label htmlFor="tarea">Ingresa nueva tarea</label>
          <input
            type="text"
            className="form-control"
            name="tarea"
            placeholder="Introducir tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <hr />
      <ul>
        {tareasState.map(item => (
          <li key={item.id}>{item.tarea}</li>
        ))}
      </ul>
    </>
  );
};
