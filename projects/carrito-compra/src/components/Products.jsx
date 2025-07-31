import '../styles/Products.css'

export function Products({ products }) {
   return (

      <div className="products">
         <h1>Carrito compra</h1>
         <ul>
            {
            products.map(product => (
               <li key={product.id}>
                  <img src={product.thumbnail} alt={product.tile} />
                  <h3>{product.title}</h3>
                  <span><button>Add</button> - ${product.price}</span>
                  <p>{product.category}</p>
               </li>
            ))
            }
         </ul>
      </div>
   )
}