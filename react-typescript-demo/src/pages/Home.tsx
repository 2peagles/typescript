import React from 'react';
import { Row} from 'react-bootstrap';
import {HeroContainer} from '../styles/Home';

export const Home = () => {
  return (
    <HeroContainer fluid className='no-gutters' style={{ margin:'0',padding: '0px', fontFamily: 'Patrick Hand' }}>
      <Row>
        <h1> All pants 10-30% off </h1>
      </Row>
    </HeroContainer>
  )
}
