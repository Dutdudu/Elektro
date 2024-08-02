import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import CaixaProduto from './caixaProduto';

// Import Swiper styles


// Import required modules
import { Navigation } from 'swiper/modules';


import { Carrossel2 } from './carrossel2.style';

const produtos = [
  {
    imagem: require('../assets/fotoquad3.png'), // Verifique o caminho da imagem
    nome: 'Smart TV',
    preco: 'R$1400,00',
  },
  {
    imagem: require('../assets/fotoquad4.png'), // Verifique o caminho da imagem
    nome: 'Monitor',
    preco: 'R$750,00',
  },
  {
    imagem: require('../assets/213.png'), // Verifique o caminho da imagem
    nome: 'Headset',
    preco: 'R$250,00',
  },
  {
    imagem: require('../assets/214.png'), // Verifique o caminho da imagem
    nome: 'Tablet',
    preco: 'R$300,00',
  },
  {
    imagem: require('../assets/215.png'), // Verifique o caminho da imagem
    nome: 'Notebook',
    preco: 'R$900,00',
  },
  // Adicione mais produtos conforme necessário
];

function CarrosselProdutos2() {
  return (
    <Carrossel2>
      <Swiper
        modules={[Navigation]}
        
        slidesPerView={2}
       
      
      >
        {produtos.map((produto, index) => (
          <SwiperSlide key={index}>
            <CaixaProduto
              imagem={produto.imagem}
              nome={produto.nome}
              preco={produto.preco}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Carrossel2>
  );
}

export default CarrosselProdutos2;