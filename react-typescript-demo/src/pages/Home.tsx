import React from 'react';
import {Button, Card, Container, Col, Row} from 'react-bootstrap';
import  StoreItem  from '../components/StoreItem';

export const Home = ({products, onAddToCart}) => {
  return (
    <Container fluid className='d-block' style={{ padding: '0px', fontFamily: 'Patrick Hand' , marginBottom:'10px'}}>
      <Row style={{ minHeight: '100vh', width: '100vw', backgroundColor: 'rgba(105, 192, 222,0.5)' }}>
        <Col xs={12} md={6}
          className='d-flex align-items-center justify-content-center'
          >
          <div >
          <p>Couples, Small, Medium, Large & Families</p>
              <h1> Home Essentials</h1>
            <Button style={{ backgroundColor:'#DE8769', borderColor:'#DE8769', marginRight:'10px'}}>Shop Bundles </Button>
            <Button style={{ backgroundColor: 'transparent', borderColor: '#DE8769', color:'black',
}}>Shop Individuals</Button>
            </div>
             </Col>
        <Col xs={12} md={6} className='d-flex align-items-center justify-content-center'>
             <Card style={{background:'transparent', border:'transparent'}}>
                <Card.Img src='/imgs/toliet.png' alt='basket of toliet paper'  style={{ objectFit:'cover' }} />
             </Card>
             </Col>
      </Row>
      <Row style={{minHeight:'40vh'}}>
        <Container>
          <h1 className='d-flex align-items-center justify-content-center' style={{margin:'20px', fontFamily:'Patrick Hand'}}>Best Sellers</h1>
          <Row>
            {products.map((product) => (
              <Col xs={12} md={4} style={{marginBottom:'10px'}}>
            <StoreItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
          </Col>
        ))}     
          </Row>
        </Container>
      </Row>
      <Row style={{minHeight:'50vh', width:'100%',margin:'50px 0px'}} className='d-flex align-items-center justify-content-center' >
      <Col  className='d-flex align-items-center justify-content-center'> 
        <div  style={{fontSize:'2.5rem', width:'70vw' }} >
        Mission Statement Here...
        Lorem ipsum dolor sit amet. Aut sapiente eius et ullam dolorem quo minima excepturi et quos consectetur. 
        At numquam eligendi et quidem saepe in numquam enim ut obcaecati omnis. Id nisi ipsa est laborum animi ea iste incidunt 33 nulla unde.
          </div>
          </Col>
      </Row>
      <Row style={{minHeight:'90vh'}}   className='d-flex align-items-center justify-content-center ' >
        <Row>
          <Col 
            className='d-flex align-items-center justify-content-center '  
            >
            <Card style={{ borderRadius: '2rem', borderColor: '#DE8769', backgroundColor: 'transparent', marginBottom:'10px'}} className='d-flex align-items-center justify-content-center '  >
              <Card.Img src='/imgs/single.png' alt='sports' style={{ objectFit: 'cover' }} />
                <Button 
                    style={{ backgroundColor: 'transparent', 
                                  borderColor: '#DE8769', 
                                  color: 'black' , 
                                  width:'30%',
                                  marginBottom:'20px'
                                  }}>
                              Shop Singles
                      </Button>
                </Card>
              </Col>
          <Col 
          className='d-flex align-items-center justify-content-center '
            >
            <Card style={{ borderRadius: '2rem', marginBottom: '10px', borderColor: '#DE8769', }} className='d-flex align-items-center justify-content-center ' >
              <Card.Img variant='top' src='/imgs/family.png' alt='sports' style={{ objectFit:'cover', height:'408px', width:'610px'}} />
                  <Button 
                      style={{ backgroundColor: '#DE8769', 
                                    borderColor: '#DE8769', 
                                    marginBottom: '20px',
                                    width:'30%'
                                    }}>Shop Families
                          </Button>
            </Card>
          </Col>
        </Row>
      </Row>
      <Row className='d-flex align-items-center justify-content-center text-align-center' style={{minHeight:'80vh'}}>
        <Col className='d-flex align-items-center justify-content-center h-100' xs={12} md={6}> 
        <div  style={{fontSize:'20px', width:'70%' }} >
        Mission Statement Here...
        Lorem ipsum dolor sit amet. Aut sapiente eius et ullam dolorem quo minima excepturi et quos consectetur. 
        At numquam eligendi et quidem saepe in numquam enim ut obcaecati omnis. Id nisi ipsa est laborum animi ea iste incidunt 33 nulla unde.
        Lorem ipsum dolor sit amet. Aut sapiente eius et ullam dolorem quo minima excepturi et quos consectetur. 
        At numquam eligendi et quidem saepe in numquam enim ut obcaecati omnis. Id nisi ipsa est laborum animi ea iste incidunt 33 nulla unde.
          </div>
          </Col>
        <Col className='d-flex align-items-center justify-content-center h-100' xs={12} md={6}>
                <div style={{fontSize:'20px', maxWidth:'500px' }}>
                  <img src='/imgs/closet.png' alt='linen closet' />
                </div>
          </Col>
        </Row>
    </Container>
  )
}
