import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Atoms/Heading';
import Nav from '../Components/Nav';
import { ProgramCard } from '../Components/ProgramCard';
import { Search } from '../Components/Search';
import { CardGrid } from '../Containers/CardGrid';
import Slider from '../Containers/Slider';

const StyledHomePage = styled.div`
   position: relative;
   display: grid;

   width: 100%;
   padding: 32px;
   gap: 32px;

   .right-container {
      display: grid;
      width: 100%;
      overflow: hidden;
      row-gap: 32px;
   }

   @media screen and (min-width: 1025px) {
      grid-auto-flow: column;
      grid-template-columns: max-content 1fr;
   }
   @media screen and (min-width: 751px) and (max-width: 1024px) {
      grid-auto-flow: row;
      /* grid-template-columns: max-content 1fr; */
   }
`;

const HomePage = () => {
   return (
      <StyledHomePage>
         <Nav className='nav' />
         <div className='right-container'>
            <Search />
            <Heading>Trending</Heading>
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
            <Heading>Recommended for you</Heading>
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
         </div>
      </StyledHomePage>
   );
};

export default HomePage;
