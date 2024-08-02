import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import CaixaProduto from './caixaProduto';

// Import Swiper styles


// Import required modules
import { Navigation } from 'swiper/modules';


import { Carrossel2 } from './carrossel2.style';

const produtos = [
  {
    imagem: require('../assets/fotoquad5.png'), // Verifique o caminho da imagem
    nome: 'Smartphone',
    preco: 'R$3200,00',
  },
  {
    imagem: require('../assets/fotoquad6.png'), // Verifique o caminho da imagem
    nome: 'Smartwatch',
    preco: 'R$900,00',
  },
  {
    imagem: require('../assets/313.png'), // Verifique o caminho da imagem
    nome: 'Mouse',
    preco: 'R$50,00',
  },
  {
    imagem: require('../assets/314.png'), // Verifique o caminho da imagem
    nome: 'Fone',
    preco: 'R$50,00',
  },
  {
    imagem: require('../assets/315.png'), // Verifique o caminho da imagem
    nome: 'Caixa som',
    preco: 'R$300,00',
  },
  // Adicione mais produtos conforme necessário
];

function CarrosselProdutos3() {
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

export default CarrosselProdutos3;