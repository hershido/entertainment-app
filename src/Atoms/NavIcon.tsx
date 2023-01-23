import React, { SVGProps, useEffect, useState } from 'react';
import { theme } from '../theme/theme';
import styled from 'styled-components';
import { HompageState } from '../consts/hompageStates';
import { useProgramContext } from '../context/programContext';

export const navIconStates = {
   IDLE: theme.colors.blue.greyish,
   HOVERED: theme.colors.red.main,
   ACTIVE: theme.colors.white.full,
};

const StyledNavIcon = styled.div`
   cursor: pointer;
`;

export const NavIcon: React.FC<{
   Svg: React.FC<SVGProps<SVGSVGElement>>;
   state: HompageState;
}> = ({ Svg, state }) => {
   const [navIconState, setNavIconState] = useState(navIconStates.IDLE);
   const { homepageState, setHompageState } = useProgramContext();

   useEffect(() => {
      homepageState === state
         ? setNavIconState(navIconStates.ACTIVE)
         : setNavIconState(navIconStates.IDLE);
   }, [homepageState, state]);

   return (
      <StyledNavIcon
         onMouseEnter={() =>
            navIconState !== navIconStates.ACTIVE && setNavIconState(navIconStates.HOVERED)
         }
         onMouseLeave={() =>
            navIconState !== navIconStates.ACTIVE && setNavIconState(navIconStates.IDLE)
         }
         onClick={() => setHompageState(state)}>
         <Svg fill={navIconState} />
      </StyledNavIcon>
   );
};
