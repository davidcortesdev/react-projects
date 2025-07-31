import './App.css'
import { Header } from './components/Header';
import { Products } from './components/Products'
import useFetch from './hooks/useFetch'
import { useFilters } from './hooks/useFilters';



function App() {

  const { data } = useFetch('https://dummyjson.com/products')
  const { filteredProducts } = useFilters({ products: data });

  return (
    <>
      <Header/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App
