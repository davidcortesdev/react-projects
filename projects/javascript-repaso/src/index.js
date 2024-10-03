const activo = true


const mensaje = !activo ? 'Activo' : 'Inactivo'

//Quita el else anterior, solo se ejecuta si se cumple la condición, 
//sino devuelve un false y no devuelve nada.
const mensaje1 = !activo && 'Activo'

console.log(mensaje)
console.log(mensaje1)