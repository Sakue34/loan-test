import React from 'react'
import {Nav, NavLink, HamburgerIcon,Icon, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import loanlyLogo from '../../images/loanlyWhiteLogo.svg';
const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to='/'>
                <img src={loanlyLogo} alt="Loanly logo" width="120px" height="auto"/>
            </NavLink>
            <Icon onClick={toggle}>
                <HamburgerIcon />
            </Icon>
            <NavMenu>
                <NavBtn>
                    <NavBtnLink to="/kalkulator">Kalkulator</NavBtnLink>
                </NavBtn>
                <NavLink to="/jak-obliczamy-rate">Jak obliczamy ratę?</NavLink>
                <NavLink to="/przydatne-pojecia">Przydatne pojecia</NavLink>
            </NavMenu>

        </Nav>
    </>
  );
};

export default Navbar;
