import React, {useState} from 'react';
// import PropTypes from "prop-types";
// import { Row, Col} from 'react-bootstrap';
// import CartItem from '../../components/Cart/CartItem';
import CheckoutForm from './CheckoutForm';
// import { CartTotal, CartTotalTitle } from '../../styles/cart';
import { CheckoutBox, CheckoutContainer, CheckoutHeader, CheckoutPageBox } from '../../styles/Checkout';

const Checkout = ({cart, order, onCaptureCheckout, error}) => {
  const [shippingData, setShippingData] = useState({});
  const test = (data) => {
    setShippingData(data);
  };
  return (
    <CheckoutContainer>
        <CheckoutHeader style={{color:'#69c0de80'}}>Checkout</CheckoutHeader>
          <CheckoutBox>
          <CheckoutPageBox>
                <CheckoutForm cart={cart}  onCaptureCheckout={onCaptureCheckout} shippingData={shippingData} test={test}/> 
            </CheckoutPageBox>
       </CheckoutBox>
    </CheckoutContainer>
  )
}

export default Checkout
