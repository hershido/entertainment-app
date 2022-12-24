import styled from 'styled-components';
import { Heading } from '../Atoms/Heading';
import { CardInfo } from './CardInfo';
import { Thumbnail } from './Thumbnail';

export const StyledMovieCard = styled.div`
   display: grid;
   /* width:280px; */
   /* border:1px solid green; */
  
`;

interface ProgramCardProps {
   programTitle: string;
   programType: 'Movie' | 'Series';
   year: string;
   rating:'PG' | 'PG-13' | 'R',
   thumbnail: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
   programTitle,
   programType,
   year,
   thumbnail,
   rating
}) => {
   return (
      <StyledMovieCard>
         <Thumbnail thumbnail={thumbnail}/>
         <CardInfo  programType={programType} year={year} rating={rating}/>
         <Heading size='XS'>{programTitle}</Heading>
      </StyledMovieCard>
   );
};
