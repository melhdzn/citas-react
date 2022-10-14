const Formulario =() =>{
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
          <p className="mt-5 text-center text-lg mb-10">Agregar Nuevos Pacientes<br/>
          <span className="text-indigo-600 font-bold">Administrarlos</span></p>
  
          <form className="bg-slate-50 rounded-lg py-10 px-5 mb-10 shadow-md" onSubmit={(ev) => {
            ev.preventDefault();
          }}>
            
          <div>
            <label htmlFor="mascota" className="block uppercase font-bold text-gray-700">Nombre Paciente</label>
            <input
            id="mascota"
            type="text"
            placeholder="Nombre de mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"/>
          </div>
  
          <div>
            <label htmlFor="propietario" className="block uppercase font-bold text-gray-700 ">Propietario</label>
           <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"/>
          </div>
  
          <div>
            <label htmlFor="telefono" className="block uppercase font-bold text-gray-700">Telefono</label>
            <input
            id="telefono"
            type="numero"
            placeholder="10 digitos"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"/>
          </div>        
        
          <div>
            <label htmlFor="email" className="block uppercase font-bold text-gray-700">Correo Electronico</label>
            <input
            id="email"
            type="email"
            placeholder="email@hotmail.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"/>
          </div>
  
          <div>
            <label htmlFor="fechacita" className="block uppercase font-bold text-gray-700 ">Fecha de cita</label>
            <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"/>
          </div>
          
          <div>
            <label htmlFor="hora" className="block uppercase font-bold text-gray-700 ">Hora de Cita</label>
            <input
            id="hora"
            name="hora"
            type="time"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"/>          
          </div>
          
          <div>
            <label htmlFor="alta" className="block uppercase font-bold text-gray-700 ">Sintomas</label>
            <textarea
            id="sintomas"
            name="sintomas"
            placeholder="Sintomas que presenta la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"/>
          </div>
          
          <div>
            <button type="submit" className="btn btn-success w-100 d-block">
            <input
            name="registraCita"
            type="submit"
            value="Registrar Cita" />
            </button>
          </div>
          
        </form>
      </div>
    )
  }
  
  export default Formulario
