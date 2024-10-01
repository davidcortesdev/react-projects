import { getHeroesById } from './03-filtros';

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout(()=> {
        const heroe1 = getHeroesById(2)
        resolve( heroe1 )
        reject('No se pudo encontrar el heroe.')
    })
})

promesa.then( (heroe) => {
    console.log('Heroe', heroe)
})
.catch(err => console.warn( err )) */


const getHeroesByIdAsync = (id) => {
    
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            const heroe1 = getHeroesById( id )
            heroe1 
                ? resolve( heroe1 )
                : reject('No se pudo encontrar el heroe.')
        }, 2000)
    })
}

getHeroesByIdAsync(3)
    .then(heroe => console.log('Heroe: ', heroe))
    .catch((err) => console.warn( err ))