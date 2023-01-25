import React from 'react';
import {useSelector} from 'react-redux';
import {isLoggedInSelector} from '../../store/authSlice';
import StyledNavLink from '../StyledNavLink';
import NavBarDropdown from './NavBarDropdown';
import NavBarLinkList from './NavBarLinkList';
import NavBarLogo from './NavBarLogo';
import NavBarWrapper from './NavBarWrapper';

const NavBar = () => {
  const isLoggedIn = useSelector(isLoggedInSelector());
  return (
    <NavBarWrapper>
      <NavBarLogo
        link={isLoggedIn ? '/main' : '/'}
        src='/assets/img/s-logo.png'
        label='Money Stash'
      />
      <NavBarLinkList>
        {isLoggedIn ? (
          <>
            <StyledNavLink to='/main/history'>История операций</StyledNavLink>
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
