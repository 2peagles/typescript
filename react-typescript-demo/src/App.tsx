import React, {useState, useEffect} from 'react';
import { Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home';
import Store  from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import commerce from './lib/commerce';
import WebFont from 'webfontloader';
import CartNav from './components/Cart/CartNav';
import Checkout from './pages/Checkout/Checkout';
import { CheckoutConfirmation } from './pages/Checkout/CheckoutConfirmation';
// import { PurchaseSummary } from './pages/Checkout/PurchaseSummary';

function App() {
  const [products, setProducts] = useState< any | []>([ ]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
 const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }
  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Patrick Hand', 'Chilanka']
      }
    });
   }, []);


  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity).then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }
  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }
  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart.remove(lineItemId).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);
    });
  }
  const handleEmptyCart = () => {
    commerce.cart.empty().then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.error('There was an error emptying the cart', error);
    });
  }

  const refreshCart =async ()=> {
    const newCart = await commerce.cart.refresh();
      setCart(newCart);
  }
  const handleCaptureCheckout = async (checkoutTokenId, newOrder)=>{
    try{
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
        setErrorMessage('error.data.error.message');
    }
  }
  return (
    <>
    <Navbar />
    <Container fluid className='no-gutters'>
    {/* <Navbar /> */}
      <Routes>
          <Route path='/' element={<Home products={products} onAddToCart={handleAddToCart} />} />
          <Route path='/store' element={<Store products={products} onAddToCart={handleAddToCart}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/cartnav' element={
          <CartNav
                cart={cart} 
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart} 
                onEmptyCart={handleEmptyCart} 
                  />
                }/>
                <Route path='/checkout' element={
                    <Checkout 
                      cart={cart} 
                      order={order} 
                      onCaptureCheckout={handleCaptureCheckout} 
                      error={errorMessage}
                      />} 
                      />
                <Route path='/checkoutconfirmation' element={<CheckoutConfirmation order={order} error={errorMessage}/>} />
                {/* <Route path='/purchasesummary' element={<PurchaseSummary  />} /> */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
