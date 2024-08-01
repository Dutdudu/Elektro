import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';




export const Tela = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CompTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 65px

`
export const Title = styled.h2`
    color: #FF8F0E;
    font-weight: 400;
    font-family: "Russo One", sans-serif;
`

export const Produto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 0px;
    width: 20%;

` 
export const SubCat = styled.div`
    width: 80%;
   
    padding: 0;
    padding-bottom: 7px;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const Categorias = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    align-items: center;
    width:100%

`
export const CaTitle = styled.h4`
    width: 80%;
    font-weight: 500;
    border-top: 2px solid #ccc;
    padding-left: 14px;
    padding-top:20px;
    font-family: "Montserrat", sans-serif;
    margin: 0;
`

export const CaixaCaixa = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    padding: 25px 0px;

`

export const CaTitle2 = styled.h4`
    width: 80%;
    font-weight: 500;
    font-size: 16px;
    border-bottom: 2px solid #ccc;
    padding-left: 14px;
    padding-bottom:20px;
    font-family: "Montserrat", sans-serif;
    
    margin: 0;
`
export const Footer = styled.footer`
    background-color: #FFAE50;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
`
export const IconesSeguidos = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`

export const A = styled.a`
  
    margin: 0;
    
`
export const P = styled.p`
    
    margin: 0;
    padding: 10px 30px;
    
`