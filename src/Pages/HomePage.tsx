import styled from 'styled-components';
import { Heading } from '../atoms/Heading';
import Nav from '../components/Nav';
import { Search } from '../components/Search';
import { CardGrid } from '../containers/CardGrid';
import Slider from '../containers/Slider';
import { useBreakpoint } from '../hooks/useBreakpoint';
import { ProgramCard } from '../components/ProgramCard';
import { useProgramContext } from '../context/programContext';

const StyledHomePage = styled.div`
   position: relative;
   display: grid;

   width: 100%;

   .right-container {
      display: grid;
      overflow: hidden;
      row-gap: 32px;
   }

   @media screen and (min-width: 1025px) {
      gap: 32px;
      grid-auto-flow: column;
      grid-template-columns: max-content 1fr;

      .right-container {
         margin-top: 32px;
         margin-bottom: 32px;
      }

      .card-grid {
         margin: 0px 32px 0px 0px;
      }
   }
   @media screen and (min-width: 751px) and (max-width: 1024px) {
      gap: 24px;
      grid-auto-flow: row;
      .card-grid {
         margin: 0px 24px 0px 0px;
      }

      .right-container {
         margin-left: 24px;
         margin-bottom: 24px;
      }
   }
   @media screen and (max-width: 750px) {
      gap: 16px;
      grid-auto-flow: row;
      .card-grid {
         margin: 0px 16px 0px 0px;
      }

      .right-container {
         gap: 20px;
         margin-left: 16px;
         margin-bottom: 16px;
      }
   }
`;

const HomePage = () => {
   const breakpoint = useBreakpoint();
   const { trendingPrograms, regularPrograms } = useProgramContext();

   return (
      <StyledHomePage>
         <Nav className='nav' />
         <div className='right-container'>
            <Search />
            <Heading size={breakpoint === 'mobile' ? 'M' : 'L'}>Trending</Heading>
            <Slider>
               {trendingPrograms &&
                  trendingPrograms.map((program) => {
                     return <ProgramCard key={program.id} {...program} />;
                  })}
            </Slider>
            <Heading size={breakpoint === 'mobile' ? 'M' : 'L'}>Recommended for you</Heading>
            <CardGrid className='card-grid'>
               {regularPrograms &&
                  regularPrograms.map((program) => {
                     return <ProgramCard key={program.id} {...program} />;
                  })}
            </CardGrid>
         </div>
      </StyledHomePage>
   );
};

export default HomePage;
