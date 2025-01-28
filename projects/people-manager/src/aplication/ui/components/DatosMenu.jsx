import '../css/DatosMenu.css';

export const DatosMenu = () => {
  return (
    <div className='container-datos'>
      
      <h1 className='titulo-datos'>TUS DATOS</h1>
      
      <form className="container-form" action="">
        <input type="email" placeholder='Email'className='email' id='email'/>
        <input type="text" placeholder='Nombre' className='nombre'/>
        <input type="text" placeholder='Primer Apellido' className='ape1'/>
        <input type="text" placeholder='Segundo Apellido' className='ape2'/>
        <input type="date" placeholder='Fecha Nacimiento' className='fechaNac'/>
        <input type="date" placeholder='Fecha Antiguedad' className='fechaAnt'/>
        
        <select id="departamento" className="departamento">
          <option value="ti">TI</option>
          <option value="ventas">Ventas</option>
          <option value="rrhh">Recursos Humanos</option>
          <option value="marketing">Marketing</option>
        </select>

        <select id="puesto" className="puesto">
          <option value="manager">Manager</option>
          <option value="asesor">Asesor</option>
          <option value="desarrollador">Desarrollador</option>
          <option value="diseñador">Diseñador</option>
        </select>
        
        <input type="text" placeholder='Otros' className='otros'/>
      </form>
      
      <div className='container-botones3'>
        <button className='btn-guardar'>GUARDAR</button>
      </div>
    </div>
  )
}

