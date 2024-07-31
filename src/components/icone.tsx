import React from 'react';
import { Icon } from './icone.style';
import { Texto } from './icone.style';
import { Img } from './icone.style';
interface IconeProps {
  image: string;
  texto: string;
}

const Icone: React.FC<IconeProps> = ({ image, texto }) => {
  return (
    <Icon>
      <Img src={image} alt={texto} />
      <Texto>{texto}</Texto>
    </Icon>
  );
};

export default Icone;
