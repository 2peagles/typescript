import React from 'react';
import {Button, Card, Container, Col, Row} from 'react-bootstrap';
import  StoreItem  from '../components/StoreItem';

export const Home = ({products}) => {
  return (
    <Container fluid className='d-block' style={{padding:'0px'}} >
      <Row style={{ minHeight: '100vh', width: '100vw', backgroundColor: 'rgba(105, 192, 222,0.5)' }}>
        <Col 
          className='d-flex align-items-center justify-content-center'
          >
          <div>
              <p> Single, Couples, Small, Medium, Large & Families</p>
              <h1> Home Essentials</h1>
            <Button style={{ backgroundColor:'#DE8769', borderColor:'#DE8769', marginRight:'10px'}}>Shop Bundles </Button>
            <Button style={{ backgroundColor: 'transparent', borderColor: '#DE8769', color:'black'}}>Shop Individuals</Button>
            </div>
             </Col>
        <Col className='d-flex align-items-center justify-content-center'>
             <Card>
            {/* <Card.Img src='/imgs/toliet.png' alt='basket of toliet paper' style={{ objectFit: 'cover' }} /> */}
             </Card>
             </Col>
      </Row>
      <Row style={{minHeight:'40vh'}}>
        <Container>
          <h1 className='d-flex align-items-center justify-content-center' style={{margin:'20px', fontFamily:'Patrick Hand'}}>Best Sellers</h1>
          <Row>
            {products.map((product) => (
          <Col>
            <StoreItem
            key={product.id}
            product={product}
          />
          </Col>
        ))}     
          </Row>
        </Container>
      </Row>
      <Row style={{minHeight:'90vh', margin:'10px 0px'}} >
        <Row>
          <Col 
            className='d-flex align-items-center justify-content-center h-100 w-100'
            style={{backgroundColor:'rgba(105, 192, 222,0.5)', borderRadius:'2rem', height:'70vh'}}>
              <div>
                something here
                </div>
            </Col>
        </Row>
      </Row>
      <Row style={{minHeight:'90vh'}}   className='d-flex align-items-center justify-content-center ' >
        <Row>
          <Col 
            className='d-flex align-items-center justify-content-center '  
            >
            <Card style={{borderRadius:'5rem'}}>
              <Card.Img src='/imgs/sports.jpg' alt='sports' style={{ objectFit: 'cover' }} />
                  <Button> Shop bundles</Button>
              </Card></Col>
          <Col 
          className='d-flex align-items-center justify-content-center '
            >
              <div>
                something here
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}
