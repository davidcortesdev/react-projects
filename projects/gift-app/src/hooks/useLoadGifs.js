import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useLoadGifs = ( category ) => {

    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const images = await getGifs(category)
        setGifs(images)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return {
    gifs,
    isLoading
  }
}
