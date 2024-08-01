import { BarraSup } from "./barraSuperior.style";
import { FaBars } from 'react-icons/fa';
import MenuHamb from "./menuHamb";
import React, { useState } from 'react';

const BarraSuperior: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const pesquisa = require('../assets/Icon.png');
    const carrinho = require('../assets/carrinho.png');

    return (
        <>
            <BarraSup>
                <FaBars size={30} color="#fff" onClick={toggleMenu} />
                <img src={pesquisa} alt="pesquisa" />
                <a href="/erro"><img src={carrinho} alt="carrinho" /></a>
            </BarraSup>
            <MenuHamb isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
    );
}

export default BarraSuperior;
