import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './containers/Body';
import { FormPage } from './Pages/FormPage';
import HomePage from './Pages/HomePage';
import { theme } from './theme/theme';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Body>
            <BrowserRouter>
               <Routes>
                  <Route path='/' element={<HomePage />}/>
                  <Route path='/login' element={<FormPage type='login' />} />
                  <Route path='/signup' element={<FormPage type='signup' />} />
               </Routes>
            </BrowserRouter>
         </Body>
      </ThemeProvider>
   );
}

export default App;
