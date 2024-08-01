import styled from "styled-components";

export const Tela = styled.div`
    display: flex;
    
    height: 769px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-around;
    justify-items: space-around;

`
export const Ops = styled.h1`
    font-weight: 700;
    font-family: "Russo One", sans-serif;
    color: #2B2B2B;

`
export const Infeliz = styled.p`
    width: 80%;
    padding-top: 10px;
    color: #2B2B2B;
    text-align: center;
    font-family: "Montserrat", sans-serif;
`
export const Bot2 = styled.button`
    width: 188px;
    height: 40px;
    border: 1px solid #DEDEDE;
    border-radius: 16px;
    border:none;
    background-color: white;
    padding-top: 12px; 
    text-align: center;
    display: flex;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: "Montserrat", sans-serif;

     &:hover {
    background-color: #F5F5F5;
  }


`
export const CapaBot2 = styled.div`
    padding-top:20px;

`

