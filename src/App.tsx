import { ThemeProvider } from 'styled-components';
import Body from './containers/Body';
import {FormPage} from './Pages/FormPage';
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
