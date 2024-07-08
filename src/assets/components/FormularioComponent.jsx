//FormularioComponent.jsx
import { useEffect, useRef } from "react";
import { useForm } from "./hooks/useForm";

export const FormularioComponent = () => { 

  const focusRef = useRef()//creamos una referencia para focalizar en e-mail

  // Definimos el estado inicial del formulario
  const initialForm = {
    userName: "",
    email: "",
    password: ""
  };

  // Utilizamos el hook `useForm` para manejar el estado del formulario
  const { formState, userName, email, password, onInputChange } = useForm(initialForm);

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (event) => {
    event.preventDefault(); // Prevenimos el comportamiento predeterminado del formulario (recargar la página)
    console.log(formState); // Mostramos el estado actual del formulario en la consola
  };

  //focalizamos al arrancar en la referencia
  useEffect(() => {   
    focusRef.current.focus()
  }, []);
  
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your Username"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          //aquí ponemos la referencia para que focalize al arrancar
          ref = {focusRef}
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
