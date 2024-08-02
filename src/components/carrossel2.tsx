import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import CaixaProduto from './caixaProduto';

// Import Swiper styles


// Import required modules
import { Navigation } from 'swiper/modules';
import { Carrossel2 } from './carrossel2.style';

const produtos = [
  {
    imagem: require('../assets/fotoquad1.png'), // Verifique o caminho da imagem
    nome: 'Celular',
    preco: 'R$800,00',
  },
  {
    imagem: require('../assets/fotoquad2.png'), // Verifique o caminho da imagem
    nome: 'Capa',
    preco: 'R$20,00',
  },
  {
    imagem: require('../assets/13.png'), // Verifique o caminho da imagem
    nome: 'Carregador',
    preco: 'R$50,00',
  },
  {
    imagem: require('../assets/14.png'), // Verifique o caminho da imagem
    nome: 'Mousepad',
    preco: 'R$60,00',
  },
  {
    imagem: require('../assets/15.png'), // Verifique o caminho da imagem
    nome: 'Teclado',
    preco: 'R$120,00',
  },
  // Adicione mais produtos conforme necessário
];

function CarrosselProdutos() {
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

export default CarrosselProdutos;
