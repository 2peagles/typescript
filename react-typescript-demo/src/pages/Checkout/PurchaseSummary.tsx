import React from 'react';
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Col,  Row} from 'react-bootstrap';
import { CartCheckout } from '../../styles/cart';
// import CartItem from '../../components/Cart/CartItem';
// import Cart from '../../components/Cart/Cart';
// import { CartTotal, CartTotalTitle } from '../../styles/cart';
import { CheckoutContainer, CheckoutHeader, CheckoutBox, CheckoutBoxMessage, CheckoutItems} from '../../styles/Checkout';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('process.env.React_APP_STRIPE_PUBLIC_KEY');
export const PurchaseSummary = ({checkoutToken, onCaptureCheckout, shippingData}) => {
 
  const handleSumbit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: {
          name: 'Primary',
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id
          },
        },
      };
      onCaptureCheckout(checkoutToken.id, orderData);
    }
  };

  return (
    <CheckoutContainer className='d-block'>
      <CheckoutHeader style={{color:'#69c0de80'}}> Payment </CheckoutHeader>
        <CheckoutBox style={{padding:'20px'}}>
          <CheckoutBoxMessage className='d-block'>
            <Row >
            <Col sm={12} md={12}>
              <CheckoutItems className='mt-5 mr-3 ml-3'>
                <Container>
                  <Row>
                    {checkoutToken.live.line_items.map((product) => (
                      <Row key={product.name}>
                        <Col md={9} style={{fontSize:'1.5'}}>{product.name} {`Quantity: ${product.quantity}`} </Col>
                        <Col style={{ fontSize:'1.5rem',display: 'flex', alignItems: 'right', justifyContent: 'right' }}>{product.line_total.formatted_with_symbol}</Col>
                      </Row>
                    ))}
                    <Row><Col style={{display:'flex', alignItems:'right', justifyContent:'right'}}> TOTAL {checkoutToken.live.subtotal.formatted_with_symbol}</Col></Row>
                  </Row>
                </Container>
              </CheckoutItems>
            </Col>
            </Row>
          <Row style={{padding:'20px'}}>
            <Elements stripe={stripePromise}>
              <ElementsConsumer>
                {({ elements, stripe }) => (
                  <form onSubmit={(e) => handleSumbit(e, elements, stripe)}>
                    <CardElement />
                    <br></br>
                    <div className='mt-4'>
                      <Link to='/store'> <CartCheckout> Back To Store</CartCheckout></Link>
                      <Link to='/checkoutconfirmation'>
                      <CartCheckout type="submit" disabled={!stripe}>  pay {checkoutToken.live.subtotal.formatted_with_symbol}  </CartCheckout>
                      </Link>
                    </div>
                  </form>
                )}
              </ElementsConsumer>
            </Elements>
          </Row>
        </CheckoutBoxMessage>
      </CheckoutBox>
    </CheckoutContainer>
  )
}