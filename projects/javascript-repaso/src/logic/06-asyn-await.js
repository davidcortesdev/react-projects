//Async Await

//const getImagenPromesa = () => new Promise ( resolve => resolve('https://loquesea.com'))
//getImagenPromesa().then(console.log)


const getImagen = async () => {

    try{
        const api_key = 'cEOmFiid7iPu2Mbybj1vyqu4dGQbjZP9'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
        const { data } = await resp.json()
        
        const {url} = data.images.original
        console.log(url)

        const imagen = document.createElement('img')
        imagen.src = url
        document.body.append(imagen)

    } catch (error){
        console.error(error)
    }
}

getImagen();