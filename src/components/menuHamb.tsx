import React from "react";
import { HambNav, Elemento, InicioHamb, SairElemento } from "./menuHamb.style";

interface MenuHambProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const MenuHamb: React.FC<MenuHambProps> = ({ isOpen, toggleMenu }) => {
    const user = require('../assets/user.png');
    return (
        <>
            {isOpen && (
                <HambNav>
                    <InicioHamb>
                        <img src={user} alt="user" />
                        <h3>Usuário</h3>
                    </InicioHamb>
                    <Elemento>Editar dados</Elemento>
                    <Elemento>Meus pedidos</Elemento>
                    <Elemento>Meus produtos</Elemento>
                    <Elemento>Meu carrinho</Elemento>
                    <SairElemento onClick={toggleMenu}>Sair</SairElemento>
                </HambNav>
            )}
        </>
    );
}

export default MenuHamb;
