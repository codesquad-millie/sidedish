import React, { useState } from 'react';
import { Navbar, Menu, Icons, MenuBox, MainMenu, SubMenuList, SubMenu } from './Header.style.js';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as Login } from 'assets/login.svg';
import { ReactComponent as Cart } from 'assets/cart.svg';
import menuData from 'data/headerMenu.js';

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarOpen = () => {
    setIsNavbarOpen(true);
  };

  const handleNavbarClose = () => {
    setIsNavbarOpen(false);
  };

  return (
    <Navbar onMouseEnter={handleNavbarOpen} onMouseLeave={handleNavbarClose}>
      <Logo />
      <Menu>
        {menuData.map((v, i) => {
          return (
            <MenuBox key={i}>
              <MainMenu>{v.main}</MainMenu>
              <SubMenuList isOpen={isNavbarOpen}>
                {v.sub.map((name, i) => {
                  return <SubMenu key={i}>{name}</SubMenu>;
                })}
              </SubMenuList>
            </MenuBox>
          );
        })}
      </Menu>
      <Icons>
        <Search />
        <Login />
        <Cart />
      </Icons>
    </Navbar>
  );
};

export default Header;
