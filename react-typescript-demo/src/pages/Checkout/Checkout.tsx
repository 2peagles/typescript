import React from 'react';
import PropTypes from "prop-types";
import { Row, Col} from 'react-bootstrap';
import CartItem from '../../components/Cart/CartItem';
import CheckoutForm from './CheckoutForm';
import { CartTotal, CartTotalTitle } from '../../styles/cart';
import { CheckoutBox, CheckoutContainer, CheckoutHeader, CheckoutItems, CheckoutPageBox } from '../../styles/Checkout';

const Checkout = ({ cart, onUpdateCartQty, onRemoveFromCart}) => {

  const renderItems = () => (
    cart.line_items.map((lineItem) => (
        <CartItem
            item={lineItem}
            key={lineItem.id}
            onRemoveFromCart={onRemoveFromCart}
            onUpdateCartQty={onUpdateCartQty}
            // className="cart__inner"
        />
    ))
);
const renderTotal = () => (
  <CartTotal>
      <CartTotalTitle>Subtotal:</CartTotalTitle>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
  </CartTotal>
);
  return (
    <CheckoutContainer className='d-block  pl-3 pr-3'>
        <CheckoutHeader style={{color:'#69c0de80'}}>Checkout</CheckoutHeader>
          <CheckoutBox>
          <CheckoutPageBox>
            <Row>
              <Col sm={12} md={6}>
            <CheckoutForm /> 
            </Col>
            <Col sm={12} md={6}>
            <CheckoutItems className='mt-5'>
                  {renderItems()}
                 {renderTotal()}
            </CheckoutItems>
            </Col>
            </Row>
            </CheckoutPageBox>
          </CheckoutBox>
    </CheckoutContainer>
  )
}

Checkout.propTypes = {
  cart: PropTypes.object,
  onEmptyCart: () => { },
  onUpdateFromCart: () => {},
};

export default Checkout
