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
    <div>
      <h1>Product Catalog</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;