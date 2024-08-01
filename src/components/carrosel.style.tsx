import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative; 
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;
  max-width: 84%;
  padding-bottom: 20px;

  .swiper-pagination {
    
    left: 0;
    right: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10; 
  }

  .swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: #c4c4c4;
    margin: 0 4px;
    transition: background-color 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: #000; 
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
`;
