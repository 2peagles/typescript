import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CheckoutContainer, CheckoutHeader, CheckoutBox, CheckoutBoxMessage } from '../../styles/Checkout';

export const CheckoutConfirmation = ({order, error}) => {

    let Confirmation = () => (order.customer ? (
      <>
        <div>
          <h5 >Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</h5>
            <hr></hr>
          <h6>Order ref: {order.customer_reference}</h6>
        </div>
        <br />
        <Link to='/'> <Button> Back to home</Button> </Link> 
      </>
    ) : (
      <div>
        {/* <CircularProgress /> */}
        hi
      </div>
    ));

  if (error) {
    Confirmation = () => (
      <>
        <h6>Error: {error}</h6>
        <br />
        <Link to='/'><Button>Back to home</Button></Link>
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
        <div style={{height:'10vh', width:'30vw', color:'white'}}>
        <h3>Thank You, for your purchase!</h3>
       <Link to='/'><Button className='mt-3'> Home Page </Button></Link>
      </div>
      </CheckoutBoxMessage>       
    </CheckoutBox>
  </CheckoutContainer>
  )
}
