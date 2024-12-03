import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
   
  )
}

export default App;
