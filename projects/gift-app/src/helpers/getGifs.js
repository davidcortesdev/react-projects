export const getGifs = async (category) => {

    const API_KEY = 'cEOmFiid7iPu2Mbybj1vyqu4dGQbjZP9'
    //URL = https://api.giphy.com/v1/gifs/search?api_key=

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs
}