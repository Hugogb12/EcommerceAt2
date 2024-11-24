import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/HomePage.jsx"
import Carrinho from "./src/pages/Carrinho.jsx";


import "../src/index.css";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Carrinho" element={<Carrinho />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;