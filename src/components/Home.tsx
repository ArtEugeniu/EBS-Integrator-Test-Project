import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';
import Filters from './Filters';

interface HomeProps {
  addToCart: (product: Product) => void;
}

function Home({ addToCart }: HomeProps) {

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log('Received data:', data);
        const uniqueCategories = Array.from(new Set(data.map((product: Product) => product.category)));
      setCategories(uniqueCategories as string[]);
      })
  }, []);

  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const sortedProducts = [...(selectedCategory === '' ? products : filteredProducts)].sort((a, b) => {
    const priceA = parseFloat(a.price.toString());
    const priceB = parseFloat(b.price.toString());

    if (sortOrder === 'asc') {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    console.log('Selected category:', category);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className='container'>
      <h1 className='title'>Product Catalog</h1>
      <Filters categories={categories} selectedCategory={selectedCategory} onFilterChange={handleFilterChange} />
      <div className="sort">
        <button className='sort__btn' onClick={toggleSortOrder}>
          Sort by Price: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
        </button>
      </div>
      <div className='product__content'>
        {sortedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

    </div>
  )
}

export default Home;