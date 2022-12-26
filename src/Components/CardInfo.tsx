import React from 'react';
import styled from 'styled-components';
import MovieCategory from '../Icons/icon-category-movie.svg';

const StyledCardInfo = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   margin-top: 8px;
   margin-bottom: 5px;
   p {
      color: ${({ theme }) => theme.colors.white.threeQuarters};
   }
   .dot {
      height: 3px;
      width: 3px;
      background-color: ${({ theme }) => theme.colors.white.threeQuarters};
      border-radius: 50%;
   }
`;

interface CardInfoProps {
   programType: 'Movie' | 'Series';
   year: string;
   rating: 'PG' | 'PG-13' | 'R';
}

export const CardInfo: React.FC<CardInfoProps> = ({programType, year, rating}) => {
   return (
      <StyledCardInfo>
         <p>{year}</p>
         <div className='dot'></div>
         <img src={MovieCategory} alt='' />
         <p>{programType}</p>
         <p>{rating}</p>
      </StyledCardInfo>
   );
};
