import React from 'react';
import { ThemeProvider } from 'styled-components';
import Body from './Containers/Body';
import { theme } from './theme/theme';




function App() {
   return (
      <ThemeProvider theme={theme}>
         <Body>
         
         </Body>
      </ThemeProvider>
   );
}

export default App;
