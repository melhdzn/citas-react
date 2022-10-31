import Paciente from "./paciente.jsx"
import { useEffect } from "react";

function ListadoPaciente({pacientes, setPaciente, eliminarPaciente}){
    
useEffect(()=>{
    if (pacientes.length > 0)
    console.log("Hay un nuevo paciente")
},[pacientes])

    return(
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
        <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
        <p className="text-xl text-center mt-5 mb-10">Administra tus {""}<span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
       
        {pacientes.map(paciente=>(
            <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
         />
         ))}
         {pacientes.length===0 ? <>
            <h2 className="font-black text-center text-2xl">No hay pacientes</h2>
            <p className="text-center text-xl mt-5">Comienza agregando pacientes {""} <span className="font-bold text-indigo-600">y aparecerán en este lugar.</span></p>
         </> : null}
        </div>
)
}

export default ListadoPaciente;

