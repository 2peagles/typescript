import React from 'react';
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export const Navbar = () => {
  const { openCart, cartQuantity}=useShoppingCart()
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                  <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                  <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
            <Button 
            onClick={openCart}
            style={{width: '3rem', height:'3rem', position:'relative'}}
            variant='outline-primary' 
            className='rounded-circle'
            >
                  <svg 
                  xmlns='http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd' 
                  viewBox='0 0 576 512' 
                  fill='currentColor'>
                      <path d="M930 1797 c-111 -25 -201 -102 -241 -207 -13 -36 -19 -76 -19 -138
                            l0 -87 -125 4 c-89 2 -130 -1 -140 -9 -13 -11 -15 -86 -15 -535 l0 -522 23
                        -33 c12 -18 35 -43 50 -54 28 -21 39 -21 520 -24 l492 -3 44 23 c25 13 54 36
                        65 51 20 28 21 41 24 557 l3 529 -22 11 c-13 8 -64 10 -140 8 l-119 -3 0 81
                        c0 98 -19 164 -66 227 -75 102 -208 151 -334 124z m149 -83 c65 -19 131 -81
                        154 -145 9 -24 17 -79 19 -121 l3 -78 -255 0 -255 0 3 78 c4 99 25 155 78 208
                        67 68 154 88 253 58z m-345 -402 c-14 -22 -44 -22 -57 0 -9 13 -7 22 8 38 l19
                        21 20 -21 c16 -16 18 -24 10 -38z m585 -1 c-17 -25 -27 -26 -51 -4 -18 16 -18
                        17 4 40 22 23 22 23 41 5 16 -17 17 -22 6 -41z m-651 -156 l-3 -135 43 0 44 0
                        -4 135 -3 135 253 0 252 0 0 -135 0 -135 40 0 40 0 0 135 0 135 103 0 102 0
                        -3 -487 -2 -488 -26 -22 -25 -23 -479 0 -479 0 -25 23 -26 22 -2 488 -3 487
                        103 0 103 0 -3 -135z"/>
               </svg>
               <div className='rounded-circle bg-danger d-flex justify-content-center
               align-items-center' style={{
              color:'white' ,
              width:'1.5rem',
              height:'1.5rem',
              position:'absolute',
              bottom: 0,
              right:0,
              transform:'translate(25%, 25%)',
               }}>{cartQuantity}</div>
             </Button>
             )}
        </Container>
    </NavbarBs>
  )
}
