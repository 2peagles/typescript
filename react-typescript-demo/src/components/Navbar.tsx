import React , {useState, useEffect }from 'react';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { BsBag } from 'react-icons/bs';
import CartNav from './Cart/CartNav';
import commerce from '../lib/commerce';

export const Navbar = () => {
  const [cart, setCart] = useState({});
  // const[activeNav, setActiveNav]=useState(false);
  // const handleClick=setActiveNav (!activeNav)
  const fetchCart = () => {
    commerce.cart.retrieve().then((cart) => {
      setCart(cart);
    }).catch((error) => {
      console.log('There was an error fetching the cart', error);
    });
  }
  useEffect(() => {
    fetchCart();
  }, []);

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
  return (
    <NavbarBs className='bg-transparent fs-3 shadow-sm'>
        <Container>
            <Nav className='me-auto' >
                <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                  <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                  <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                  <CartNav
                      cart={cart}
                      onUpdateCartQty={handleUpdateCartQty}
                      onRemoveFromCart={handleRemoveFromCart}
                      onEmptyCart={handleEmptyCart} 
                      />             
            </Nav>
        </Container>
    </NavbarBs>
  )
}
