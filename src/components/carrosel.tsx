import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContainer, CarouselImage, Dot } from './carrosel.style';

interface CarrosselProps {
  images: string[];
}

const Carrossel: React.FC<CarrosselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    customPaging: (i: number) => <Dot />,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <CarouselImage src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carrossel;