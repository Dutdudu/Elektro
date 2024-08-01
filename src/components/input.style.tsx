import styled from "styled-components";

export const CaixaInput = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 20px;


`

export const Texto = styled.p`
    color: black;
    margin: 0;
    padding: 10px 0px 10px 1px;
    font-family: "Montserrat", sans-serif;

`
export const RealInput = styled.input`
  
    border: none;
    outline: none;
    box-shadow: none;
    margin: 0;
    border-bottom: 2px solid #B9B9B9;
    color: #B9B9B9;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    width: 100%;
    padding-bottom: 5px;

    &::placeholder{
        font-size: 16px;
        font-family: "Montserrat", sans-serif;
        color: #B9B9B9;
    }

`