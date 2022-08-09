import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartCheckout } from '../../styles/cart';
import { useForm, FormProvider } from 'react-hook-form';
import commerce from '../../lib/commerce';
// import { Elements, CardElement, ElementsConsumer} from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import { PurchaseSummary } from './PurchaseSummary';

//  const stripePromise = loadStripe('process.env.React_APP_STRIPE_PUBLIC_KEY');

type CheckoutTokenProp = {
  id: string | number;
  live: any | null;
  subtotal: number;
}
const CheckoutForm = ({ cart,  onCaptureCheckout, shippingData, test}) => {
  const [shippingCountries, setShippingCountries]=useState<{} | []>({});
  const [shippingCountry, setShippingCountry]=useState('');
  const [shippingSubdivisions, setShippingSubdivisions]=useState<{} | []>({});
  const [shippingSubdivision, setShippingSubdivision]=useState<any | string | undefined>('');
  const [shippingOptions, setShippingOptions]=useState<any[]>([]);
  const [shippingOption, setShippingOption]=useState('');
  const [checkoutToken, setCheckoutToken]=useState<CheckoutTokenProp | any | {}>({});

  const [showOrderSummary, setShowOrderSummary]=useState(false);
  const methods = useForm();

  // const handleSumbit = async (event, elements, stripe)=>{
  //   event.preventDefault();

  //   if (!stripe || !elements)return;

  //   const cardElement = elements.getElement(CardElement);
  //   const {error, paymentMethod} = await stripe.createPaymentMethod({type: 'card', card: cardElement});

  //   if(error) {
  //     console.log(error);
  //   } else {
  //     const orderData = {
  //       line_items:checkoutToken.live.line_items,
  //       customer:{firstname:shippingData.firstName, lastname:shippingData.lastName, email:shippingData.email},
  //       shipping:{
  //         name:'Primary', 
  //         street:shippingData.address1, 
  //         town_city:shippingData.city, 
  //         county_state:shippingData.shippingSubdivision,
  //         postal_zip_code:shippingData.zip,
  //         country:shippingData.shippingCountry,
  //       },
  //       fulfillment:{shipping_method:shippingData.shippingOption},
  //       payment:{
  //         gateway:'stripe',
  //         stripe:{
  //           payment_method_id:paymentMethod.id
  //         },
  //       },
  //     };
  //     onCaptureCheckout(checkoutToken.id, orderData);
  //   }
  // };


  const countries = Object.entries(shippingCountries).map(([code, name])=>({id: code, label:name }));
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name])=>({id: code, label:name }));
  // const options = shippingOptions.map(()=>({ id:shippingOptions.id, label:`${shippingOptions.description} - (${shippingOptions.price.formatted_with_symbol})`}))

   const fetchShippingCountries = async (checkoutTokenId) =>{
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    // console.log(countries)
      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
  }

   const fetchSubdivisions = async (countryCode)=>{
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
      setShippingSubdivisions(subdivisions);
      setShippingSubdivision(Object.keys(subdivisions)[0]);
  }
  const fetchShippingOptions = async (checkoutTokenId, country, region = null!) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region});
    setShippingOptions(options);
    setShippingOption(options[0].id);
  }

  useEffect(()=> {
    if(cart.id){
    const generateToken = async () => {
      try {
          const token = await commerce.checkout.generateToken(cart.id, {type:'cart'});
          setCheckoutToken(token);
      } catch (error){
        console.log('There was an error in generating a token', error);
      }
    };
      generateToken();
    }
  }, [cart]);
  
  useEffect(()=>{
    fetchShippingCountries(checkoutToken.id)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    if (shippingCountry) fetchSubdivisions(shippingCountry)
  }, [shippingCountry]);

  useEffect(()=>{
      if (shippingSubdivision)fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[shippingSubdivision]);

  return (
    <>
    <Container>
      <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit((data) => test({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
          <Row>
            <Col>
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
              <Form.Label >City</Form.Label>
              <Form.Control type="city" placeholder="City" />
              <Form.Label  className="mt-3">Shipping Country</Form.Label>
                 <Form.Select value={shippingCountry} onChange={(e)=> setShippingCountry(e.target.value)} >
                     {countries.map((country)=>(
                      <option key={country.id} value={country.id}>{country.label}</option>
                     ))}
                  </Form.Select>
              <Form.Label  className="mt-3">Shipping Subdivision</Form.Label>
              <Form.Select value={shippingSubdivision}  onChange={(e)=> setShippingSubdivision(e.target.value)}            >
                     {subdivisions.map((subdivision) => (
                      <option key={subdivision.id} value={subdivision.id}>{subdivision.label}</option>
                     ))}
                     </Form.Select>
              <Form.Label  className="mt-3">Shipping Options</Form.Label>
                  <Form.Select value={shippingOption}  onChange={(e)=> setShippingOption(e.target.value)}   className='mb-5' >
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
                    <Form.Label className="mt-3" >Street Address</Form.Label>
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
                  <Form.Select value={shippingOption}  onChange={(e)=> setShippingOption(e.target.value)} >
                     {
                      shippingOptions.map((sO)=> ({id:sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`})).map((item)=>(
                      <option key={item.id} value={item.id}>{item.label}</option>
                      ))}
                     </Form.Select>      
            </Col>
            </Row>
            </Col>
              <div  className='mt-3'>
                <Link to='/store'> <CartCheckout> Back To Store </CartCheckout></Link>
                <CartCheckout type="submit" onClick={() => setShowOrderSummary(!showOrderSummary)}> continue  </CartCheckout>
              </div>
            </Row>
          </Form>
        </FormProvider>
    </Container>

    {showOrderSummary &&
      <PurchaseSummary checkoutToken={checkoutToken}  onCaptureCheckout={onCaptureCheckout} shippingData={shippingData}/>
    }
    </>
  )
}

export default CheckoutForm;