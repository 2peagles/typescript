import React from 'react';
import {Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartCheckout } from '../../styles/cart';

const CheckoutForm = () => {
  return (
    <Form>
    <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstName" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastName" placeholder="Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <h3 className="mb-3 mt-5"> Shipping Details</h3>

      <Form.Group className="mb-3 mt-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstName" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Street Address</Form.Label>
        <Form.Control type="address" placeholder="Street Address" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>City</Form.Label>
        <Form.Control type="city" placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-5" >
        <Form.Label>State/Province</Form.Label>
        <Form.Control type="state" placeholder="State / Province" />
      </Form.Group>
      <Link to='/checkoutpayment'><CartCheckout style={{width:'100%', borderRadius:'5px', margin:'0'}}> Confirm </CartCheckout></Link>
    </Form>
  )
}

export default CheckoutForm;

