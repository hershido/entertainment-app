import React from 'react';
import styled from 'styled-components';
import MovieCategory from '../Icons/icon-category-movie.svg';
import { Program } from '../types/program';

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

   @media screen and (max-width: 750px) {
      p {
         font-size: 12px;
      }
   }
`;

interface CardInfoProps extends Pick<Program, 'category' | 'year' | 'rating'> {}

export const CardInfo: React.FC<CardInfoProps> = ({ category, year, rating }) => {
   return (
      <StyledCardInfo>
         <p>{year}</p>
         <div className='dot'></div>
         <img src={MovieCategory} alt='' />
         <p>{category}</p>
         <div className='dot'></div>
         <p>{rating}</p>
      </StyledCardInfo>
   );
};
