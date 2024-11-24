import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../CSS/Carrinho.css";
import Header from '../components/HeaderForAll/HeaderForAll';

function Carrinho() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [showWarning, setShowWarning] = useState(false); 
  const navigate = useNavigate(); 

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const handleCheckout = (e) => {
    e.preventDefault(); 
    
    if (cart.length === 0) {
      setShowWarning(true); 
    } else {
      navigate("/checkout");
    }
  };

  return (
    <>
    <Header/>
    <div>
      <h1>Carrinho de Compras</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Preço: R${product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remover</button>
            </div>
          ))} 
        </div>
      )}
      
      {showWarning && (
        <div className="warning-message">
          <p>O carrinho está vazio. Adicione produtos para finalizar a compra.</p>
        </div>
      )}

      <button className='linkCheck' onClick={handleCheckout}>Ir Para Checkout</button>
    </div>
    </>
  );
}

export default Carrinho;  