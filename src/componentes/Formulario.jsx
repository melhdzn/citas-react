import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({setPacientes}) {
    const [mascota, setMascota]= useState('');
    const [propietario, setPropietario]= useState('');
    const [email, setEmail]= useState('');
    const [alta, setAlta]= useState('');
    const [sintomas, setSintomas]= useState('');
    const [error,setError]=useState(false)
    

    const validacionFormulario = (e)=>{
        e.preventDefault;
        if([mascota, propietario, email, alta,sintomas].includes('')){
            console.log('Hay al menos un campo vacío')
setError(true)
return;
        }
        setError(false)
        const objPaciente={mascota,propietario,email,alta,sintomas}
        
        setPacientes([...Pacientes,objPaciente])
        setMascota('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
            }

    return (
        <div className="md:w-1/2 mx-5 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Registro de Pacientes</h2>
            <p className="mt-5 text-center text-lg mb-10">Añade Pacientes <span className="text-indigo-400 font-bold">Administrarlos</span></p>

            <form className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md"
                onSubmit={validacionFormulario}
            >
                (error&&
                <error><div ><p>todos los campos son obligatorios</p>
</div></error>
                )
<div>
                <label htmlFor="mascota" className="block uppercase font-bold text-gray-700" >Nombre mascota</label>
                <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e)=>setMascota(e.target.value)}
                    value={mascota}

                />
                </div>
                <div>
                <label htmlFor="propietario" className="block uppercase font-bold text-gray-700 mt-1.5" >Nombre propietario</label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e)=>setPropietario(e.target.value)}
                    value={propietario}
                /> 
                </div>
                <div>

                <label htmlFor="email" className="block uppercase font-bold text-gray-700 mt-1.5">Correo Electronico</label>
                <input
                    id="name"
                    type="email"
                    placeholder="Correo electrónico"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                /> 
                </div>
                <div>
                <label htmlFor="alta" className="block uppercase font-bold text-gray-700 mt-1.5">Alta</label>
                <input
                    id="fecha"
                    type="date"
                    className="border-2 w-full p-2 mt-2 text-gray-600 rounded-md"
                    onChange={(e)=>setAlta(e.target.value)}
                    value={alta}
                />
                </div>

                <div>
                <label htmlFor="sintomas" className="block uppercase font-bold text-gray-700 mt-1.5">Sintomas</label>
                <textarea
                    id="sintomas"
                    name="sintomas"
                    placeholder="Sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e)=>setSintomas(e.target.value)}
                    value={sintomas}
                />
                </div>
                <input type="submit" className="bg-indigo-500 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-colors p-2 rounded-md;" value={'Agregar'} />
            </form>



        </div >

    )


}

export default Formulario;