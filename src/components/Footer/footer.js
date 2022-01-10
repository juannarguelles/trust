import React from 'react';
import {
    Face,
    Insta,
    In,
    Nav,
    NavLink,
    NavMenu,
    Social
  } from './style';

const Footer = () => {
    return (
        <>
        <Nav>
          <NavMenu>
            <NavLink to='/' activeStyle>
              INICIO
            </NavLink>
            <NavLink to='/nosotros' activeStyle>
              NOSOTROS
            </NavLink>
            <NavLink to='/calculador' activeStyle>
              SIMULÁ TU GARANTÍA
            </NavLink>
            <NavLink to='/propietarios' activeStyle>
              PROPIETARIOS
            </NavLink>
            <NavLink to='/preguntas-frecuentes' activeStyle>
              FAQ's
            </NavLink>
          </NavMenu>
          <div>
          <Social>
            Seguinos en las redes:
          </Social>
            <a href="https://www.facebook.com/garantiastrustfund/?ref=pages_you_manage">
                <Face/>
            </a>
            <a href="https://www.instagram.com/trustfund.garantias/">
                <Insta/>
            </a>
            <a href="https://www.linkedin.com/company/trust-fund-garant%C3%ADas/">
                <In/>
            </a>
          </div>
        </Nav>

      </>
            
    )
}

export default Footer