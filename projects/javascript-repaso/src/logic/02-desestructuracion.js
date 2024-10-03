/* eslint-disable react-hooks/rules-of-hooks */
//Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}


//Podemos darle un alias con ':'
const { nombre: nombre2, edad} = persona
console.log(`Me llamo ${ nombre2 } y tengo ${ edad } años`)


//Podemos desestructurar directamente en las props de la func.
//Le pasamos el objeto persona y nos extrae el nombre
//Podemos pasarles valores por defecto por si viene como undefined
const retornaPersona = ({ nombre, clave, rango = 'Capitán' }) => {
    console.log(nombre)
    console.log(clave)
    console.log(rango)
}

retornaPersona(persona)


//Le pasamos el objeto persona
//Extrae los datos solicitados en props
//Devuelve un nuevo objeto y lo asignamos a avenger
const useContext = ({ clave, edad, rango = 'Capitán' }) => {
    return {
        nombreClave: clave,
        rangoSup: rango,
        anios: edad
    }
}

//Asignación del objeto de la función a la const avenger
const avenger = useContext( persona )
console.log(avenger)

//Desestructuración del objeto que retorna la función
//-const { nombreClave, anios } = avenger

//O también
const { nombreClave, anios } = useContext( persona )
console.log(nombreClave, anios)


//si necesito sacar un objeto de dentro de un objeto:
const miPersona = ({ clave, edad }) => {
    return {
        nombreClave2: clave,
        anios2: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.2323,
        }
    }
}


//Sacamos la latitud dentro de latlng:
//-const { nombreClave2, anios2, latlng:{lat} } = miPersona( persona )
//-console.log(`Nombre: ${nombreClave2}, Años: ${anios2}, Lat: ${lat}`)

//Lo mas común es lo siguiente:
//Extraemos primero el objeto latlng y luego lo desestructuramos
const { latlng } = miPersona( persona )
const { lat, lng } = latlng

console.log(`Latitud: ${lat}, Longitud: ${lng}`)