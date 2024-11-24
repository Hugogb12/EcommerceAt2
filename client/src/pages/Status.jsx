import React from 'react';
import { Link } from 'react-router-dom';

function Status() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <h1 className="cart-page">Status do pedido</h1>
      {cart.length === 0 ? (
        <p></p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Enviado</p>
            </div>
          ))}
        </div>
      )}
      <Link to="/">
      <button 
        onClick={() => {
            localStorage.removeItem("cart");  
        }}
       className="linkCheck"
      >
      Voltar a tela Inicial
      </button>
      </Link>
    </div>
  );
}
export default Status;  