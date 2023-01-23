import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const StyledCardGrid = styled.div<{ itemsLength: Number | undefined }>`
   display: grid;
   grid-template-columns: repeat(
      auto-fit,
      minmax(280px, ${({ itemsLength }) => (itemsLength && itemsLength <= 4 ? '280px' : '1fr')})
   );
   grid-auto-rows: max-content;
   column-gap: 40px;
   row-gap: 32px;

   @media screen and (min-width: 751px) and (max-width: 1024px) {
      grid-template-columns: repeat(
         auto-fit,
         minmax(280px, ${({ itemsLength }) => (itemsLength && itemsLength <= 4 ? '280px' : '1fr')})
      );
      column-gap: 30px;
      row-gap: 24px;
   }
   @media screen and (max-width: 750px) {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      column-gap: 16px;
      row-gap: 16px;
   }
`;

export const CardGrid: React.FC<{
   children: ReactNode | ReactNode[];
   itemsLength: Number | undefined;
   className: string;
}> = ({ children, itemsLength, className }) => (
   <StyledCardGrid className={className} itemsLength={itemsLength}>
      {children}
   </StyledCardGrid>
);
