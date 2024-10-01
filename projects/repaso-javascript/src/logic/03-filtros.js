import { heroes } from '../data/heroes'

export const getHeroesById = (id) => {
    return heroes.find((heroe)=> {
        if(heroe.id == id){
            /* const {name, owner} = heroe
            return console.log(`Personaje: ${name}, Creador: ${owner}`) */
            return heroe
        }
    })
}

getHeroesById(1)


const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner == owner)
console.log(getHeroesByOwner('Marvel'))
console.log(getHeroesByOwner('DC'))