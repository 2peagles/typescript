import styled from 'styled-components';
import { Container } from 'react-bootstrap';

// const accentcolor='#DE8769'
export const HeroContainer=styled(Container)`
    height:100vh;
    width:100vw;
    padding:0px 0px;
    margin:0px;
    background-size:cover;
    background-position:center;
    background-image: url('/imgs/hero.jpg') ;
`
export const OverLay=styled.div`
  opacity: 0.9;
  background-color:black;
`