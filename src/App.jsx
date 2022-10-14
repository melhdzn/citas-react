import Header from "./componentes/header.jsx"
import ListadoPaciente from "./componentes/ListadoPaciente.jsx"
import Paciente from "./componentes/Paciente.jsx"
import Formulario from "./componentes/formulario.jsx"
import Costos from "./componentes/Costos.jsx"
function App() {

  return (
    <div className="container mx-auto mt-15">
      <Header />
      <ListadoPaciente />
      <Paciente />
      <Formulario/>
      <Costos/>
      
    </div>
  )
}
export default App


