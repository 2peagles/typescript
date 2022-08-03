import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartCheckout } from '../../styles/cart';
import { useForm, FormProvider } from 'react-hook-form';

const CheckoutForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(data => console.log(data))}>
        <Container>
          <Row>
          <h3 className="mb-3"> Shipping Details</h3>
            <Col sm={12} md={6}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="First Name" />
                <Form.Label className="mt-3" >Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Last Name" />
                <Form.Label  className="mt-3" >Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
            </Col>
            <Col  sm={12} md={6}>
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="address" placeholder="Street Address" />
              <Form.Label  className="mt-3">City</Form.Label>
              <Form.Control type="city" placeholder="City" />
              <Form.Label  className="mt-3">State/Province</Form.Label>
              <Form.Control type="state" placeholder="State / Province" />
      
            </Col>
            <div style={{ marginTop:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <Link to='/checkoutpayment'>
                <CartCheckout style={{width:'70%', borderRadius:'5px'}} type="submit"> Confirm </CartCheckout></Link>
              </div>
          </Row>
        </Container>
      </Form>
    </FormProvider>
    // <Form>
    // <Form.Group className="mb-3" >
    //     <Form.Label>First Name</Form.Label>
    //     <Form.Control type="firstName" placeholder="First Name" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" >
    //     <Form.Label>Last Name</Form.Label>
    //     <Form.Control type="lastName" placeholder="Last Name" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //   </Form.Group>

    //   <h3 className="mb-3 mt-5"> Shipping Details</h3>

    //   <Form.Group className="mb-3 mt-3" >
    //     <Form.Label>First Name</Form.Label>
    //     <Form.Control type="firstName" placeholder="First Name" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" >
    //     <Form.Label>Street Address</Form.Label>
    //     <Form.Control type="address" placeholder="Street Address" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" >
    //     <Form.Label>City</Form.Label>
    //     <Form.Control type="city" placeholder="City" />
    //   </Form.Group>
    //   <Form.Group className="mb-5" >
    //     <Form.Label>State/Province</Form.Label>
    //     <Form.Control type="state" placeholder="State / Province" />
    //   </Form.Group>
    //   <Link to='/checkoutpayment'><CartCheckout style={{width:'100%', borderRadius:'5px', margin:'0'}}> Confirm </CartCheckout></Link>
    // </Form>
  )
}

export default CheckoutForm;

