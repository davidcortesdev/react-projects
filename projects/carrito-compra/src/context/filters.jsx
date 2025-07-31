import { useState } from "react";
import { FiltersContext } from "./filtersContext";

export function FiltersProvider({ children }){

   const [filters, setFilters] = useState({
      minPrice: 10,
      category: 'all',
   });

   return (
      <FiltersContext.Provider value={{
         filters,
         setFilters,
      }}>
         {children}
      </FiltersContext.Provider>
   );
}