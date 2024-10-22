import { useEffect, useState } from "react"

const localCache = {}


export const useFetch = ( url ) => {

    const [pokemons, setPokemons] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null,
    })

    useEffect(() => {
        getFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])


    const setLoadingState = () => {
        setPokemons({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }
    

    const getFetch = async() => {

    
        //Si hay caché, ejecuta ->
        if(localCache[url]){
            console.log('usando caché')

            setPokemons({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            })
            return
        }
        
        //Si no hay caché, ejecuta ->
        setLoadingState()
        const res = await fetch(url)

        //sleep
        await new Promise( resolve => setTimeout(resolve, 1500))
        
        if(!res.ok){
            setPokemons({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: res.status,
                    message: res.statusText
                }
            })
            return
        }

        const dataRes = await res.json()

        setPokemons({
            data: dataRes,
            isLoading: false,
            hasError: false,
            error: null
        })

        localCache[url] = dataRes
    }

  return {
    data: pokemons.data,
    isLoading: pokemons.isLoading,
    hasError: pokemons.hasError,
  }
}
