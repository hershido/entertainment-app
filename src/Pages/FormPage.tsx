import React from 'react';
import styled from 'styled-components';
import BodyText from '../atoms/BodyText';
import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Input } from '../atoms/Input';
import Box from '../containers/Box';
import { Flex } from '../containers/Flex';
import Logo from '../Icons/logo.svg';

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

export const FormPage: React.FC<{ type: 'login' | 'signup' }> = ({type}) => {
   return (
      <StyledFormPage direction='column' alignItems='center' gap='82px'>
         <img src={Logo} alt='' />
         <Box width='400px'>
            <form>
               <Flex direction='column' alignItems='stretch' gap='24px'>
                  <Heading>{type==='login' ? 'Login' : 'Signup'}</Heading>
                  <Input placeholder='Email address' />
                  <Input placeholder='Password' />
                  {type==='signup'&&<Input placeholder='Repeat password' />}
                  <Button width='100%'>{type==='login'?'Login to your account':'Create an account'} </Button>
                  <Flex justifyContent='center' gap='9px'>
                     <BodyText size='M'>{type==='login'?"Don’t have an account?":'Already have an account?'}</BodyText>
                     <BodyText asButton className='redirect-cta' size='M'>
                        {type==='login'?'Sign up':'Log in'}
                     </BodyText>
                  </Flex>
               </Flex>
            </form>
         </Box>
      </StyledFormPage>
   );
};
