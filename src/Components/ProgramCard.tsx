import { useState } from 'react';
import styled from 'styled-components';
import { Bookmark } from '../Atoms/Bookmark';
import { Heading } from '../Atoms/Heading';
import { CardInfo } from './CardInfo';
import { PlayButton } from './PlayButton';
import { Thumbnail } from './Thumbnail';

export const StyledProgramCard = styled.div<{ cardType: 'card-grid' | 'trending' }>`
   display: grid;
   grid-template-rows: ${({ cardType }) => (cardType === 'trending' ? '230px' : '174px auto')};
   .thumbnail,
   .play-button {
      grid-area: 1/1/2/2;
   }
   .card-info {
      grid-area: ${({ cardType }) => (cardType === 'trending' ? '1/1/2/2' : '2/1/3/2 ')};
      align-self: ${({ cardType }) => cardType === 'trending' && 'end'};
      margin: ${({ cardType }) => cardType === 'trending' && '0px 0px 24px 24px'};
   }
   .play-button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.blue.darkHalfTransparent};
      grid-area: 1/1/2/2;
   }
`;

interface ProgramCardProps {
   programTitle: string;
   programType: 'Movie' | 'Series';
   year: string;
   rating: 'PG' | 'PG-13' | 'R';
   thumbnail: string;
   cardType: 'card-grid' | 'trending';
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
   programTitle,
   programType,
   year,
   thumbnail,
   rating,
   cardType,
}) => {
   const [isHovered, setIsHovered] = useState(false);
   return (
      <StyledProgramCard
         cardType={cardType}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
         <Thumbnail className='thumbnail' thumbnail={thumbnail} />
         {isHovered && (
            <div className='play-button'>
               <PlayButton />
            </div>
         )}
         <Bookmark />
         <div className='card-info'>
            <CardInfo programType={programType} year={year} rating={rating} />
            <Heading size={cardType === 'trending' ? 'S' : 'XS'}>{programTitle}</Heading>
         </div>
      </StyledProgramCard>
   );
};
