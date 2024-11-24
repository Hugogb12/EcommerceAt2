import React, { useState } from 'react';
import "../CSS/CardPage.css"
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const products = [
  { 
    id: 1, 
    name: 'The Legend of Zelda: Tears of the Kingdom', 
    price: 299.99, 
    category: 'Ação e aventura',
    estoque: '57',
    description: 'Jogo de ação e aventura focado em exploração e combate',
    image: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/2x1_NSwitch_TloZTearsOfTheKingdom_Gamepage_image1600w.jpg' 
  },
  { 
    id: 2, 
    name: 'Grand Theft Auto V', 
    price: 149.99, 
    category: 'Ação e aventura',
    estoque: '98',
    description: 'Jogo de Ação e aventura focado em dinheiro e assalto',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZg3YpCqdvY0DgxhRXBD4ElkxZJFWfz7-_g&s' 
  },
  { 
    id: 3, 
    name: 'God of War Ragnarök', 
    price: 249.99, 
    category: 'RPG',
    estoque: '76',
    description: 'Jogo de Ação e aventura focado em historia nordica',
    image: 'https://meups.com.br/wp-content/uploads/2022/11/God-of-War-Ragnarok_vale-a-pena-17-scaled.jpg.webp' 
  },
  { 
    id: 4, 
    name: 'Red Dead Redemption 2', 
    price: 189.99, 
    category: 'Ação e aventura',
    estoque: '16',
    description: 'Jogo de velho oeste de Ação e Aventura focado em historia',
    image: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg' 
  },
  { 
    id: 5, 
    name: 'Minecraft', 
    price: 79.99, 
    category: 'Ação e aventura',
    estoque: '87',
    description: 'Jogo de Ação e aventura focado em Construir blocos',
    image: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a' 
  },
  { 
    id: 6, 
    name: 'The Witcher 3: Wild Hunt', 
    price: 129.99, 
    category: 'RPG',
    estoque: '23',
    description: 'Jogo RPG focado em história e combate',
    image: 'https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f' 
  },
  { 
    id: 7, 
    name: 'Muse Dash', 
    price: 10.99,
    category: 'Ritimo', 
    estoque: '94',
    description: 'Jogo de ritimo',
    image: 'https://pbs.twimg.com/media/GbLzjwcakAAglCp?format=jpg&name=4096x4096' 
  },
  { 
    id: 8, 
    name: 'Call of Duty: Modern Warfare II', 
    price: 199.99, 
    category: 'FPS',
    estoque: '55',
    description: 'Jogo de tiro com foco no multplayer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMY0LBriMcrr-LEUEHXd_I_8skC0SfFGYZKw&s' 
  },
  { 
    id: 9, 
    name: 'FIFA 23', 
    price: 159.99, 
    category: 'Esportes',
    estoque: '39',
    description: 'Jogo de futebol',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjJlAAZKoU_Iehsmc-yrkBVFMLlmaKVXZN_GfqMfc2EDmvQ_LYfh-EL5FgSiYajlhZS-xXYFeE6IaUfDQCXKGxaU22-CfL_o4FYdb1QSuRRVnrMRVvWWhGkO7g0nd9Hkp6kXNxNeBPG9uFLF9aD37HLCbtzpLSW4yw8QoIaAJUsFzVvMxvT5hXrUONgA/s1920/ea%20sports%20fifa%2023.png' 
  },
  { 
    id: 10, 
    name: 'Horizon Forbidden West', 
    price: 249.99, 
    category: 'Ação e aventura',
    estoque: '28',
    description: 'Jogo de ação e aventura focado em exploração e história',
    image: 'https://img.odcdn.com.br/wp-content/uploads/2021/09/Horizon-Forbidden-West-Key-Art-2-scaled-1.jpg' 
  },
  //
  //
  //
  //
  //
  { 
    id: 11, 
    name: 'Batman Arkham Knight', 
    price: 159.90, 
    category: 'Ação e aventura',
    estoque: '85',
    description: 'Jogo de ação e aventura focado em história',
    image: 'https://assets.nuuvem.com/image/upload/v1/products/557dbb9f69702d0a9c7da700/sharing_images/nok69j6m12kgovgokrbh.jpg' 
  },
  { 
    id: 12, 
    name: 'Death Stranding', 
    price: 199.99, 
    category: 'Ação e aventura',
    estoque: '26',
    description: 'Jogo de Aventura e ação focado na história',
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/2214/a8zjXIdTwKslJ2HvoJvY34a1.jpg' 
  },
  { 
    id: 13, 
    name: 'Silent Hill 2', 
    price: 159.99, 
    category: 'Terror',
    estoque: '65',
    description: 'Jogo de terror psicologico',
    image: 'https://variety.com/wp-content/uploads/2024/05/RTSH-1st-Look-Photo-Credit-Aleksandar-Letic-c-2024-Davis-Films.jpg' 
  },
  { 
    id: 14, 
    name: 'Resident Evil 4 Remake', 
    price: 249.99, 
    category: 'Ação e aventura',
    estoque: '92',
    description: 'jogo de ação e aventura focado em história',
    image: 'https://i0.wp.com/www.portaldonerd.com.br/wp-content/uploads/2023/03/resident-evil-4-remake.jpg' 
  },
  //
  //
  //
  //
  //
  { 
    id: 15, 
    name: 'KILL la KILL -IF', 
    price: 90.00, 
    category: 'Luta',
    estoque: '59',
    description: 'Jogo de luta com estilo de anime',
    image: 'https://i.pinimg.com/736x/0e/1e/45/0e1e45744666c2a6544e657e896ef80d.jpg' 
  },
  { 
    id: 16, 
    name: 'ELDEN RING', 
    price: 229.90, 
    category: 'Ação e aventura',
    estoque: '68',
    description: 'Jogo Souls Like mediaval',
    image: 'https://store-images.s-microsoft.com/image/apps.12238.14293400522343232.ff4bf536-ec75-44c3-889f-731ca1db2127.c163e81f-4b50-4453-85cf-7a6c827366d7?q=90&w=480&h=270' 
  },
  { 
    id: 17, 
    name: 'MULLET MADJACK', 
    price: 49.95, 
    category: 'FPS',
    estoque: '90',
    description: 'Jogo de tiro Frenético',
    image: 'https://meups.com.br/wp-content/uploads/2024/05/Muller-madjack-foto-do-jogo-com-um-personagem-de-mullet-e-jaqueta-colorida-armado-e-ao-lado-de-um-personagem-com-roupas-de-academia-dos-anos-90-e-cabelo-verde.jpg' 
  },
  { 
    id: 18, 
    name: 'DRAGON BALL: Sparking! ZERO', 
    price:  282.50, 
    category: 'Luta',
    estoque: '72',
    description: 'Jogo de luta de mundo aberto',
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1790600/ss_90f5785f89a9882a7f33fd5a812a7e7384720afd.1920x1080.jpg?t=1730214507' 
  },
  { 
    id: 19, 
    name: 'Persona 5 Royal', 
    price: 249.90, 
    category: 'RPG',
    estoque: '24',
    description: 'Jogo de RPG de turno',
    image: 'https://images7.alphacoders.com/820/820602.png' 
  },
  { 
    id: 20, 
    name: 'NieR:Automata™', 
    price:  107.00, 
    category: 'RPG',
    estoque: '98',
    description: 'Jogo de RPG futurista',
    image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/dbdc2d473dd2cd85f9d96a3394bd2903.jpg' 
  },
  { 
    id: 21, 
    name: 'CYBERPUNK 2077', 
    price: 199.90, 
    category: 'RPG',
    estoque: '29',
    description: 'Jogo futurista fps',
    image: 'https://www.cyberpunk.net/build/images/phantom-liberty/CP77_Phantom_Liberty_KV_16x9_RGB_no_PhL-0a5aaaf8.jpg' 
  },
  { 
    id: 22, 
    name: 'Yakuza: Like a Dragon', 
    price: 99.90, 
    category: 'Luta',
    estoque: '28',
    description: 'Jogo de luta e história',
    image: 'https://store-images.s-microsoft.com/image/apps.29145.14427542363794747.182f58ca-3a24-4a65-93bd-cdd320a35776.d3800c18-f897-458a-8b39-a337fb55f00d?q=90&w=480&h=270' 
  },
  { 
    id: 23, 
    name: 'Stellar Blade™', 
    price: 349.90, 
    category: 'Ação e aventura',
    estoque: '56',
    description: 'Jogo souls like de ação e aventura',
    image: 'https://cdn.wccftech.com/wp-content/uploads/2024/02/Stellar_Blade-HD-scaled.jpg' 
  },
  { 
    id: 24, 
    name: 'Celeste', 
    price: 59.99, 
    category: 'Plataforma',
    estoque: '40',
    description: 'Jogo 2D de plataforma',
    image: 'https://sm.ign.com/t/ign_br/screenshot/default/boxart-final3-preview0_swvw.1200.jpg' 
  },
];

