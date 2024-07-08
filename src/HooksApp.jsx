//HooksApp.jsx
import { UsuariosComponent } from "./assets/components/UsuariosComponent"
import { FormularioComponent } from "./assets/components/FormularioComponent"
import {ContadorComponent} from "./assets/components/ContadorComponent"
import { CalculosPesados } from "./assets/components/CalculosPesados"

export const HooksApp = () => {
  return (
    <>
    <h1>Aplicación de Hooks</h1>
    <hr />
    <CalculosPesados/>
    <UsuariosComponent/>
    <FormularioComponent/>
    <ContadorComponent/>
    </>
  )
}
