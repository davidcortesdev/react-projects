import { useContext } from "react";
import { FiltersContext } from "../context/filtersContext";

export function useFilters({ products = [] } = {}) {
  
   const { filters, setFilters } = useContext(FiltersContext);

   const filterProducts = (products) => {
      return products.filter(product => {
         return (
            filters.minPrice <= product.price &&
            (filters.category === 'all' || product.category === filters.category)
         )
      });
   }

   const filteredProducts = filterProducts(products);

   return { filteredProducts, filters, setFilters }
      
}