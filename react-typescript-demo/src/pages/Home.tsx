import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

export const Home = () => {
  return (
    <Container fluid >
      <Row>
        <Col className='d-flex align-items-center justify-content-center'> Home </Col>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col> icon w/h text above ()</Col>
            <Col> icon w/h text above ()</Col>
            <Col> icon w/h text above ()</Col>
            <Col> icon w/h text above ()</Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Row>
          <Col className='d-flex align-items-center justify-content-center '> something here</Col>
          <Col className='d-flex align-items-center justify-content-center '>
            something here
          </Col>
        </Row>
      </Row>
      <Row>
        <Row>
          <Col className='d-flex align-items-center justify-content-center '> something here</Col>
          <Col className='d-flex align-items-center justify-content-center '>
            something here
          </Col>
        </Row>
      </Row>
    </Container>
  )
}
