import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`
   width: 100%;
   border-radius: 8px 0 0 8px;
   overflow-x: auto;
   &::-webkit-scrollbar {
      display: none;
   }
`;

const StyledInnerSlider = styled.div`
   overflow-x: auto;
   scroll-snap-type: x mandatory;
   height: 230px;
   display: grid;
   grid-auto-flow: column;
   grid-auto-columns: 470px;
   gap: 40px;
   width: max-content;

   @media screen and (max-width: 750px) {
      gap: 16px;
      height: 140px;
      grid-auto-columns: 240px;
   }
`;

interface SliderProps {
   children?: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
   return (
      <StyledSlider>
         <StyledInnerSlider>{children}</StyledInnerSlider>
      </StyledSlider>
   );
};

export default Slider;
