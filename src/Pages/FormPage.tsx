import React, { useRef } from 'react';
import styled from 'styled-components';
import BodyText from '../atoms/BodyText';
import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Input } from '../atoms/Input';
import Box from '../containers/Box';
import { Flex } from '../containers/Flex';
import Logo from '../Icons/logo.svg';
import { signInUser, createUser } from '../firebase/firebaseConfig';
import { Link } from 'react-router-dom';

const StyledFormPage = styled(Flex)`
   img {
      margin-top: 72px;
   }
   h1 {
      margin-bottom: 16px;
   }

   button {
      margin-top: 16px;
   }
`;

export const FormPage: React.FC<{ type: 'login' | 'signup' }> = ({ type }) => {
   const emailInput = useRef<HTMLInputElement>(null);
   const passwordInput = useRef<HTMLInputElement>(null);
   const repeatPasswordInput = useRef<HTMLInputElement>(null);

   const handleFormSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();

      const email = emailInput.current?.value;
      const password = passwordInput.current?.value;
      console.log(email, password);
      // You can now use the email and password values as needed
      if (email && password) {
         console.log('submit');
         createUser(email, password);
      }
   };

   return (
      <StyledFormPage direction='column' alignItems='center' gap='82px'>
         <img src={Logo} alt='' />
         <Box width='400px'>
            <form onSubmit={handleFormSubmit}>
               <Flex direction='column' alignItems='stretch' gap='24px'>
                  <Heading>{type === 'login' ? 'Login' : 'Signup'}</Heading>
                  <Input placeholder='Email address' type='email' ref={emailInput} />
                  <Input placeholder='Password' type='password' ref={passwordInput} />
                  {type === 'signup' && (
                     <Input
                        placeholder='Repeat password'
                        type='password'
                        ref={repeatPasswordInput}
                     />
                  )}
                  <Button width='100%'>
                     {type === 'login' ? 'Login to your account' : 'Create an account'}{' '}
                  </Button>
                  <Flex justifyContent='center' gap='9px'>
                     <BodyText size='M'>
                        {type === 'login' ? 'Don’t have an account?' : 'Already have an account?'}
                     </BodyText>
                     <Link to={type === 'login' ? '/signup' : '/login'}>
                        <BodyText asButton className='redirect-cta' size='M'>
                           {type === 'login' ? 'Sign up' : 'Log in'}
                        </BodyText>
                     </Link>
                  </Flex>
               </Flex>
            </form>
         </Box>
      </StyledFormPage>
   );
};
