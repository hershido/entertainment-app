import React from 'react';
import styled from 'styled-components';

import { Flex, StyledFlex } from '../Containers/Flex';
import Logo from '../Icons/logo.svg';

import Avatar from '../Atoms/Avatar';
import { NavIcon } from '../Atoms/NavIcon';
import { IconNavBookmark, IconNavHome, IconNavMovies, IconNavTvSeries } from '../IconComponents';

const StyledNav = styled(StyledFlex)`
   .logo {
      width: 32px;
      height: 25px;
   }
   border-radius: 20px;
   background-color: ${({ theme }) => theme.colors.blue.semiDark};
   
   @media screen and (min-width: 1025px) {
      padding: 32px;
      width: 96px;
      height: calc(100vh - 64px);
      flex-direction: column;
      position: sticky;
      top: 32px;
      .category-selection {
         flex-direction: column;
      }
      .avatar {
         margin-top: auto;
      }
   }
   @media screen and (min-width: 751px) and (max-width: 1024px) {
      flex-direction: row;
      padding: 24px;
      .avatar {
         margin-left: auto;
      }
   }
`;

const Nav: React.FC<{ className: string }> = ({ className }) => {
   return (
      <StyledNav className={className} alignItems='center' gap='75px'>
         <img className='logo' src={Logo} alt='' />
         <Flex
            className='category-selection'
            justifyContent='space-between'
            alignItems='center'
            gap='40px'>
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
