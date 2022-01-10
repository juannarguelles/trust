import React from 'react';
import {
  Header,
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElement';
import logo from '../../images/logo/logo.svg';

const Navbar = () => {
  return (
    <>
      <Header>
        <Nav>
          <NavLink to='/'>
            <img src={logo} alt='trust fund' />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/nosotros' activeStyle>
              NOSOTROS
            </NavLink>
            <NavLink to='/garantia' activeStyle>
              GARANTÍA
            </NavLink>
            <NavLink to='/requisitos' activeStyle>
              REQUISITOS
            </NavLink>
            <NavLink to='/calculador' activeStyle>
              SIMULÁ TÚ GARANTÍA
            </NavLink>
            <NavLink to='/propietarios' activeStyle>
              PROPIETARIOS
            </NavLink>
            <NavLink to='/contacto' activeStyle>
              CONTACTO
            </NavLink>
          </NavMenu>
        </Nav>
      </Header>
    </>
  );
};

export default Navbar;