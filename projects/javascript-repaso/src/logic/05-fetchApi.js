const api_key = 'cEOmFiid7iPu2Mbybj1vyqu4dGQbjZP9'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`)
    .then(res => res.json())
    .then(data => {
        const {url} = data.data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
        
        
    })
    .catch(console.warn)