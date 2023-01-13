import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './containers/Body';
import { SignUp } from './Pages/SignUp';
import HomePage from './Pages/HomePage';
import { theme } from './theme/theme';
import { Login } from './Pages/Login';
import { AuthProvider } from './context/authContext';
import { PrivateRoute } from './PrivateRoute';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Body>
            <AuthProvider>
               <BrowserRouter>
                  <Routes>
                     <Route
                        path='/'
                        element={
                           <PrivateRoute>
                              <HomePage />
                           </PrivateRoute>
                        }
                     />
                     <Route path='/signup' element={<SignUp />} />
                     <Route path='/login' element={<Login />} />
                  </Routes>
               </BrowserRouter>
            </AuthProvider>
         </Body>
      </ThemeProvider>
   );
}

export default App;
