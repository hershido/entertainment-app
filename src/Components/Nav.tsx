import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Flex, StyledFlex } from '../Containers/Flex';
import Logo from '../Icons/logo.svg';

import Avatar from '../Atoms/Avatar';
import { NavIcon } from '../Atoms/NavIcon';
import { IconNavBookmark, IconNavHome, IconNavMovies, IconNavTvSeries } from '../IconComponents';
import { isConstructorDeclaration } from 'typescript';

const StyledNav = styled(StyledFlex)<{ isHeaderScrolled: boolean }>`
   .logo {
      width: 32px;
      height: 25px;
   }
   border-radius: 20px;
   background-color: ${({ theme }) => theme.colors.blue.semiDark};
   position: sticky;

   @media screen and (min-width: 1025px) {
      padding: 32px;
      margin-left: 32px;
      width: 96px;
      height: calc(100vh - 64px);
      flex-direction: column;
      top: 32px;
      .category-selection {
         flex-direction: column;
      }
      .avatar {
         margin-top: auto;
      }
   }
   @media screen and (min-width: 751px) and (max-width: 1024px) {
      top: ${(props) => (props.isHeaderScrolled ? '0px' : '24px')};
      flex-direction: row;
      padding: 24px;
      margin: ${(props) => (props.isHeaderScrolled ? '0px' : '24px 24px 0 24px')};
      border-radius: ${(props) => (props.isHeaderScrolled ? '0px' : '20px')};
      filter: ${(props) => (props.isHeaderScrolled && 'drop-shadow(5px 5px 10px #000)')};
      .avatar {
         margin-left: auto;
      }
      transition: all 0.5s;
   }
`;

const Nav: React.FC<{ className: string }> = ({ className }) => {
   const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

   const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 200 ? true : false);
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <StyledNav
         isHeaderScrolled={isHeaderScrolled}
         className={className}
         alignItems='center'
         gap='75px'>
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
