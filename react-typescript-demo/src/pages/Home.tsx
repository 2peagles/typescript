import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import  StoreItem  from '../components/StoreItem';

export const Home = ({products}) => {
  return (
    <Container fluid className='d-block' >
      <Row style={{minHeight:'100vh'}}>
        <Col className='d-flex align-items-center justify-content-center'> Home </Col>
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
            style={{backgroundColor:'rgba(105, 192, 222,0.5)', marginRight:'20px', borderRadius:'2rem', height:'70vh'}}>
              <div>something here</div></Col>
          <Col 
          className='d-flex align-items-center justify-content-center '
          style={{backgroundColor:'rgba(105, 192, 222,0.5)', borderRadius:'2rem', height:'70vh'}}>
              <div>
                something here
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}
