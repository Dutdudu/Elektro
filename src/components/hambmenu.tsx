// src/components/HamburgerMenu.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  padding: 1rem;
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

interface MenuLinksProps {
  open: boolean;
}

const MenuLinks = styled.ul<MenuLinksProps>`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background: #333;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }
`;

const MenuLink = styled.li`
  margin: 0 1rem;
  color: #fff;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <div>Logo</div>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} color="#fff" /> : <FaBars size={30} color="#fff" />}
      </HamburgerIcon>
      <MenuLinks open={isOpen}>
        <MenuLink>Home</MenuLink>
        <MenuLink>About</MenuLink>
        <MenuLink>Services</MenuLink>
        <MenuLink>Contact</MenuLink>
      </MenuLinks>
    </Nav>
  );
};

export default HamburgerMenu;
