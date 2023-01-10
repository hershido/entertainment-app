import styled from 'styled-components';
import BodyText from '../atoms/BodyText';
import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Input } from '../atoms/Input';
import Box from '../containers/Box';
import { Flex } from '../containers/Flex';
import Logo from '../Icons/logo.svg';
import { Link } from 'react-router-dom';
import { useValidateLogin } from '../hooks/useValidateLogin';

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

export const Login: React.FC = () => {
   const {
      emailValidation,
      passwordValidation,
      setEmailValidation,
      setPasswordValidation,
      handleFormSubmit,
      emailInput,
      passwordInput,
   } = useValidateLogin();

   return (
      <StyledFormPage direction='column' alignItems='center' gap='82px'>
         <img src={Logo} alt='' />
         <Box width='400px'>
            <form onSubmit={handleFormSubmit}>
               <Flex direction='column' alignItems='stretch' gap='24px'>
                  <Heading>Login</Heading>
                  <Input
                     validation={emailValidation}
                     setValidation={setEmailValidation}
                     placeholder='Email address'
                     type='email'
                     ref={emailInput}
                  />
                  <Input
                     validation={passwordValidation}
                     setValidation={setPasswordValidation}
                     placeholder='Password'
                     type='password'
                     ref={passwordInput}
                  />

                  <Button formNoValidate width='100%'>
                     Login to your account
                  </Button>
                  <Flex justifyContent='center' gap='9px'>
                     <BodyText size='M'>Don't have an account?</BodyText>
                     <Link to='/signup'>
                        <BodyText asButton className='redirect-cta' size='M'>
                           Sign up
                        </BodyText>
                     </Link>
                  </Flex>
               </Flex>
            </form>
         </Box>
      </StyledFormPage>
   );
};
