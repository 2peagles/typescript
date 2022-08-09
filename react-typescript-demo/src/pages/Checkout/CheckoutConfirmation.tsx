import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CheckoutContainer, CheckoutHeader, CheckoutBox, CheckoutBoxMessage } from '../../styles/Checkout';

export const CheckoutConfirmation=({order,error })=>{
let confirmation = () => (order.customer ? (
  <>
    <div>
      <h5 >Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</h5>
         <hr></hr>
          <h6>Order ref: {order.customer_reference}</h6>
          </div>
        <br />
      <Link to='/'> <Button> Back to home </Button> </Link>
  </>
) : (
    <div className='d-block'>
    <h2 style={{color:'white'}}> OOPS, an error has occurred</h2>
      <Link to='/'> <Button> Back to home </Button> </Link>
    </div>
))
  if (error) {
    confirmation = () => (
      <>
        <h5>Error: {error}</h5>
        <br></br>
        <Button> Back to home </Button>
      </>
  );
}
  return (
    <CheckoutContainer className='d-block fixed' style={{backgroundColor:'#DE8769'}}>
    <CheckoutHeader>
         Confirmation
    </CheckoutHeader>
    <CheckoutBox>
      <CheckoutBoxMessage >
          {confirmation()};
      </CheckoutBoxMessage>       
    </CheckoutBox>
  </CheckoutContainer>
  )
}
