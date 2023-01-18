import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Flex, StyledFlex } from '../containers/Flex';
import Logo from '../Icons/logo.svg';

import Avatar from '../atoms/Avatar';
import { NavIcon } from '../atoms/NavIcon';
import { IconNavBookmark, IconNavHome, IconNavMovies, IconNavTvSeries } from '../iconComponents';
import { Button } from '../atoms/Button';
import { useAuth } from '../context/authContext';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { HOMEPAGE_STATES } from '../consts/hompageStates';

const StyledNav = styled(StyledFlex)<{ isHeaderScrolled: boolean }>`
   .logo {
      width: 32px;
      height: 25px;
   }
   border-radius: 20px;
   background-color: ${({ theme }) => theme.colors.blue.semiDark};
   position: sticky;
   .signout {
      width: max-content;
      padding: 0 10px;
   }

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
      .profile {
         margin-top: auto;
      }
   }
   @media screen and (min-width: 751px) and (max-width: 1024px) {
      top: ${(props) => (props.isHeaderScrolled ? '0px' : '24px')};
      flex-direction: row;
      justify-content: space-between;
      padding: 20px;
      margin: ${(props) => (props.isHeaderScrolled ? '0px' : '24px 24px 0 24px')};
      border-radius: ${(props) => (props.isHeaderScrolled ? '0px' : '20px')};
      filter: ${(props) => props.isHeaderScrolled && 'drop-shadow(5px 5px 10px #000)'};
      transition: all 0.5s;
   }

   @media screen and (max-width: 750px) {
      top: ${(props) => (props.isHeaderScrolled ? '0px' : '16px')};
      justify-content: space-between;
      border-radius: 0;
      padding: 20px;
      margin: 0;
      gap: 0;
      margin: ${(props) => (props.isHeaderScrolled ? '0px' : '16px 16px 0 16px')};
      border-radius: ${(props) => (props.isHeaderScrolled ? '0px' : '20px')};
      filter: ${(props) => props.isHeaderScrolled && 'drop-shadow(5px 5px 10px #000)'};
      transition: all 0.5s;
      .category-selection {
         gap: 30px;
      }
   }
`;

const Nav: React.FC<{ className: string }> = ({ className }) => {
   const { signOutUser, currentUser } = useAuth();
   const breakpoint = useBreakpoint();
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
            <NavIcon state={HOMEPAGE_STATES.HOME} Svg={IconNavHome} />
            <NavIcon state={HOMEPAGE_STATES.MOVIES} Svg={IconNavMovies} />
            <NavIcon state={HOMEPAGE_STATES.TV} Svg={IconNavTvSeries} />
            <NavIcon state={HOMEPAGE_STATES.BOOKMARKED} Svg={IconNavBookmark} />
         </Flex>
         <Flex
            alignItems='center'
            direction={breakpoint === 'desktop' ? 'column' : 'row'}
            gap='20px'
            className='profile'>
            <Button className='signout' onClick={signOutUser}>
               sign out
            </Button>
            <Avatar
               src={`https://robohash.org/${currentUser?.email}.png?set=set1&size=500x500`}
               className='avatar'
            />
         </Flex>
      </StyledNav>
   );
};

export default Nav;
