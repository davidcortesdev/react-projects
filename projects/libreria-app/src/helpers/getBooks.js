const API_KEY = 'AIzaSyBaahKzXq1VhwyFR_jynGSBrfehm3_RoVk'
const query = 'the lord of the rings'

export const getBooks = async() => {

    const resp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`)
    
    const data = await resp.json()
    const { items } = data


    return items

}
