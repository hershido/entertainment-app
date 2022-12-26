import React, { ReactElement, ReactNode, SVGProps, useState } from 'react';
import { theme } from '../theme/theme';
import styled from 'styled-components';

export const navIconStates = {
   IDLE: theme.colors.blue.greyish,
   HOVERED: theme.colors.red.main,
   ACTIVE: theme.colors.white.full,
};

const StyledNavIcon = styled.div`
   cursor: pointer;
`;

export const NavIcon: React.FC<{
   children?: ReactElement;
   Svg: React.FC<SVGProps<SVGSVGElement>>;
}> = ({ children, Svg }) => {
   const [navIconState, setNavIconState] = useState(navIconStates.IDLE);

   return (
      <StyledNavIcon
         onMouseEnter={() =>
            navIconState !== navIconStates.ACTIVE && setNavIconState(navIconStates.HOVERED)
         }
         onMouseLeave={() =>
            navIconState !== navIconStates.ACTIVE && setNavIconState(navIconStates.IDLE)
         }
         onClick={() =>
            setNavIconState(
               navIconState === navIconStates.IDLE || navIconStates.HOVERED ? navIconStates.ACTIVE : navIconStates.IDLE
            )
         }>
         <Svg fill={navIconState} />
      </StyledNavIcon>
   );
};
