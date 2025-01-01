/* eslint-disable no-undef */
import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload"
cloudinary.config({
    cloud_name: 'react-apps-d',
    api_key: '736123674213226',
    api_secret: '7mvVDpCGoSErOGHStnd-5rkzZl4',
    secure: true
})


describe('Pruebas en fileUpload', () => {
    
    test('Debe de cargar un archivo a cloudinary', async() => {
        
        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwn36wiSCCTGKg39cKW6URYHDprta6osR4wA&s'
        const resp = await fetch(imageUrl)
        const blob = await resp.blob()
        const file = new File([blob], 'foto.jpg')

        const url = await fileUpload(file)
        expect( typeof url ).toBe('string')

        const segments = url.split('/')
        const imageId = segments[segments.length - 1].replace('.jpg', '')
        
        await cloudinary.api.delete_resources([imageId])
        
    })


    test('Debe de retornar null', async() => {
        
        const file = new File([], 'foto.jpg')
        const url = await fileUpload(file)
        expect( url ).toBe(null)
        
    })
    
})