import styled from 'styled-components';
// import { Col } from 'react-bootstrap';

// const textprimary ='#69c0de80';
// const textaccent ='#DE8769';

export const CheckoutContainer= styled.div`
    top:0;
    left:0; 
    z-index:1999;
    min-height:100vh;
    min-width:100vw;
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
    padding-top:5rem;
    text-transform:uppercase;
`
export const CheckoutBox = styled.div`
    min-height:100vh;
    min-width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const CheckoutBoxMessage = styled.div`
min-height:50vh;
min-width:50vw;
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
min-height:70vh;
min-width:70vw;
display:flex;
align-items:center;
justify-content:center;
border-radius:2rem;
padding:40px 0px;
// background-color:white;
box-shadow:5px 10px 10px 10px grey;
`