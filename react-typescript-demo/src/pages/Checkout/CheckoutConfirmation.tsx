import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CheckoutContainer, CheckoutHeader, CheckoutBox, CheckoutBoxMessage } from '../../styles/Checkout';

export const CheckoutConfirmation = () => {
  return (
    <CheckoutContainer className='d-block fixed' style={{backgroundColor:'#DE8769'}}>
    <CheckoutHeader>
         Confirmation
    </CheckoutHeader>
    <CheckoutBox>
      <CheckoutBoxMessage >
        <div style={{height:'10vh', width:'30vw', color:'white'}}>
        <h3>Thank You, for your purchase!</h3>
       <Link to='/'><Button className='mt-3'> Home Page </Button></Link>
      </div>
      </CheckoutBoxMessage>       
    </CheckoutBox>
  </CheckoutContainer>
  )
}
