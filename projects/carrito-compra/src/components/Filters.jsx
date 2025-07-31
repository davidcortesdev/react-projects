import { useFilters } from "../hooks/useFilters";

export const Filters = () => {
   
   const { filters, setFilters } = useFilters()
  
  
   const handleChangePrice = (event) => {
      setFilters((prev) => ({
         ...prev,
         minPrice: event.target.value
      }));
   }

   const handleChangeCategory = (event) => {
      const { value } = event.target;
      setFilters((prev) => ({
         ...prev,
         category: value
      }));
   }

   return (
   <div className="header">
      <div>
         <label className="header-price" htmlFor="price">Precio mín.</label>
         <input 
            id="price" 
            type="range" 
            min="0" 
            max="1000"
            value={filters.minPrice}
            onChange={handleChangePrice} />
         <span>${filters.minPrice}</span>
      </div>
      <div>
         <label className="header-category" htmlFor="category">Categoría</label>
         <select id="category" onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
         </select>
      </div>
   </div>
   )
}
