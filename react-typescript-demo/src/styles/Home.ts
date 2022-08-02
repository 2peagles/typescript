import styled from 'styled-components';
import { Button, Col } from 'react-bootstrap';

const accentcolor='#DE8769'
export const Container =styled.div`

`
export const MyCol=styled(Col)`
    display:flex;
    align-items:center;
    justify-content:center;
`
export const MyButton = styled(Button)`
    background-color: transparent;
    border-color:${accentcolor};
    color:black;
    &:hover{
         background-color: transparent;
         border-color:${accentcolor};
         color:black;
    }
`
export const AccentButton = styled(Button)`
    background-color:${accentcolor};
    border-color:${accentcolor};
    color:white;
    &:hover {
        background-color:${accentcolor};
        border-color:${accentcolor};
    }
`