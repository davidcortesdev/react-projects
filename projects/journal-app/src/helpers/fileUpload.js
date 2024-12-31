
export const fileUpload = async( file ) => {
  
    if( !file ) throw new Error( 'No se ha encontrado ningún archivo.')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/react-apps-d/upload'

    const formData = new FormData()
    formData.append('upload_preset', 'journal-app')
    formData.append('file', file)

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        })

        console.log( resp )
        if( !resp.ok ) throw new Error( 'Error al subir la imagen.')

        const cloudResp = await resp.json()
        console.log({cloudResp})

        return cloudResp.secure_url

    } catch (error) {
        console.log(error)
        throw new Error( error.message )
    }
}
