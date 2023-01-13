import styled from 'styled-components';
import BodyText from '../atoms/BodyText';
import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Input } from '../atoms/Input';
import Box from '../containers/Box';
import { Flex } from '../containers/Flex';
import Logo from '../Icons/logo.svg';
import { Link } from 'react-router-dom';
import { useValidateSignUp } from '../hooks/useValidateSignUp';
import { extractErrorCode } from '../utils/extractErrorCode';

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

export const SignUp: React.FC = () => {
   const {
      emailValidation,
      passwordValidation,
      passwordConfirmValidation,
      setEmailValidation,
      setPasswordValidation,
      setPasswordConfirmValidation,
      handleFormSubmit,
      emailInput,
      passwordInput,
      repeatPasswordInput,
      error,
   } = useValidateSignUp();

   return (
      <StyledFormPage direction='column' alignItems='center' gap='82px'>
         <img src={Logo} alt='' />
         <Box width='400px'>
            <form onSubmit={handleFormSubmit}>
               <Flex direction='column' alignItems='stretch' gap='24px'>
                  <Heading>Signup</Heading>
                  {error && (
                     <BodyText size='M' asErrorMessage>
                        {extractErrorCode(error.message)}
                     </BodyText>
                  )}
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

                  <Input
                     validation={passwordConfirmValidation}
                     setValidation={setPasswordConfirmValidation}
                     placeholder='Repeat password'
                     type='password'
                     ref={repeatPasswordInput}
                  />

                  <Button formNoValidate width='100%'>
                     Create an account
                  </Button>
                  <Flex justifyContent='center' gap='9px'>
                     <BodyText size='M'>Already have an account?</BodyText>
                     <Link to='/login'>
                        <BodyText asButton className='redirect-cta' size='M'>
                           Log in
                        </BodyText>
                     </Link>
                  </Flex>
               </Flex>
            </form>
         </Box>
      </StyledFormPage>
   );
};
