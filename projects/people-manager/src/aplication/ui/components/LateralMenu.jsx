import '../css/LateralMenu.css';

export const LateralMenu = () => {
  return (
    <div className="container-lateral">
        
        <div className='container-cabecera'>
          <img className='imagen-lateral' src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Hulk_%282540708438%29.jpg" alt="" />
            <div>
              <h1 className='titulo-nombre'>Alan David Martinez</h1>
              <p className='titulo-trabajo'>TI - Manager</p>
          </div>
        </div>
        
        <div>
          <h2>DATOS PERSONALES:</h2>
          <p>Nombre: Alan</p>
          <p>Apellidos: David Martinez</p>
          <p>Nacimiento: 1978-08-04</p>
        </div>
        
        <div>
          <h2>INFORMACIÓN EMPLEADO:</h2>
          <a>daviid@gmail.com</a>
          <p>Antiguedad: 2022-04-14</p>
          <p>Departamento: TI</p>
          <p>Puesto: Manager</p>
        </div>
        
        <div>
          <h2>HÉROE</h2>
          <p>Nombre: Capitán América</p>
          <p>Motivo: </p>
        </div>


        <div className='container-botones2'>
          <button className='btn-empleados'>EMPLEADOS</button>
          <button className='btn-mensajes'>MENSAJES</button>
        </div>


    </div>
  )
}
