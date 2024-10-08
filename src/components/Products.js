import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://127.0.0.1:8000/api/v1/products/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://127.0.0.1:8000/api/v1/carts/add_item/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_id: productId }),
      });
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
      // You might want to update the UI or show a success message here
      alert('Item added to cart successfully!');
    } catch (err) {
      console.error('Error adding item to cart:', err);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  if (isLoading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-600">${parseFloat(product.price).toFixed(2)}</p>
            <p className="text-sm text-gray-500 mt-2">Stock: {product.stock}</p>
            <p className="text-sm text-gray-700 mt-2 line-clamp-3">{product.description}</p>
            <button 
              onClick={() => handleAddToCart(product.id)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
