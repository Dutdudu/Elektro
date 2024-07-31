import styled from 'styled-components';

export const CarouselContainer = styled.div`
  border-radius: 10px; 
  overflow: hidden;    
  margin: 0 auto;
  max-width: 84%;
  padding-bottom: 20px;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px; 
`;

export const Dot = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #c4c4c4; 
  margin: 0 4px;
  transition: background-color 0.3s ease;

  &.slick-active {
    background-color: #000; /* Cor do dot ativo */
  }
`;
