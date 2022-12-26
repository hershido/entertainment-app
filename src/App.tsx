import React from 'react';
import { ThemeProvider } from 'styled-components';
import Nav from './Components/Nav';
import { ProgramCard } from './Components/ProgramCard';
import Body from './Containers/Body';
import { CardGrid } from './Containers/CardGrid';
import Slider from './Containers/Slider';
import { theme } from './theme/theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Body>
            <Slider>
               <ProgramCard
                  cardType='trending'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='trending'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='trending'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='trending'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='trending'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='trending'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='trending'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
            </Slider>

            <CardGrid>
               <ProgramCard
                  cardType='card-grid'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='card-grid'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='card-grid'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='card-grid'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='card-grid'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='card-grid'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='card-grid'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='card-grid'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
               <ProgramCard
                  cardType='card-grid'
                  programTitle='Shooko'
                  programType='Movie'
                  rating='PG-13'
                  thumbnail='large.jpg'
                  year='2019'
               />
            </CardGrid>
         </Body>
      </ThemeProvider>
   );
}

export default App;
