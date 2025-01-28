import '../css/HeroeMenu.css';

export const HeroeMenu = () => {
  return (
    <div className='container-heroe'>
      
      <h1 className='titulo-datos'>TU HÉROE</h1>
      
      <form className="container-form2" action="">
        <select id="selectHeroe" className="select-heroe">
          <option value="Hulk">Hulk</option>
          <option value="Ironman">Ironman</option>
          <option value="Capain America">Capain America</option>
        </select>

        <img className='imagen-heroe' src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Hulk_%282540708438%29.jpg" alt="" />
        <p className='texto-heroe'>America&apos;s one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.</p>
        <input type="text" placeholder='Otros' className='motivo-heroe'/>
      </form>

      <div className='container-botones'>
        
        <div className='container-btn2'>
          <button className='btn-misiones'>MISIONES</button>
        </div>

        <div className='container-btn1'>
          <button className='btn-modificar'>MODIFICAR</button>
          <button className='btn-exportar'>EXPORTAR PDF</button>
        </div >

      </div>

    </div>
  )
}
