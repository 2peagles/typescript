import React from 'react';
// import PropTypes from "prop-types";
import { Row, Col} from 'react-bootstrap';
// import CartItem from '../../components/Cart/CartItem';
import CheckoutForm from './CheckoutForm';
// import { CartTotal, CartTotalTitle } from '../../styles/cart';
import { CheckoutBox, CheckoutContainer, CheckoutHeader, CheckoutPageBox } from '../../styles/Checkout';

const Checkout = ({cart, onCaptureCheckout, errorMessage}) => {
  return (
    <CheckoutContainer>
        <CheckoutHeader style={{color:'#69c0de80'}}>Checkout</CheckoutHeader>
          <CheckoutBox>
          <CheckoutPageBox>
            <Row>
              <Col sm={12}>
                <CheckoutForm cart={cart} onCaptureCheckout={onCaptureCheckout} error={errorMessage}/> 
                </Col>
              </Row>
            </CheckoutPageBox>
       </CheckoutBox>
    </CheckoutContainer>
  )
}

export default Checkout
