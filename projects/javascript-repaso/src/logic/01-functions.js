//Funciones
//Funciones de flecha


//Retornar objeto implicito.
//Ponemos los parentesis para indicarle que dentro hay un objeto.
//Quitamos el return.
const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
  })

  const usuAct = getUsuarioActivo('Pepe')
  console.log(usuAct)