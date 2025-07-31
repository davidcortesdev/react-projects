import { useEffect, useState } from "react";

export default function useFetch(url) {
   
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   
   useEffect(() => {
      const fetchData = async () => {
         try {
         const response = await fetch(url);
         if (!response.ok) {
            throw new Error('Sin respuesta de red');
         }
         const result = await response.json();
         const { products } = result;
         setData(products);
         } catch (error) {
         setError(error);
         } finally {
         setLoading(false);
         }
      };
   
      fetchData();
   }, [url]);
   
   return { data, loading, error };
   }