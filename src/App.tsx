import React from 'react';
import { ThemeProvider } from 'styled-components';
import Nav from './components/Nav';
import { ProgramCard } from './components/ProgramCard';
import Body from './containers/Body';
import { CardGrid } from './containers/CardGrid';
import Slider from './containers/Slider';
import HomePage from './Pages/HomePage';
import { theme } from './theme/theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Body>
            <HomePage />
         </Body>
      </ThemeProvider>
   );
}

export default App;
