import { useEffect, useState } from 'react';
import { Product } from '../types/Product';

function Home() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, []);

  return (
    <div className='container'>
      <h1>Product Catalog</h1>
      <div className='product__content'>
        {products.map(product => (
          <div className='product__block' key={product.id}>
            <img className='product__image' src={product.image} alt={product.title} />
            <div className="product__info">
              <h2>{product.title}</h2>
              <div className="product__price-btn">
                <p className='product__price'>Price: ${product.price}</p>
                <button className='product__add-btn' type='button'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;