import Header from "./componentes/header.jsx"
import ListadoPaciente from "./componentes/ListadoPaciente.jsx"
import Paciente from "./componentes/Paciente.jsx"
import Formulario from "./componentes/formulario.jsx"
import Error from "./componentes/Error.jsx"
import { useState } from "react"


function App() {

  const[Pacientes,setPacientes]=useState([])
  const [Paciente, setPaciente]=useState([])
  
  
  return (
    <div className="container mx-auto mt-15">
      <Header/ >

      <div className="md-flex">
      <Formulario
       pacientes={Pacientes}
       setPacientes={setPacientes}
       Paciente={Paciente}
       setPaciente={setPaciente}/>
      <ListadoPaciente />
      
      </div>
      
    </div>
  )
}
export default App


