import React from 'react';
import { Button } from 'react-bootstrap';
import { CheckoutContainer, CheckoutHeader, CheckoutBox, CheckoutBoxMessage } from '../../styles/Checkout';

export const CheckoutConfirmation = () => {
  return (
    <CheckoutContainer className='d-block fixed' style={{backgroundColor:'#DE8769'}}>
    <CheckoutHeader>
        Checkout Confirmation
    </CheckoutHeader>
    <CheckoutBox>
      <CheckoutBoxMessage >
        <div style={{height:'10vh', width:'30vw', color:'white'}}>
        <h3>Thank You, Your order is on it's way!</h3>
       <Button className='mt-3'> Confirm </Button>
      </div>
      </CheckoutBoxMessage>       
    </CheckoutBox>
  </CheckoutContainer>
  )
}
