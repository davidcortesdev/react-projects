/* eslint-disable react/prop-types */
export function Products ({ products, hasProducts }) {
    return(
        <div className='page'>
      <header>
        <h1 className='page-title'>Bienvenido a mi Ecommerce</h1>
        {
          hasProducts
           ? 
           <ul className='products-container'>
              {
                products.map(product => (
                  <li key={product.id} className='product'>
                    <h1 className='product-title'>{product.title}</h1>
                    <img className='product-image' src={product.image} alt={product.title} />
                    <div className="product-info">
                        <p className='product-category'>Category: {product.category}</p>
                        <p className='product-price'>Price: {product.price}$</p>
                    </div>
                  </li>
                ))
              }
           </ul>
           : <p>No hay productos</p>
        }
      </header>
      
      <main>

      </main>
    </div>
    )
}