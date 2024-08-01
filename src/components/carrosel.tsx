import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { CarouselContainer, CarouselImage } from './carrosel.style';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

interface CarrosselProps {
  images: string[];
}

const Carrossel: React.FC<CarrosselProps> = ({ images }) => {
  return (
    <CarouselContainer>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        effect="fade"
        speed={500}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <CarouselImage src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};

export default Carrossel;
