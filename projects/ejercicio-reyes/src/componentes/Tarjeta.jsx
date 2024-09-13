/* eslint-disable react/prop-types */
import './Tarjeta.css'

export const Tarjeta = ({changeImage, imagen, texto}) => {
    return(
        <>
            <div className="tarjeta" onClick={changeImage}>
                <img className="rey" src={imagen} alt="Rey"/>
                <p className="text">{texto}</p>
            </div>
        </>
    )
}