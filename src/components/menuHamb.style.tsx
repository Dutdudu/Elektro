import styled from "styled-components";

export const HambNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 250px; 
    height: 87%;
    background-color: #F5F5F5;
    z-index: 1000; 
    box-shadow: 2px 0 5px rgba(0,0,0,0.5);
    padding: 10px;
`;

export const InicioHamb = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    background-color: #2B2B2B;
    padding: 20px;
    color: white;

    img {
        margin-right: 10px;
        border-radius: 50%;
    }

    h3 {
        margin: 0;
    }
`;

export const Elemento = styled.p`
    color: #2B2B2B;
    font-size: larger;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    font-family: "Montserrat", sans-serif;
    &:hover {
        background-color: #ddd;

    }
`;

export const SairElemento = styled.p`
    color: #2B2B2B;
    font-size: larger;
    padding: 10px;
    cursor: pointer;
    margin-top: auto;
    font-family: "Montserrat", sans-serif;

    &:hover {
        background-color: #ddd;
    }
`;
