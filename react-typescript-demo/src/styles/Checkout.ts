import styled from 'styled-components';
// import { Col } from 'react-bootstrap';

// const textprimary ='#69c0de80';
// const textaccent ='#DE8769';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
export const CheckoutContainer = styled.div`
    top:0;
    left:0;
    right:0;
    width:100%;
    z-index:1999;
    position:absolute;
    background-color:white;
`
export const CheckoutHeader = styled.h1`
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:3rem;
    padding-top:2rem;
    text-transform:uppercase;
`
export const CheckoutBox = styled.div`
    min-height:90vh;
    // min-width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
`
export const CheckoutBoxMessage = styled.div`
min-height:55vh;
min-width:55vw;
display:flex;
align-items:center;
justify-content:center;
border-radius:2rem;
// background-color:white;
box-shadow:5px 10px 10px 10px grey;
@media (max-width400px) and (max-height: 900px){
    box-shadow:none;
}
`
export const CheckoutItems=styled.div`
    display:'flex';
    align-items:'center';
    justify-content:'center'
    min-width:350px;
    // display:block;
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