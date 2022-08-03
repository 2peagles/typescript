import React from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';

import { CheckoutContainer, CheckoutHeader, CheckoutBox, CheckoutBoxMessage} from '../../styles/Checkout';

export const CheckoutPayment = () => {
  return (
    <CheckoutContainer className='d-block'>
      <CheckoutHeader style={{color:'#69c0de80'}}>
         Payment
      </CheckoutHeader>
      <CheckoutBox>
        <CheckoutBoxMessage>
          <Form style={{ color:'black'}}>
            <Form.Group className="mb-3" >
        <Form.Label>Credit Card Number</Form.Label>
        <Form.Control type="card number" placeholder="Credit Card Number" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Expiry Month</Form.Label>
        <Form.Control type="card number" placeholder="Expiry Month" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Expir Year</Form.Label>
        <Form.Control type="" placeholder="Expiry Year" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>CCV</Form.Label>
        <Form.Control type="ccv" placeholder="CCV" />
      </Form.Group>
      <Link to='/checkoutconfirmation'><Button className='mt-3'> Confirm </Button></Link>
      </Form>
        </CheckoutBoxMessage>       
      </CheckoutBox>
    </CheckoutContainer>
  )
}
