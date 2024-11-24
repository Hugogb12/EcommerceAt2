import React, { useState, useEffect } from 'react';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulando uma requisição API
    fetch('/src/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>R${product.price}</p>
          <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;