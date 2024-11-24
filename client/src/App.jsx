import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />} />
        <Route path="/checkout" element={<Checkout cart={cart} calculateTotal={calculateTotal} />} />
      </Routes>
    </Router>
  );
}

export default App;