import styled from 'styled-components';
// import { Col } from 'react-bootstrap';

// const textprimary ='#69c0de80';
// const textaccent ='#DE8769';

export const CheckoutContainer= styled.div`
    top:0;
    left:0; 
    z-index:1999;
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
    position: fixed;
    background-color:white;
`
export const CheckoutHeader = styled.h1`
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:3rem;
    padding-top:1rem;
`
export const CheckoutBox = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const CheckoutBoxMessage = styled.div`
height:50vh;
width:50vw;
display:flex;
align-items:center;
justify-content:center;
border-radius:2rem;
// background-color:white;
box-shadow:5px 10px 10px 10px grey;
`
export const CheckoutItems=styled.div`
    width:350px;
    display:block;
    // padding:0px 50px 0px;
`
export const CheckoutPageBox = styled.div`
    width:100vw;
    height:100vh;
    margin:10px 0px;
    display:flex;
    alignItems:center;
    justify-content:space-around;
`