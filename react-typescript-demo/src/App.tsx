import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import Store  from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import './App.css';
import commerce from './lib/commerce';
import WebFont from 'webfontloader';

function App() {
  const [products, setProducts] = useState< any | []>([ ]);
  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Patrick Hand', 'Chilanka']
      }
    });
   }, []);

  return (
    <ShoppingCartProvider>
    <Navbar />
    <Container fluid className='no-gutters'>
      <Routes>
        <Route path='/' element={<Home products={products}/>} />
        <Route path='/store' element={<Store products={products}/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
  );
}

export default App;
