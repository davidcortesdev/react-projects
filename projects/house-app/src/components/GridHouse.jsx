import '../css/GridHouse.css'
import kitchen from '../../public/cocina.png'
import bathroom from '../../public/baño.png'
import livingroom from '../../public/comedor.png'
import room from '../../public/habitacion.png'

export const GridHouse = () => {
  return (
    <section className="section-grid-house">

      <div className='grid-house'>

        <div className='tarjeta1-house'>
          <img className="kitchen" src={kitchen} alt="" />
          <h2 className='tarjeta1-text-house'>Cocina</h2>
        </div>

        <div className='tarjeta2-house'>
          <img className="bathroom" src={bathroom} alt="" />
          <h2 className='tarjeta2-text-house'>Baño</h2>
        </div>
          
        
        <div className='tarjeta3-house'>
          <img className="room" src={room} alt="" />
          <h2 className='tarjeta3-text-house'>Habitación</h2>
        </div>

        <div className='tarjeta4-house'>
          <img className="livingroom" src={livingroom} alt="" />
          <h2 className='tarjeta4-text-house'>Comedor</h2>
        </div>
        
      </div>

    </section>
  )
}
