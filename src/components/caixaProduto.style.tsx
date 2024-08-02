import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
}

`

export const CaixaProd = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 70%;
    
    
    
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

`
export const StatProd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    align-items: center;
    

`
export const InfoProd = styled.div`
    display: flex;
    flex-direction: column;
    
    

`
export const Preco = styled.p`
    font-weight: 700;
    padding: 0px 5px 5px 5px;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    color: black;
`

export const Pe = styled.p`
    padding: 0px 5px 0px 5px;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    
    
`


