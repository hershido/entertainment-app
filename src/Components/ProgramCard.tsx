import { useState } from 'react';
import styled from 'styled-components';
import { Bookmark } from '../atoms/Bookmark';
import { Heading } from '../atoms/Heading';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { Program } from '../types/program';
import { CardInfo } from './CardInfo';
import { PlayButton } from './PlayButton';
import { Thumbnail } from './Thumbnail';

export const StyledProgramCard = styled.div<{ isRenderedInTrending?: Boolean }>`
   display: grid;

   .thumbnail,
   .play-button {
      grid-area: 1/1/2/2;
   }
   .card-info {
      grid-area: ${({ isRenderedInTrending }) => (isRenderedInTrending ? '1/1/2/2' : '2/1/3/2 ')};
      align-self: ${({ isRenderedInTrending }) => isRenderedInTrending && 'end'};
      margin: ${({ isRenderedInTrending }) => isRenderedInTrending && '0px 0px 24px 24px'};
   }
   .play-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.blue.darkHalfTransparent};
      grid-area: 1/1/2/2;
   }

   @media screen and (min-width: 1025px) {
      grid-template-rows: ${({ isRenderedInTrending }) =>
         isRenderedInTrending ? '230px' : '174px max-content'};
   }

   @media screen and (min-width: 751px) and (max-width: 1024px) {
      grid-template-rows: ${({ isRenderedInTrending }) =>
         isRenderedInTrending ? '230px' : '160px max-content'};
   }

   @media screen and (max-width: 750px) {
      grid-template-rows: ${({ isRenderedInTrending }) => isRenderedInTrending && '140px'};
      .card-info {
         margin: ${({ isRenderedInTrending }) => isRenderedInTrending && '0px 0px 16px 16px'};
      }
   }
`;

interface ProgramCardProps extends Program {
   isRenderedInTrending?: boolean;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
   title,
   category,
   year,
   thumbnail,
   rating,
   id,
   isRenderedInTrending,
}) => {
   const [isHovered, setIsHovered] = useState(false);
   const breakpoint = useBreakpoint();
   return (
      <StyledProgramCard
         isRenderedInTrending={isRenderedInTrending}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
         <Thumbnail
            className='thumbnail'
            thumbnail={thumbnail}
            isRenderedInTrending={isRenderedInTrending}
         />
         {isHovered && (
            <div className='play-button'>
               <PlayButton />
            </div>
         )}
         <Bookmark programId={id} />
         <div className='card-info'>
            <CardInfo category={category} year={year} rating={rating} />
            {breakpoint !== 'mobile' ? (
               <Heading size={isRenderedInTrending ? 'S' : 'XS'}>{title}</Heading>
            ) : (
               <p>{title}</p>
            )}
         </div>
      </StyledProgramCard>
   );
};
