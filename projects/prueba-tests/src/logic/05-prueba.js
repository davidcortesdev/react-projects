const getImagen = async () => {

    try{

        const apiKey = 'cEOmFiid7iPu2Mbybj1vyqu4dGQbjZP9'
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await respuesta.json()
        const {url} = data.images.original

        return url


    }catch(error){
        console.log(error)
        return 'No se encontró la imagen'
    }

} 

export default getImagen;