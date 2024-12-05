// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import { useCart } from '../components/context/CartContext';
import '../style.css'

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products
    .filter((product) =>
      filterCategory === 'all' ? true : product.category === filterCategory
    )
    .sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

  if (loading) return <p>Loading products...</p>;

  return (
    <div className='position'>
      <h1>Product Catalog</h1>

      {/* Filters and Sort */}
      <div>
        <label>
          Filter by Category:
          <select onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </label>

        <label>
          Sort by Price:
          <select onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h2>{product.title}</h2>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button onClick={() => addToCart({ ...product, quantity: 1 })}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Home;
