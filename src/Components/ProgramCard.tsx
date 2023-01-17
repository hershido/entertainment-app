import { useState } from 'react';
import styled from 'styled-components';
import { Bookmark } from '../atoms/Bookmark';
import { Heading } from '../atoms/Heading';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { Program } from '../types/program';
import { CardInfo } from './CardInfo';
import { PlayButton } from './PlayButton';
import { Thumbnail } from './Thumbnail';

export const StyledProgramCard = styled.div<{ isTrending: Boolean }>`
   display: grid;
   grid-template-rows: ${({ isTrending }) => isTrending && '230px'};
   .thumbnail,
   .play-button {
      grid-area: 1/1/2/2;
   }
   .card-info {
      grid-area: ${({ isTrending }) => (isTrending ? '1/1/2/2' : '2/1/3/2 ')};
      align-self: ${({ isTrending }) => isTrending && 'end'};
      margin: ${({ isTrending }) => isTrending && '0px 0px 24px 24px'};
   }
   .play-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.blue.darkHalfTransparent};
      grid-area: 1/1/2/2;
   }

   @media screen and (max-width: 750px) {
      grid-template-rows: ${({ isTrending }) => isTrending && '140px'};
      .card-info {
         margin: ${({ isTrending }) => isTrending && '0px 0px 16px 16px'};
      }
   }
`;

interface ProgramCardProps extends Program {}

export const ProgramCard: React.FC<ProgramCardProps> = ({
   title,
   category,
   year,
   thumbnail,
   rating,
   isTrending,
}) => {
   const [isHovered, setIsHovered] = useState(false);
   const breakpoint = useBreakpoint();
   return (
      <StyledProgramCard
         isTrending={isTrending}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
         <Thumbnail className='thumbnail' thumbnail={thumbnail} isTrending={isTrending} />
         {isHovered && (
            <div className='play-button'>
               <PlayButton />
            </div>
         )}
         <Bookmark />
         <div className='card-info'>
            <CardInfo category={category} year={year} rating={rating} />
            {breakpoint !== 'mobile' ? (
               <Heading size={isTrending ? 'S' : 'XS'}>{title}</Heading>
            ) : (
               <p>{title}</p>
            )}
         </div>
      </StyledProgramCard>
   );
};
