import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './componentes/Products'

const URL = 'https://fakestoreapi.com/products'

function App() {

  const [products, setProducts] = useState()

  useEffect(()=>{
    fetch(URL)
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])


  /* const products = jsonProducts.products */
  const hasProducts = products?.length > 0

  return (
    <Products products={products} hasProducts={hasProducts} />
  )
}

export default App
