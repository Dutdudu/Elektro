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
                    <a href="/erro"><Elemento>Editar dados</Elemento></a>
                    <a href="/erro"> <Elemento>Meus pedidos</Elemento></a>
                    <a href="/erro"><Elemento>Meus produtos</Elemento></a>
                    <a href="/erro"><Elemento>Meu carrinho</Elemento></a>
                    <SairElemento onClick={toggleMenu}>Sair</SairElemento>
                </HambNav>
            )}
        </>
    );
}

export default MenuHamb;