function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(""); 
  const [minPrice, setMinPrice] = useState(""); 
  const [maxPrice, setMaxPrice] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  // Função para adicionar o produto ao carrinho
  const addToCart = (product) => {
    const updatedCart = [...cart, product];  // Adicionar o produto ao carrinho
    setCart(updatedCart);  // Atualizar o estado local do carrinho
    localStorage.setItem("cart", JSON.stringify(updatedCart));  // Salvar no localStorage
  };
 
  const filterProducts = () => {
    let filtered = products;

   
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    
    if (categoryFilter) {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

   
    if (minPrice) {
      filtered = filtered.filter((product) => product.price >= minPrice);
    }
    if (maxPrice) {
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    setFilteredProducts(filtered);  
  };

  
  const handleSearch = (query) => {
    setSearchQuery(query);  
  };

  return (
    <>
      <Header onSearch={handleSearch} />  

      <div className="filters">
        <input
          type="text"
          placeholder="Pesquisar pelo nome"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option value="">Todas as Categorias</option>
          <option value="Ação e aventura">Ação e aventura</option>
          <option value="RPG">RPG</option>
          <option value="FPS">FPS</option>
          <option value="Esportes">Esportes</option>
          <option value="Luta">Luta</option>
          <option value="Terror">Terror</option>
          <option value="Plataforma">Plataforma</option>
          <option value="Ritimo">Ritmo</option>
        </select>

        <div className="price-filter">
          <label>Preço Mínimo: </label>
          <input 
            type="number" 
            value={minPrice} 
            onChange={(e) => setMinPrice(e.target.value)} 
            placeholder="Mínimo" 
          />
          <label> Preço Máximo: </label>
          <input 
            type="number" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)} 
            placeholder="Máximo" 
          />
        </div>
        
        <button onClick={filterProducts}>Filtrar</button>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} style={{ width: '200px', height: 'auto' }} />
            <h2>{product.name}</h2>
            <p>Preço: R${product.price.toFixed(2)}</p>
            <p>Categoria: {product.category}</p>
            <p>Estoque: {product.estoque}</p>
            <p>Descrisão: {product.description}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Products;