import React from 'react';
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Row} from 'react-bootstrap';
import { CartCheckout } from '../../styles/cart';
// import CartItem from '../../components/Cart/CartItem';
// import Cart from '../../components/Cart/Cart';
// import { CartTotal, CartTotalTitle } from '../../styles/cart';
import { CheckoutContainer, CheckoutHeader, CheckoutBox, CheckoutBoxMessage, CheckoutItems} from '../../styles/Checkout';

export const PurchaseSummary = () => {
 
// const renderTotal = () => (
//   <CartTotal>
//       <CartTotalTitle>Subtotal:</CartTotalTitle>
//       <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
//   </CartTotal>
// );
  return (
    <CheckoutContainer className='d-block'>
      <CheckoutHeader style={{color:'#69c0de80'}}>
         Purchase Summary
      </CheckoutHeader>
      <CheckoutBox>
        <CheckoutBoxMessage>
          <Row>
            <Col>
              <Col sm={12} md={6}>
            <CheckoutItems className='mt-5'>
                 cart items here ...
            </CheckoutItems>
            </Col>
              <Link to='/checkoutconfirmation'><CartCheckout> Checkout </CartCheckout></Link>
            </Col>
          </Row>
        </CheckoutBoxMessage>       
      </CheckoutBox>
    </CheckoutContainer>
  )
}