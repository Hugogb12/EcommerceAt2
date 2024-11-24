import { useState } from "react";
import Footer from "../components/Footer/Footer"
import HeaderAll from "../components/HeaderForAll/HeaderForAll";
import { Link } from "react-router-dom";
import ProductList from '../components/ProductList';
import "../CSS/HomePage.css";


const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }; 

  return( 
  <>
  <HeaderAll/>
  <div id="Name_1">
    <h1> <span>X</span> GAMES <br></br>COMMERCE</h1>
    <br></br>
  <Link to='/Cart'>  
    <input class="styled" type="button" value="Acessar Jogos" id="input1" />
  </Link>  
  </div>   
  <Footer/>
  </>)
}

export default Home;
