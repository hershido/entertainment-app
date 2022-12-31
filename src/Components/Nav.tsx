import React from 'react';
import styled from 'styled-components';

import { Flex } from '../Containers/Flex';
import Logo from '../Icons/logo.svg';

import Avatar from '../Atoms/Avatar';
import { NavIcon } from '../Atoms/NavIcon';
import { IconNavBookmark, IconNavHome, IconNavMovies, IconNavTvSeries } from '../IconComponents';

const StyledNav = styled(Flex)`
   position: sticky;
   top: 32px;
   .logo {
      width: 32px;
      height: 25px;
   }
   .avatar {
      margin-top: auto;
   }
   width: 96px;
   padding: 32px;
   border-radius: 20px;
   height: calc(100vh - 64px);
   background-color: ${({ theme }) => theme.colors.blue.semiDark};
`;

const Nav = () => {
   return (
      <StyledNav direction='column' alignItems='center' gap='75px'>
         <img className='logo' src={Logo} alt='' />
         <Flex direction='column' justifyContent='space-between' alignItems='center' gap='40px'>
            <NavIcon Svg={IconNavHome} />
            <NavIcon Svg={IconNavMovies} />
            <NavIcon Svg={IconNavTvSeries} />
            <NavIcon Svg={IconNavBookmark} />
         </Flex>
         <Avatar src='image-avatar.png' className='avatar' />
      </StyledNav>
   );
};

export default Nav;
