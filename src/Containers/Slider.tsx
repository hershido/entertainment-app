import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`
   width: 100%;
   height: 230px;
   overflow-x: scroll;
   
   &::-webkit-scrollbar {
      display: none;
   }
`;

const StyledInnerSlider = styled.div`
   display: grid;
   grid-auto-flow: column;
   grid-auto-columns: 470px;
   gap: 40px;
   width: max-content;
`;

interface SliderProps {
   children: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
   return (
      <StyledSlider>
         <StyledInnerSlider>{children}</StyledInnerSlider>
      </StyledSlider>
   );
};

export default Slider;
