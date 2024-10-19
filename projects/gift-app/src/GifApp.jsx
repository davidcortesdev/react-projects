import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball','Naruto'])

    const onAddCategory = ( newCategory) => {
        if(categories.includes(newCategory)) return
        //categories.push('Valorant') -> Muta un estado, hay que evitarlo.
        setCategories([newCategory,...categories])
    }

    return(
        <>

            <h1>Gift<span className="span1">App</span></h1>

            <AddCategory 
                onNewCategory={ onAddCategory } />
            
            {
            categories.map(( category ) => (
                <GifGrid 
                    key={category} 
                    category={category}/>
                ))
            }

        </>
    )
}