import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartCheckout } from '../../styles/cart';
import { useForm, FormProvider } from 'react-hook-form';
import commerce from '../../lib/commerce';
import { Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const CheckoutForm = ({cart}) => {

  const stripePromise = loadStripe('...');

  const [shippingCountries, setShippingCountries]=useState([]);
  const [shippingCountry, setShippingCountry]=useState('');
  const [shippingSubdivisions, setShippingSubdivisions]=useState([]);
  const [shippingSubdivision, setShippingSubdivision]=useState('');
  const [shippingOptions, setShippingOptions]=useState([]);
  const [shippingOption, setShippingOption]=useState('');
  const [checkoutToken, setCheckoutToken]=useState({});
  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name])=>({id: code, label:name }));
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name])=>({id: code, label:name }));
  // const options = shippingOptions.map(()=>({ id:shippingOptions.id, label:`${shippingOptions.description} - (${shippingOptions.price.formatted_with_symbol})`}))

   const fetchShippingCountries = async (checkoutTokenId) =>{
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    console.log(countries)
      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
  }

   const fetchSubdivisions = async (countryCode)=>{
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
      setShippingSubdivisions(subdivisions);
      setShippingSubdivision(Object.keys(subdivisions)[0]);
  }
  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null)=>{
    const options =await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region: stateProvince});
    setShippingOptions(options);
    setShippingOption(options[0].id);
  }

  useEffect(()=> {
    const generateToken = async ()=> {
      try{
          const token = await commerce.checkout.generateToken(cart.id, {type:'cart'});
          setCheckoutToken(token);
      } catch (error){
        console.log('There was an error in generating a token', error);
      }
    }
    generateToken();
  }, [cart]);
  
  useEffect(()=>{
    fetchShippingCountries(checkoutToken.id)
  }, []);

  useEffect(()=>{
    if (shippingCountry) fetchSubdivisions(shippingCountry)
  }, [shippingCountry]);

  useEffect(()=>{
      if (shippingSubdivision)fetchShippingOptions(checkoutToken.Id, shippingCountry, shippingSubdivision);
  },[shippingSubdivision])

  return (
    <>
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(data => console.log(data))}>
        <Container >
          <Row>
            <Col sm={12} md={6}>
            <Row sm={12}>
                <h3 className="mb-3"> Shipping Details</h3>
            <Col sm={12} md={6}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstName" placeholder="First Name"/>
                <Form.Label className="mt-3" >Last Name</Form.Label>
                <Form.Control type="lastName" placeholder="Last Name" />
                <Form.Label  className="mt-3" >Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <Form.Label className="mt-3">Street Address</Form.Label>
              <Form.Control type="address" placeholder="Street Address" />
            </Col>
            <Col  sm={12} md={6}>
              <Form.Label  >City</Form.Label>
              <Form.Control type="city" placeholder="City" />
              <Form.Label  className="mt-3">Shipping Country</Form.Label>
                 <Form.Select value={shippingCountry} onChange={(e)=> setShippingCountry(e.target.value)} >
                     {countries.map((country)=>(
                      <option key={country.id} value={country.id}>{country.label}</option>
                     ))}
                  </Form.Select>
              <Form.Label  className="mt-3">Shipping Subdivision</Form.Label>
              <Form.Select value={shippingSubdivision}  onChange={(e)=> setShippingSubdivision(e.target.value)}            >
                     {subdivisions.map((subdivision)=>(
                      <option key={subdivision.id} value={subdivision.id}>{subdivision.label}</option>
                     ))}
                     </Form.Select>
              <Form.Label  className="mt-3">Shipping Options</Form.Label>
                  <Form.Select value={shippingOption}  onChange={(e)=> setShippingOption(e.target.value)}            >
                     {/* {options.map((option)=>(
                      <option key={option.id} value={option.id}>{option.label}</option>
                     ))} */}
                     {
                      shippingOptions.map((sO)=> ({id:sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`})).map((item)=>(
                      <option key={item.id} value={item.id}>{item.label}</option>
                      ))}
                     </Form.Select>
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
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="address" placeholder="Street Address" />
            </Col>
            <Col sm={12} md={6}>
            <Form.Label  >City</Form.Label>
              <Form.Control type="city" placeholder="City" />
              <Form.Label  className="mt-3">Shipping Country</Form.Label>
                 <Form.Select value={shippingCountry} onChange={(e)=> setShippingCountry(e.target.value)} >
                     {countries.map((country)=>(
                      <option key={country.id} value={country.id}>{country.label}</option>
                     ))}
                  </Form.Select>
              <Form.Label  className="mt-3">Shipping Subdivision</Form.Label>
              <Form.Select value={shippingSubdivision}  onChange={(e)=> setShippingSubdivision(e.target.value)}            >
                     {subdivisions.map((subdivision)=>(
                      <option key={subdivision.id} value={subdivision.id}>{subdivision.label}</option>
                     ))}
                     </Form.Select>
              <Form.Label  className="mt-3">Shipping Options</Form.Label>
                  <Form.Select value={shippingOption}  onChange={(e)=> setShippingOption(e.target.value)}            >
                     {/* {options.map((option)=>(
                      <option key={option.id} value={option.id}>{option.label}</option>
                     ))} */}
                     {
                      shippingOptions.map((sO)=> ({id:sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`})).map((item)=>(
                      <option key={item.id} value={item.id}>{item.label}</option>
                      ))}
                     </Form.Select>
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
                <Elements stripe={stripePromise}>
                  <ElementsConsumer>
                    {({elements,stripe})=>(
                      <form>
                        <CardElement/>
                        <br></br>
                      <div>
                            <Link to ='/store'> <CartCheckout style={{ width: '80%', borderRadius: '5px' }}> Back To Store</CartCheckout></Link>
                                  <Link to='/purchasesummary'> 
                                    <CartCheckout 
                                            style={{ width: '70%', borderRadius: '5px' }} 
                                            type="submit"
                                             disabled={!stripe}
                                            > Next {checkoutToken.live.subtotal.formatted_with_symbol}
                                    </CartCheckout>
                           </Link>
                        </div>
                    </form>
                    )}
                  </ElementsConsumer>
                </Elements>      
            {/* <Col sm={12} md={6}>
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
            </Col> */}
          </Row>
          {/* <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Link to ='/store'> <CartCheckout style={{ width: '80%', borderRadius: '5px' }}> Back To Store</CartCheckout></Link>
             <Link to='/purchasesummary'> 
                <CartCheckout 
                    style={{ width: '70%', borderRadius: '5px' }} 
                    type="submit"
                    disabled={!stripe}
                    > Next {checkoutToken.live.subtotal.formatted_with_symbol}
                    </CartCheckout>
                </Link>
          </div> */}
        </Container>
      </Form>
    </FormProvider>


    </>
  )
}

export default CheckoutForm;

