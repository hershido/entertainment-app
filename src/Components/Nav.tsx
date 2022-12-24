import React from 'react';
import styled from 'styled-components';
import NavIcon from '../Atoms/NavIcon';
import { Flex } from '../Containers/Flex';
import Logo from '../Icons/logo.svg';
import HomeNavIcon from '../Icons/icon-nav-home.svg';
import MoviesNavIcon from '../Icons/icon-nav-movies.svg';
import SeriesNavIcon from '../Icons/icon-nav-tv-series.svg';
import BookmarkNavIcon from '../Icons/icon-nav-bookmark.svg';
import Avatar from '../Atoms/Avatar';

const StyledNav = styled(Flex)`
   .logo {
      width: 32px;
      height: 25px;
   }
   .avatar {
      margin-top: auto;
   }
   width:96px;
   padding: 32px;
   border-radius: 20px;
   height: 100vh;
   background-color: ${({ theme }) => theme.colors.blue.semiDark};
`;

const Nav = () => {
   return (
      <StyledNav direction='column' alignItems='center' gap='75px'>
         <img className='logo' src={Logo} alt='' />
         <Flex direction='column' justifyContent='space-between' alignItems='center' gap='40px'>
            <NavIcon src={HomeNavIcon} />
            <NavIcon src={MoviesNavIcon} />
            <NavIcon src={SeriesNavIcon} />
            <NavIcon src={BookmarkNavIcon} />
         </Flex>
         <Avatar src='image-avatar.png' className='avatar' />
      </StyledNav>
   );
};

export default Nav;
