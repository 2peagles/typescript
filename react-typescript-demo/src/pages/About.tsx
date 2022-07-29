import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export const About = () => {
  return (
    <Container fluid >
      <Row>
        <Col className='d-flex align-items-center justify-content-center'> About Us </Col>
      </Row>
      <Row className='d-flex align-items-center justify-content-center'>
        <Col className='d-flex align-items-center justify-content-center '> Img Here </Col>
        <Col className='d-flex align-items-center justify-content-center'> Mission Statement Here  </Col>
      </Row>
      <Row>
        <Container>
          <Row>
          <Col> icon w/h text above ()</Col>
            <Col> icon w/h text above ()</Col>
              <Col> icon w/h text above ()</Col>
              <Col> icon w/h text above ()</Col>
            <Col> icon w/h text above ()</Col>
          <Col> icon w/h text above ()</Col>
          </Row>
        </Container>
      </Row>
      <Row>
        <Row> <Col className='d-flex align-items-center justify-content-center'> title here </Col></Row>
        <Row>
          <Col className='d-flex align-items-center justify-content-center '> something here</Col>
          <Col className='d-flex align-items-center justify-content-center '>
             something here
          </Col>
         </Row>
      </Row>
      <Row>
        <Col className='d-flex align-items-center justify-content-center text-align-center '> Eco statement here </Col>
      </Row>
    </Container>
  )
}
