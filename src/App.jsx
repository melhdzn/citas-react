import Header from "./componentes/header.jsx"
import ListadoPaciente from "./componentes/ListadoPaciente.jsx"
import Paciente from "./componentes/Paciente.jsx"
import Formulario from "./componentes/formulario.jsx"
import Error from "./componentes/Error.jsx"

function App() {

  return (
    <div className="container mx-auto ">
      <Header />
      <ListadoPaciente />
      <Paciente />
      <Formulario/>
      <Error/>
      
    </div>
  )
}
export default App


