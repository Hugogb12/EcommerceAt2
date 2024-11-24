import React, { useState } from "react";
import style from "../Header/Header.module.css";
import { Link } from "react-router-dom";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);  
  };

  return (
    <header className={style.header}>
      <Link to="/">
        <h1>Pagina Inicial</h1>
      </Link>

      <Link to="/Carrinho" className="Link1">
        <div className={style.b1}>
          <h1>Carrinho</h1>
          <img
            className={style.img}
            src="/src/image/SVG_Cart.svg"
            alt="Ícone do carrinho"
            width="24"
          />
        </div>
      </Link>

      <Link to="/Cart">
        <h1>Games</h1>
      </Link>

      <Link to="/login">
        <h1>Entrar</h1>
      </Link>
    </header>
  );
}

export default Header;