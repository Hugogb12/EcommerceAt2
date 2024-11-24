import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/Login.css";

function CheckoutPage() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const calculateTotal = () => {
    const total = cart.reduce((total, product) => total + product.price, 0);
    return total.toFixed(2); 
  };

  return (
    <div>
      <Link to="/Carrinho" className="butback"> ← Voltar para pagina de carrinho </Link>
      <h1 className="cart-page">Checkout</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Preço: R${product.price}</p>
            </div>
          ))}
          <h3 className="Total">Total: R${calculateTotal()}</h3>
        </div>
      )}
      <Link to="/Status">
      <button 
        onClick={() => {
          alert("Compra finalizada com sucesso!");
        }}
       className="linkCheck"
      >
      Finalizar Compra 
      </button>
      </Link>
    </div>
  );
}

export default CheckoutPage;  