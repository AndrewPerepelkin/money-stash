import React from 'react';
import StyledNavLink from '../StyledNavLink';
import NavBarDropdown from './NavBarDropdown';
import NavBarLinkList from './NavBarLinkList';
import NavBarLogo from './NavBarLogo';
import NavBarWrapper from './NavBarWrapper';

const NavBar = () => {
  const isLoggedIn = false;
  return (
    <NavBarWrapper>
      <NavBarLogo
        link='/'
        src='/assets/img/s-logo.png'
        label='Money Stash'
      />
      <NavBarLinkList>
        {isLoggedIn ? (
          <>
            <StyledNavLink to='/income'>Счета</StyledNavLink>
            <StyledNavLink to='/expenses'>Расходы</StyledNavLink>
            <NavBarDropdown />
          </>
        ) : (
          <StyledNavLink
            to='/auth'
            styleType='button'
          >
            Регистрация
          </StyledNavLink>
        )}
      </NavBarLinkList>
    </NavBarWrapper>
  );
};

export default NavBar;
