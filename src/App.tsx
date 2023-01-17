import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './containers/Body';
import { SignUp } from './Pages/SignUp';
import HomePage from './Pages/HomePage';
import { theme } from './theme/theme';
import { Login } from './Pages/Login';
import { AuthProvider } from './context/authContext';
import { PrivateRoute } from './Routes/PrivateRoute';
import { FormRedirect } from './Routes/FormRedirect';


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
                     <Route
                        path='/signup'
                        element={
                           <FormRedirect>
                              <SignUp />
                           </FormRedirect>
                        }
                     />
                     <Route
                        path='/login'
                        element={
                           <FormRedirect>
                              <Login />
                           </FormRedirect>
                        }
                     />
                  </Routes>
               </BrowserRouter>
            </AuthProvider>
         </Body>
      </ThemeProvider>
   );
}

export default App;
