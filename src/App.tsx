import React from 'react';
import { ThemeProvider } from 'styled-components';
import Nav from './Components/Nav';
import { ProgramCard } from './Components/ProgramCard';
import Body from './Containers/Body';
import { CardGrid } from './Containers/CardGrid';
import Slider from './Containers/Slider';
import HomePage from './Pages/HomePage';
import { theme } from './theme/theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Body>
            <HomePage/>
         </Body>
      </ThemeProvider>
   );
}

export default App;
