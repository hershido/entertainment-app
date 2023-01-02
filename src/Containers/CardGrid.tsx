import styled from 'styled-components';

export const CardGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
   column-gap: 40px;
   row-gap: 32px;
   
   @media screen and (min-width: 751px) and (max-width: 1024px) {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      column-gap: 30px;
      row-gap: 24px;
   }
   @media screen and (max-width: 750px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      column-gap: 16px;
      row-gap: 16px;
   }
`;
