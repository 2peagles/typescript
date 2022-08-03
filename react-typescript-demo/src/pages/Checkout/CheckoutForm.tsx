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
        <Container fluid>
          <Row>
            <Col sm={12} md={6}>
            <Row sm={12}>
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
            </Row>
            </Col>
            <Col sm={12} md={6}>
            <Row sm={12}>
                <h3 className="mb-3"> Billing Address</h3>
            <Col sm={12} md={6}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstName" placeholder="First Name" />
              <Form.Label className="mt-3" >Last Name</Form.Label>
              <Form.Control type="lastName" placeholder="Last Name" />
              <Form.Label className="mt-3" >Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="address" placeholder="Street Address" />
              <Form.Label className="mt-3">City</Form.Label>
              <Form.Control type="city" placeholder="City" />
              <Form.Label className="mt-3">State/Province</Form.Label>
              <Form.Control type="state" placeholder="State / Province" />
            </Col>
            </Row>
            </Col>
          </Row>
          <Row>
              <Row>
                <Col>
                  <h3 className="mt-3"> Payment </h3>
                </Col>
              </Row>
            {/* <h3 className="mb-3"> Payment </h3> */}
            <Col sm={12} md={6}>
              <Form.Label className="mt-3"> Credit Card Number </Form.Label>
              <Form.Control type="card number" placeholder="Credit Card Number" />
              <Form.Label>Expiry Month</Form.Label>
              <Form.Control type="card number" placeholder="Expiry Month" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label className="mt-3">Expir Year</Form.Label>
              <Form.Control type="" placeholder="Expiry Year" />
              <Form.Label>CCV</Form.Label>
              <Form.Control type="ccv" placeholder="CCV" />
            </Col>
          </Row>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to='/purchasesummary'>
              <CartCheckout style={{ width: '70%', borderRadius: '5px' }} type="submit"> Confirm </CartCheckout></Link>
          </div>
        </Container>
      </Form>
    </FormProvider>
  )
}

export default CheckoutForm;

